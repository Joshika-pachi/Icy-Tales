import React from "react";
import { Box } from "@mui/material";
import HomeComp1 from "./HomeComp1";
import HomeComp2 from "./HomeComp2";
import HomeComp3 from "./HomeComp3";
import HomeComp4 from "./HomeComp4";
import HomeComp5 from "./HomeComp5";
import HomeComp6 from "./HomeComp6";
import HomeComp7 from "./HomeComp7";
import HomeComp8 from "./HomeComp8";
import HomeComp9 from "./HomeComp9";

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
      <Box>
        <HomeComp4 />
      </Box>
      {/* Fifth Box */}
      {/* <Box>
        <HomeComp5 />
      </Box> */}
      {/* Sixth Box  */}
      <Box>
        <HomeComp6 />
      </Box>
      {/* Seventh Box  */}
      <Box>
        <HomeComp7 />
      </Box>
      {/* Eigth Box  */}
      <Box>
        <HomeComp8 />
      </Box>
      {/* Ninth Box  */}
      <Box>
        <HomeComp9 />
      </Box>
    </Box>
  );
};

export default Home1;
