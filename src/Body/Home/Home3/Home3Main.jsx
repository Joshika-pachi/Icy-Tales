import React from 'react'
import { Box } from '@mui/material'
import Home3Comp1 from './Home3Comp1'
import Home3Comp2 from "./Home3Comp2"
import Home3Comp3 from './Home3Comp3'
import Home3Comp4 from './Home3Comp4'
import Home3Comp5 from './Home3Comp5'
import Home3Comp6 from './Home3Comp6'
import Home3Comp7 from './Home3Comp7'
import Home3Comp8 from './Home3Comp8'

const Home3Main = () => {
  return (
    <Box sx={{overflowX:'hidden'}}>
      {/* First Box  */}
      <Box>
          <Home3Comp1 />
      </Box>
      {/* Second Box  */}
      <Box>
        <Home3Comp2 />
      </Box>
      {/* Third Box  */}
      <Box>
        <Home3Comp3 />
      </Box>
      {/* Fourth Box  */}
      <Box>
        <Home3Comp4 />
      </Box>
      {/* Fifth Box  */}
      <Box>
        <Home3Comp5 />
      </Box>
      {/* Sixth Box  */}
      <Box>
        <Home3Comp6 />
      </Box>
      {/* Seventh Box  */}
      <Box>
        <Home3Comp7 />
      </Box>
      {/* Eigth Box  */}
      <Box>
        <Home3Comp8 />
      </Box>
      
    </Box>
  )
}

export default Home3Main
