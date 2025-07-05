import React from 'react'
import { Box } from '@mui/material'
import FaqsComp1 from './FaqsComp1'
import FaqsComp2 from "./FaqsComp2"
import FaqsComp3 from './FaqsComp3'

const FaqsMain = () => {
  return (
    <Box>
        {/* First Box  */}
        <Box>
            <FaqsComp1 />
        </Box>
        {/* Second Box  */}
        <Box>
            <FaqsComp2 />
        </Box>
        {/* Third Box  */}
        <Box>
            <FaqsComp3 />
        </Box>
      
    </Box>
  )
}

export default FaqsMain
