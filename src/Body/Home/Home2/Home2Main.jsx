import React from 'react'
import { Box } from "@mui/material";
import Home2Comp1 from './Home2Comp1';
import Home2Comp2 from './Home2Comp2';
import Home2Comp3 from "./Home2Comp3"

const Home2Main = () => {
  return (
    <Box>
      <Box>
        <Home2Comp1 />
      </Box>
      {/* <Box>
        <Home2Comp2 />
      </Box> */}
      <Box>
        <Home2Comp3 />
      </Box>
    </Box>
  )
}

export default Home2Main
