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

const Home3Comp3 = () => {
  return (
    <Box>
      <Box sx={styles.mainBox}>
        <Box>
          <Box sx={styles.headingLine}>
            Our <span style={styles.highlight}> Asian Gelato</span> Flavors
          </Box>
          <Box sx={styles.tagline}>
            Check out our selection of artisanal gelato flavors.
          </Box>
        </Box>
        <Box sx={{ display: "flex", position: "relative" }}>
          <Carousel data={gelatoData} />
          <Box
            sx={{
              position: "absolute",
              transform: "scaleX(-1)",
              left: "100%",
              opacity: "0.2",
            }}
          >
            <img src={Images.icecream} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home3Comp3;
