import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../Redux/Reducer"; 
import SearchIcon from "@mui/icons-material/Search";
import { Box, InputBase } from "@mui/material";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.products.filters.searchTerm);

  const handleSearchChange = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: "25px",
        padding: "4px 12px",
        backgroundColor: "#fff",
        width: "240px",
      }}
    >
      <InputBase
        placeholder="Search"
        value={searchTerm}
        onChange={(event) =>dispatch(setSearchTerm(event.target.value))}
        style={{ marginLeft: 8, flex: 1 }}
      />
      <SearchIcon style={{ color: "#999" }} />
    </Box>
  );
};

export default SearchBar;
