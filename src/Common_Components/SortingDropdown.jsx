import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../Redux/Reducer"; 
import { Box, MenuItem, Select, FormHelperText } from "@mui/material";
import { fontFamily, fontWeight } from "@mui/system";

const styles = {
  container: {
    minWidth: 160,
    fontFamily:'Archivo'
  },
  select: {
    borderRadius: "25px",
    backgroundColor: "#fff",
    height: "40px",
    fontSize: "14px",
    fontWeight:500,
  },
};

const SortDropdown = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.products.filters.sort);

  const handleSortChange = (event) => {
    dispatch(setSort(event.target.value));
  };

  return (
    <Box sx={styles.container}>
      <Select
        value={sort}
        onChange={handleSortChange}
        displayEmpty
        inputProps={{ "aria-label": "Sort" }}
        sx={styles.select}
      >
        <MenuItem value="default">
          <em>Sort: Default</em>
        </MenuItem>
        <MenuItem value="low-to-high">Price: Low to High</MenuItem>
        <MenuItem value="high-to-low">Price: High to Low</MenuItem>
      </Select>
    </Box>
  );
};

export default SortDropdown;
