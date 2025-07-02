import React from "react";
import { Box } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import Images from "../../../Assets/Images/Image";
import Carousel from "../../../Common_Components/Carousel";
import ImageCarousel from "../../../Common_Components/ImageCarousel"
import Button from "../../../Common_Components/Button";
import { alignItems, display, flexBasis, flexDirection, height, justifyContent, textAlign, width } from "@mui/system";

const styles = {
    mainBox:{
        display:'flex',
        background:ColorPalette.white,
        
    },
    centerBox:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        paddingBottom:'50px', 
        marginLeft:'70px'
    },
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontSize: "84px",
    fontWeight: 500,
    lineHeight: "80px",
    color: "#000",
    marginRight: "50px",
    paddingTop: "50px",
    textAlign:'center'
  },
  highlight: {
    color: "#FF3CAC",
    fontFamily: "Berkshire Swash",
  },
  tagline: {
    fontFamily: "Archivo",
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "30px",
    color: "#646464",
    marginTop: "20px",
    textAlign:'center'
  },
  
};

const Home2Comp6 = () => {
  return (
    <Box>
        <Box sx={styles.mainBox}>
            <Box sx={{display:'flex', alignItems:'center', justifyContent:'center',background:ColorPalette.white, opacity:'0.1'}}>
            <img src={Images.icecream} style={{height:'400px', width:'200px', }}></img>
            </Box>
      <Box style={styles.centerBox}>
        <Box>
        <Box
          sx={{
            ...styles.headingLine,
            fontSize: "50px",
            lineHeight: "70px",
          }}
        >
          Best <span style={styles.highlight}>Vegan</span> Ice Creams
        </Box>
        <Box sx={styles.tagline}>
         Our best-selling vegan ice creams and desserts.
        </Box>
        </Box>
        <Box >
        <Carousel />
      </Box>
      </Box>

      </Box>
    </Box>
  );
};

export default Home2Comp6;
