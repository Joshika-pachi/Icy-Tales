import React from "react";
import { Box } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import Button from "../../../Common_Components/Button";
import Images from "../../../Assets/Images/Image";
import {
  alignItems,
  display,
  flexDirection,
  justifyContent,
  padding,
} from "@mui/system";
import Carousel from "../../../Common_Components/Carousel";
import gelatoData from "../../../Data/gelatoCarouselData";

const styles = {
  mainBox: {
    background: ColorPalette.gradient,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "50px",
    paddingBottom: "50px",
    flexDirection: "column",
  },
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontWeight: 500,
    color: "#000",
    fontSize: { xs: "28px", sm: "36px", md: "50px" },
    lineHeight: { xs: "35px", sm: "45px", md: "70px" },
    textAlign: { xs: "center", md: "center" },
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
    textAlign: { xs: "center", md: "center" },
    marginTop: "10px",
    color: "#646464",
  },
};

const Home3Comp6 = () => {
  return (
    <Box>
      <Box sx={styles.mainBox}>
        <Box
            sx={{
              position: "absolute",
              left: "0%",
              opacity: "0.1",
            }}
          >
            <img src={Images.icecream} style={{width:'80%', height:'110%'}}/>
          </Box>
        <Box>
          <Box sx={styles.headingLine}>
            Most Popular <span style={styles.highlight}>  Gelato</span> Flavors
          </Box>
          <Box sx={styles.tagline}>
           Discover the gelato flavors that our customers love the most.
          </Box>
        </Box>
        <Box sx={{ display: "flex", position: "relative" }}>
          <Carousel data={gelatoData} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home3Comp6;
