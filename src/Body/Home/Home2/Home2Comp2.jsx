import React from "react";
import { Box } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import Images from "../../../Assets/Images/Image";
import Carousel from "../../../Common_Components/Carousel";
import ImageCarousel from "../../../Common_Components/ImageCarousel"
import Button from "../../../Common_Components/Button";
import { alignItems, flexBasis, flexDirection, justifyContent, textAlign } from "@mui/system";
import VeganData from "../../../Data/CarouselData"

const styles = {
    mainBox:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        background:ColorPalette.white,
        flexDirection:'column',
        paddingBottom:'50px'
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

const Home2Comp2 = () => {
  return (
    <Box>
      <Box style={styles.mainBox}>
        <Box>
        <Box
          sx={{
            ...styles.headingLine,
            fontSize: "50px",
            lineHeight: "70px",
          }}
        >
          Our Popular  {" "}
          <span style={styles.highlight}>Vegan</span> Treats
        </Box>
        <Box sx={styles.tagline}>
         Check out our favorite vegan ice cream flavors.
        </Box>
        </Box>
        <Box >
        <Carousel data={VeganData}  />
      </Box>
      </Box>

      
    </Box>
  );
};

export default Home2Comp2;
