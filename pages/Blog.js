import Typography from "@mui/material/Typography";
import useSWR from "swr";
import NextLink from "next/link";
import { Grid, Paper, Skeleton } from "@mui/material";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const strapiApiURL = "http://151.242.117.62:100/api/texts";
const randomTextApiURL = "https://baconipsum.com/api/?type=meat-and-filler";
const apiPlaceholderArray = new Array(5);
export default function A() {
  const { data, error } = useSWR(strapiApiURL, fetcher, {
    refreshInterval: 1000,
  });

  return (
    <>
      <Typography> a Blog by </Typography>
      <Grid container spacing={3}>
        {data
          ? data.data.map((e, id) => (
              <Grid item xs={12} sm={6} md={4} key={id}>
                <Paper variant="elevation" elevation={20}>
                  <Typography>{e.attributes.publishedAt}</Typography>
                  <Typography>{e.attributes.text}</Typography>
                </Paper>
              </Grid>
            ))
          : apiPlaceholderArray.map((e, id) => (
              <Grid item xs={12} sm={6} md={4} key={id}>
                <Skeleton sx={{ width: "100%", height: "100%" }} />
              </Grid>
            ))}
      </Grid>

      <NextLink href={"/"}>back to home</NextLink>
    </>
  );
}
