import React from 'react'
import { Box } from '@mui/material'
import Home3Comp1 from './Home3Comp1'
import Home3Comp2 from "./Home3Comp2"

const Home3Main = () => {
  return (
    <Box>
      {/* First Box  */}
      <Box>
          <Home3Comp1 />
      </Box>
      {/* Second Box  */}
      <Box>
        <Home3Comp2 />
      </Box>
      
    </Box>
  )
}

export default Home3Main
