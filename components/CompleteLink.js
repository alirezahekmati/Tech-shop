import {
  Divider,
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import Image from "next/image";
import NextLink from "next/link";
import { useEffect, useState } from "react";
// theme.palette.mode link icon name const { pageLink, Icon, label } =

export default function CompleteLink(props) {
  const NavLinks = props.data.map((e, id) => (
    <Grid item xs={12} sm={6} md={2.4} lg={1.5} key={id}>
      <NextLink href={e.pageLink}>
        <ListItem disablePadding>
          <ListItemButton sx={{ justifyContent: "space-evenly" }}>
            <ListItemIcon sx={{ minWidth: "auto" }}>{e.Icon}</ListItemIcon>
            <Typography>{e.label}</Typography>
          </ListItemButton>
        </ListItem>
      </NextLink>
    </Grid>
  ));
  return (
    <>
      <Box
        sx={{
          width: "100%",
          mr: "3em",
        }}
      >
        <ul>
          <Grid
            container
            spacing={1}
            sx={{
              display: "flex",
              width: "100%",
              background: props.isDark ? "hsl(0,0%,15%)" : "hsl(210,79%,46%)",
              color: "white",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            {NavLinks}
          </Grid>
        </ul>
      </Box>
    </>
  );
}
