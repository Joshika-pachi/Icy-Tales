import React from 'react'
import { Box } from '@mui/material'
import SpecialOffers from './SpecialOffers'
import SpecialOffers2 from './SpecialOffers2'
import SpecialOffers4 from "./SpecialOffers4"
import SpecialOffers3 from './SpecialOffers3'

const SpecialOffersMain = () => {
  return (
    <Box>
        {/* First Box  */}
        <Box>
            <SpecialOffers />
        </Box>
        {/* Scond Box  */}
        <Box>
            <SpecialOffers2 />
        </Box>
        {/* Third Box  */}
        <Box>
          <SpecialOffers3 />
        </Box>
        {/* Fourth Box  */}
        <Box>
            <SpecialOffers4 />
        </Box>
      
    </Box>
  )
}

export default SpecialOffersMain
