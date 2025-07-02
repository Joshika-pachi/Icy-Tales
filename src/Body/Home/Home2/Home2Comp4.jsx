import React from "react";
import { Box } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import Images from "../../../Assets/Images/Image";
import {
  alignContent,
  alignItems,
  display,
  flexDirection,
  justifyContent,
  textAlign,
} from "@mui/system";
import ImageCarousel from "../../../Common_Components/ImageCarousel";

const styles = {
  mainBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection:'column',
    background: ColorPalette.white,
    paddingTop: "50px",
    paddingBottom: "50px",
  },
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontSize: "70px",
    fontWeight: 500,
    lineHeight: "80px",
    color: "#000",
    textAlign: "center",
  },
  highlight: {
    color: "#FF3CAC",
    fontFamily: "Berkshire Swash",
  },
  tagline: {
    fontFamily: "Archivo",
    fontSize: "20px",
    fontWeight: "300",
    lineHeight: "30px",
    color: "#646464",
    marginTop: "15px",
    textAlign: "center",
  },
};

const Home2Comp4 = () => {
  return (
    <Box>
      <Box sx={styles.mainBox}>
        <Box>
          <Box
            sx={{
              ...styles.headingLine,
              fontSize: "50px",
              lineHeight: "70px",
            }}
          >
            Browse Our Vegan <span style={styles.highlight}>Options</span>
          </Box>
          <Box sx={styles.tagline}>
            Find your new favorite vegan ice cream treat!.
          </Box>
        </Box>
        <Box>
          <Box>
            <ImageCarousel />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home2Comp4;
