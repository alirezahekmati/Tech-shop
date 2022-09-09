import {
  Divider,
  Grid,
  Pagination,
  Paper,
  Skeleton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";
const URL = "http://localhost:1337/api/product-test2s/?populate=*";
export default function Mobile() {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const URL_pagination = `http://localhost:1337/api/product-test2s?pagination[page]=${page}&pagination[pageSize]=${10}&populate=*`;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isValidating, mutate } = useSWR(
    URL_pagination,
    fetcher,
    {
      refreshInterval: 5000,
    }
  );

  const pcArray = data ? (
    data.data.map((e, id) => (
      <Grid item xs={12} sm={6} md={3} key={id}>
        <Box key={id}>
          <Link href={`/pces/${e.id}`}>
            <Paper variant="elevation" elevation={20}>
              <Image
                layout="responsive"
                alt={e.attributes.title}
                src={
                  "http://localhost:1337" + e.attributes.img.data.attributes.url
                }
                width={e.attributes.img.data.attributes.width}
                height={e.attributes.img.data.attributes.height}
              />
              <Typography>
                {e.attributes.title} ${e.attributes.price}
              </Typography>
              {/* description on its ownpage */}
            </Paper>
          </Link>
          <br />
          <Divider />
          <br />
        </Box>
      </Grid>
    ))
  ) : (
    <>
      <Skeleton width={"90vw"} height={"90vh"} />
      <Skeleton width={"90vw"} height={"90vh"} />
      <Skeleton width={"90vw"} height={"90vh"} />
    </>
  );
  return (
    <div>
      {" "}
      <br />
      <Divider />
      <br />
      <Link href={`/`}>Back</Link>
      <Typography>Page:{page}</Typography>
      <Pagination
        count={data && data.meta.pagination.pageCount}
        page={page}
        onChange={handleChange}
      />
      <Grid container spacing={1}>
        {pcArray}
      </Grid>
    </div>
  );
}
