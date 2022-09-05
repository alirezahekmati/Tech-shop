import { Button, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";

export default function Home() {
  return (
    <>
      <Typography variant="h4"> Home page</Typography>
      <Paper variant="elevation" elevation={20}>
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </Typography>
        <Button variant="contained">buy</Button>
      </Paper>
    </>
  );
}
