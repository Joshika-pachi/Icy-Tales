import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Box } from "@mui/material";      
import NavLayout from "../../Common_Components/NavLayout";  

const HomeLayout = () => (
  <Box sx={{ padding: "20px" }}>
 
    <Box >
      <Link to="/Home1Main">Home 1</Link>
      <Link to="/Home2Main">Home 2</Link>
      <Link to="/Home3Main">Home 3</Link>
    </Box>
    <Outlet />
  </Box>
);

export default HomeLayout;

