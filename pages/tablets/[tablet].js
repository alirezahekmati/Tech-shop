import {
  Button,
  Checkbox,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  Paper,
  Rating,
  Skeleton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import EmblaCarousel from "../../components/Carousel";
import Backdrop from "@mui/material/Backdrop";
import CloseIcon from "@mui/icons-material/Close";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
import useSWR from "swr";
import { useState } from "react";

export default function Tablet({}) {
  const router = useRouter();
  const { tablet } = router.query;
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleChangeFav = (event) => {
    setChecked((e) => !e);
  };
  const URL = `http://151.242.117.62:100/api/tablets/${tablet}/?populate=*`;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isValidating, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });
  console.log(data);
  return (
    <div>
      <Link href={`/Tablet`}>
        <Button sx={{ margin: "1em" }}>Back to All tablets</Button>
      </Link>
      <br />
      <Divider />
      <br />

      {data ? (
        <Box sx={{ width: "90%", margin: "auto" }}>
          <Grid container spacing={1} sx={{ justifyContent: "center" }}>
            <Grid item xs={12} sm={6} md={5}>
              <Box sx={{ position: "relative" }}>
                <Paper variant="elevation" elevation={20}>
                  <Box>
                    <EmblaCarousel
                      propData={data.data.attributes.img.data.map((e) => ({
                        URL: `http://151.242.117.62:100${e.attributes.url}`,
                        width: e.attributes.width,
                        height: e.attributes.height,
                        title: data.data.attributes.title,
                      }))}
                    />
                  </Box>
                  <IconButton
                    onClick={handleOpen}
                    sx={{ position: "absolute", top: "1%", right: "1%" }}
                  >
                    <OpenInFullIcon fontSize="large" />
                  </IconButton>
                  <Backdrop
                    sx={{
                      color: "hsl(0,0%,6%)",
                      background: "hsla(0,0%,20%,.9)",
                      zIndex: 1000,
                    }}
                    open={open}
                  >
                    <IconButton
                      onClick={handleClose}
                      sx={{
                        position: "absolute",
                        top: "10%",
                        right: "10%",
                        zIndex: 2000,
                      }}
                    >
                      <CloseIcon fontSize="large" color="error" />
                    </IconButton>
                    <Box
                      sx={{
                        width: "100vw",
                        maxWidth: "600px",
                        maxHeight: "90vh",
                      }}
                    >
                      <EmblaCarousel
                        propData={data.data.attributes.img.data.map((e) => ({
                          URL: `http://151.242.117.62:100${e.attributes.url}`,
                          width: e.attributes.width,
                          height: e.attributes.height,
                          title: data.data.attributes.title,
                        }))}
                      />
                    </Box>
                  </Backdrop>
                  <Checkbox
                    checked={checked}
                    onChange={handleChangeFav}
                    aria-label="favourite or not"
                    icon={<FavoriteBorder color="error" fontSize="large" />}
                    checkedIcon={<Favorite color="error" fontSize="large" />}
                    sx={{ position: "absolute", top: "15%", right: "1%" }}
                  />

                  <Typography>
                    {data.data.attributes.title} ${data.data.attributes.price}
                    <Rating
                      name="rate"
                      value={data.data.attributes.rate}
                      readOnly
                    />
                  </Typography>
                </Paper>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={7}>
              <Paper variant="elevation" elevation={20}>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={12} md={8}>
                    <Typography>{data.data.attributes.description}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={4}>
                    <List>
                      <ListItem disablePadding>
                        Camera:{" "}
                        {data.data.attributes.camera
                          ? data.data.attributes.camera
                          : "-"}
                      </ListItem>
                      <ListItem disablePadding>
                        RAM:{" "}
                        {data.data.attributes.ram
                          ? data.data.attributes.ram
                          : "-"}
                      </ListItem>
                      <ListItem disablePadding>
                        CPU:{" "}
                        {data.data.attributes.cpu
                          ? data.data.attributes.cpu
                          : "-"}
                      </ListItem>
                      <ListItem disablePadding>
                        Size:{" "}
                        {data.data.attributes.size
                          ? data.data.attributes.size
                          : "-"}
                        inches
                      </ListItem>
                      <ListItem disablePadding>
                        Storage:{" "}
                        {data.data.attributes.storage
                          ? data.data.attributes.storage
                          : "-"}
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
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
