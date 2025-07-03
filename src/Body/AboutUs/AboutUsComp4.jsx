import React from 'react'
import { Box } from '@mui/material'
import { alignItems, display, flexDirection, justifyContent, padding } from '@mui/system';


const styles={
    mainBox:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        paddingTop:'50px'
    },
    headingLine: {
    fontFamily: "Berkshire Swash",
    fontWeight: 400,
    color: "#000",
    fontSize: { xs: "48px", sm: "76px", md: "60px" },
    lineHeight: { xs: "55px", sm: "75px", md: "64px" },
    textAlign: { xs: "center", md: "left" },
  },
  highlight: {
    color: "#FF3CAC",
    fontFamily: "Berkshire Swash",
  },
  tagline: {
    fontFamily: "Archivo",
    fontSize: { xs: "14px", sm: "16px", md: "18px" },
    fontWeight: 300,
    lineHeight: { xs: "22px", sm: "25px", md: "30px" },
    textAlign: { xs: "center", md: "left" },
    marginTop: "10px",
    color: "#646464",
  },

};

const AboutUsComp4 = () => {
  return (
    <Box>
        <Box sx={styles.mainBox}>
            <Box sx={styles.headingLine} >
            Our <span style={styles.highlight}> Statistics</span>
          </Box>
          <Box sx={styles.tagline}>
            What makes us special through our impressive statistics.
          </Box>
            
        </Box>
      
    </Box>
  )
}

export default AboutUsComp4
