import { Divider, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

import useSWR from "swr";
const URL = "http://localhost:1337/api/mobiles/?populate=*";
export default function Mobile() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isValidating, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });
  console.log(data);
  const pcArray =
    data &&
    data.data.map((e, id) => (
      <Box key={id}>
        <Link href={`/mobiles/${e.id}`}>
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
              {e.attributes.title} and ${e.attributes.price}
            </Typography>
            {/* description on its ownpage */}
          </Paper>
        </Link>
        <br />
        <Divider />
        <br />
      </Box>
    ));
  return (
    <div>
      {" "}
      <br />
      <Divider />
      <br />
      <Link href={`/`}>Back</Link>
      {pcArray}
    </div>
  );
}
