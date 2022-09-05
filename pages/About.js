import Typography from "@mui/material/Typography";
import NextLink from "next/link";
// import post from "../Utils/api/PostPutDelete";
// const strapiApiURL = "http://localhost:1337/api/texts";
// const data = {
//   data: {
//     id: 8,
//     attributes: {
//       text: "llllst from next js ",
//     },
//     meta: {},
//   },
//   meta: {},
// };
export default function B() {
  // post(strapiApiURL, "POST", data);
  return (
    <>
      <Typography> About page</Typography>
      <NextLink href={"/"}>back to home</NextLink>
    </>
  );
}
