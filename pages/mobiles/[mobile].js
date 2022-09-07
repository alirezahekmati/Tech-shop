import { Button, Divider, Paper, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
import useSWR from "swr";

export default function Mobile({}) {
  const router = useRouter();
  const { mobile } = router.query;
  console.log(mobile);

  const URL = `http://localhost:1337/api/mobiles/${mobile}/?populate=*`;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isValidating, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });
  console.log(data);

  return (
    <div>
      <br />
      <Divider />
      <br />
      {data ? (
        <Box>
          <Link href="/Mobile">Back</Link>
          <Image
            layout="responsive"
            alt={data.data.attributes.title}
            src={
              "http://localhost:1337" +
              data.data.attributes.img.data.attributes.url
            }
            width={data.data.attributes.img.data.attributes.width}
            height={data.data.attributes.img.data.attributes.height}
          />
          <Paper variant="elevation" elevation={20}>
            <Typography variant="h4" gutterBottom>
              {data.data.attributes.title}
            </Typography>
            <Typography variant="body2">
              ${data.data.attributes.price}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {data.data.attributes.description}
            </Typography>
            <Button variant="contained" color="secondary">
              add to cart
            </Button>
          </Paper>
        </Box>
      ) : (
        <Box
          sx={{
            height: "50vh",
          }}
        >
          <Skeleton width="90vw" height="60%" sx={{ margin: 0, padding: 0 }} />
          <Skeleton width="30vw" height="20%" />
          <Skeleton width="70vw" height="20%" />
        </Box>
      )}

      <br />
      <Divider />
      <br />
    </div>
  );
}
