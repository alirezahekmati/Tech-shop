import {
  Button,
  Divider,
  Grid,
  Pagination,
  Paper,
  Rating,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import usePagination from "../lib/usePagination";
import useSWR from "swr";

export default function Mobile() {
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(9999);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const [checked, setChecked] = useState(false);

  const handleChangeFav = (event) => {
    setChecked((e) => !e);
  };
  const URL = `http://localhost:1337/api/tablets/?populate=*`;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isValidating, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });

  const pcArray = data ? (
    data.data
      .filter(
        (e) =>
          e.attributes.title
            .toLowerCase()
            .includes(searchInput.toLowerCase()) &&
          e.attributes.price >= minPrice &&
          e.attributes.price <= maxPrice
      )
      .map((e, id) => (
        <Grid item xs={6} sm={3} md={2} key={id}>
          <Box>
            <Paper variant="elevation" elevation={20}>
              <Box sx={{ position: "relative" }}>
                <Image
                  layout="responsive"
                  alt={e.attributes.title}
                  src={
                    "http://localhost:1337" +
                    e.attributes.img.data[0].attributes.url
                  }
                  width={e.attributes.img.data[0].attributes.width}
                  height={e.attributes.img.data[0].attributes.height}
                />
                <Checkbox
                  checked={checked}
                  onChange={handleChangeFav}
                  aria-label="favourite or not"
                  icon={<FavoriteBorder color="error" />}
                  checkedIcon={<Favorite color="error" />}
                  sx={{ position: "absolute", top: "1%", right: "1%" }}
                />
              </Box>
              <Typography>
                {e.attributes.title} ${e.attributes.price}
                <Rating name="rate" value={e.attributes.rate} readOnly />
              </Typography>
              <Link href={`/tablets/${e.id}`}>
                <Typography>click to see more</Typography>
              </Link>
            </Paper>
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
  console.log(data);
  //   const pcArray = [1, 2, 1];
  const [filteredElemants, totalPage] = usePagination(pcArray, page, 10);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "stretch",
          padding: "10px 15px",
          cursor: "pointer",
        }}
      >
        <input
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.currentTarget.value);
          }}
          placeholder="search..."
          style={{
            borderTopLeftRadius: "5px",
            borderBottomLeftRadius: "5px",
            border: "1px solid hsl(0,0%,70%)",
          }}
        />
        <Button startIcon={<SearchIcon />} variant="contained">
          Search
        </Button>
      </Box>
      <Stack spacing={1} direction="row">
        <TextField
          label="highest-Price"
          type={"number"}
          value={minPrice}
          onChange={(e) => {
            setMinPrice(e.currentTarget.value);
          }}
        />
        <TextField
          label="Lowest-Price"
          type={"number"}
          value={maxPrice}
          onChange={(e) => {
            setMaxPrice(e.currentTarget.value);
          }}
        />
      </Stack>
      <Typography>search result for :{searchInput.toLowerCase()}</Typography>
      <br />
      <Divider />
      <br />

      <Link href={`/`}>
        <Button sx={{ margin: "1em" }}>Back to Home</Button>
      </Link>
      <Typography>Page:{page}</Typography>
      <Pagination count={totalPage} page={page} onChange={handleChange} />

      <Grid container spacing={2}>
        {filteredElemants ? (
          filteredElemants
        ) : (
          <>
            <Typography align="center" variant="h4" component={"p"} m="1em">
              notting found!
            </Typography>
          </>
        )}
      </Grid>
    </div>
  );
}
