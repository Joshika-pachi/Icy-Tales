import React from 'react'
import {Box} from "@mui/material"
import PagesHeader from "../../Common_Components/PagesHeader"
import Accordion from '../../Common_Components/Accordion'
import { alignItems, display, justifyContent, padding } from '@mui/system'

const styles={
  mainBox:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    gap:'50px',
    paddingTop:'50px',
    paddingBottom:'50px'
  },
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontWeight: 500,
    color: "#000",
    fontSize: { xs: "28px", sm: "36px", md: "50px" },
    lineHeight: { xs: "35px", sm: "45px", md: "70px" },
    textAlign: { xs: "center", md: "left" },
  },
  highlight: {
    color: "#FF3CAC",
    fontFamily: "Berkshire Swash",
  },
  tagline: {
    fontFamily: "Archivo",
    fontSize: { xs: "14px", sm: "16px", md: "20px" },
    fontWeight: 300,
    lineHeight: { xs: "22px", sm: "25px", md: "30px" },
    textAlign: { xs: "center", md: "left" },
    marginTop: "10px",
    color:'#646464'
  },
}

const FaqsComp1 = () => {
  return (
    <Box>
        <Box>
            <PagesHeader title={"Faq's"} path={"Faq's"} />
        </Box>
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', paddingTop:'30px'}}>
            <Box sx={styles.headingLine}>
                      Frequently Asked <span style={styles.highlight}>Questions</span>
                    </Box>
                    <Box sx={styles.tagline}>
                      Some of the queries you want to know about us.
                    </Box>
        </Box>
        <Box sx={styles.mainBox}>
          
          <Box>
            <Accordion question={"Do you offer dairy-free or vegan options?"} answer={"Yes"} />
            <Accordion question={"Do you offer dairy-free or vegan options?"} answer={"Yes"} />
            <Accordion question={"Do you offer dairy-free or vegan options?"} answer={"Yes"} />
          </Box>
          <Box>
            <Accordion question={"Do you offer dairy-free or vegan options?"} answer={"Yes"} />
            <Accordion question={"Do you offer dairy-free or vegan options?"} answer={"Yes"} />
            <Accordion question={"Do you offer dairy-free or vegan options?"} answer={"Yes"} />
          </Box>
        </Box>

      
    </Box>
  )
}

export default FaqsComp1
