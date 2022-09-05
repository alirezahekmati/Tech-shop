import { Button, Divider, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import NextLink from "next/link";

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

      <Paper variant="elevation" elevation={15}>
        <Image
          alt="photo of a laptop"
          src={"/laptop.jpg"}
          width={970}
          height={647}
          layout="responsive"
        />
      </Paper>
    </>
  );
}
