import React from "react";
import { Box } from "@mui/material";
import HomeComp1 from "./HomeComp1";
import HomeComp2 from "./HomeComp2";
import HomeComp3 from "./HomeComp3";
import HomeComp4 from "./HomeComp4";

const Home1 = () => {
  return (
    <Box>
      {/* First box */}
      <Box>
        <HomeComp1 />
      </Box>
      {/* Second Box  */}
      <Box>
        <HomeComp2 />
      </Box>
      {/* Third Box  */}
      <Box>
        <HomeComp3 />
      </Box>
      {/* Fourth Box */}
      <HomeComp4 />
    </Box>
  );
};

export default Home1;
