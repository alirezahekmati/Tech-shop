import {
  Autocomplete,
  Button,
  Divider,
  Grid,
  Pagination,
  Paper,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import usePagination from "../lib/usePagination";
import useSWR from "swr";

const PAGE_SIZE = 10;
export default function Mobile() {
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(9999);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const URL = `http://151.242.117.62:100/api/mobiles/?populate=*`;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const earlyFetch = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });

  const URL_pagination = `http://151.242.117.62:100/api/mobiles?pagination[page]=${page}&pagination[pageSize]=${PAGE_SIZE}&populate=*`;
  const { data, error, isValidating, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });

  // console.log(data);
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
            <Link href={`/mobiles/${e.id}`}>
              <Paper variant="elevation" elevation={20}>
                <Image
                  layout="responsive"
                  alt={e.attributes.title}
                  src={
                    "http://151.242.117.62:100" +
                    e.attributes.img.data.attributes.url
                  }
                  width={e.attributes.img.data.attributes.width}
                  height={e.attributes.img.data.attributes.height}
                />
                <Typography>
                  {e.attributes.title} ${e.attributes.price}
                </Typography>
                {/* description on its ownpage */}
              </Paper>
            </Link>
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
  // console.log(
  //   searchResult.length && searchResult.data.map((e) => e.attributes.title)
  // );
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
      {/* <Autocomplete
        disablePortal
        options={
          
        }
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="seach .. " />}
      /> */}
      {/*  .filter(e=> e.title.tolowercase.includes(searchInput.tolowercase())) */}
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
