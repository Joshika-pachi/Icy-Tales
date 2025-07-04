import React from 'react'
import {Box} from "@mui/material"
import AboutUsComp2 from './AboutUsComp2'
import AboutUsComp3 from './AboutUsComp3'
import AboutUsComp4 from './AboutUsComp4'
import AboutUsComp6 from './AboutUsComp6'
import AboutUsComp5 from './AboutUsComp5'
import { ColorPalette } from '../../Assets/Colors'
import PagesHeader from "../../Common_Components/PagesHeader"

const About = () => {
  return (
    <Box sx={{background:ColorPalette.gradient}}>
      {/* First Box  */}
      <Box>
          <PagesHeader title={"About Us"} path={"About Us"} />
      </Box>
      {/* Second Box  */}
      <Box>
      <AboutUsComp2 />
      </Box>
      {/* Third Box  */}
      <Box>
        <AboutUsComp3 />
      </Box>
      {/* Fourth Box  */}
      <Box>
        <AboutUsComp4 />
      </Box>
      {/* Fifth Box  */}
      <Box>
        <AboutUsComp5 />
      </Box>
      {/* Sixth Box  */}
      <Box>
        <AboutUsComp6 />
      </Box>
    </Box>
  )
}

export default About
