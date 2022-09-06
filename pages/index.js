import { Box, Button, Divider, Grid, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import NextLink from "next/link";
import { useState } from "react";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import EmblaCarousel from "../components/Carousel";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
export default function Home() {
  return (
    <>
      <br />
      <Divider />
      <br />
      <Paper variant="elevation" elevation={15}>
        <Typography variant="h4" gutterBottom>
          Incredible Prices on All Your Favorite Items
        </Typography>

        <Typography variant="body2">
          Get more for less on selected brands
        </Typography>
        <Button variant="contained" color="secondary">
          Shop now
        </Button>
      </Paper>
      <br />
      <Divider />
      <br />
      <EmblaCarousel />

      <br />
      <Divider />
      <br />
      <Box sx={{ position: "relative" }}>
        <Image
          alt="photo of a laptop"
          src={"/iphone.webp"}
          width={320}
          height={350}
          layout="responsive"
        />
        <Box
          sx={{ position: "absolute", top: "30%", left: "10%", color: "white" }}
        >
          <Typography variant="body2" gutterBottom>
            Holiday Deals
          </Typography>
          <Typography variant="h4" gutterBottom>
            Up to 30% off
          </Typography>
          <Typography variant="body2" gutterBottom>
            Selected Smartphone Brands
          </Typography>
          <Button color="inherit" variant="outlined">
            Shop
          </Button>
        </Box>
      </Box>

      <br />
      <Divider />
      <br />

      <Box sx={{ position: "relative" }}>
        <Image
          alt="photo of a gaming pc"
          src={"/headphone.webp"}
          width={320}
          height={350}
          layout="responsive"
        />
        <Box
          sx={{ position: "absolute", top: "30%", left: "10%", color: "white" }}
        >
          <Typography variant="body2" gutterBottom>
            Just In
          </Typography>
          <Typography variant="h4" gutterBottom>
            Take Your Sound Anywhere
          </Typography>
          <Typography variant="body2" gutterBottom>
            Top Headphone Brands
          </Typography>
          <Button color="inherit" variant="outlined">
            Shop
          </Button>
        </Box>
      </Box>
      <br />
      <Divider />
      <br />

      <Grid container>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Paper variant="outlined">
            <ViewInArIcon sx={{ fontSize: "350%" }} color="secondary" />
            <Typography>Curb-side pickup</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Paper variant="outlined">
            <LocalShippingIcon sx={{ fontSize: "350%" }} color="secondary" />
            <Typography>Free shipping on orders over $50</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Paper variant="outlined">
            <PriceCheckIcon sx={{ fontSize: "350%" }} color="secondary" />
            <Typography>Low prices guaranteed</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3}>
          <Paper variant="outlined">
            <AccessTimeIcon sx={{ fontSize: "350%" }} color="secondary" />
            <Typography>Available to you 24/7 </Typography>
          </Paper>
        </Grid>
      </Grid>
      <br />
      <Divider />
      <br />
    </>
  );
}
