import React from 'react'
import { Box } from '@mui/material'
import Shop1Comp1 from './Shop1Comp1'
import { ColorPalette } from '../../../Assets/Colors'

const Shop1Main = () => {
  return (
    <Box sx={ColorPalette.gradient}>
        {/* First Box  */}
        <Box>
            <Shop1Comp1 />
        </Box>
    </Box>
  )
}

export default Shop1Main
