import React from "react";
import { Box } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import ImageCarousel from "../../../Common_Components/ImageCarousel";

const styles = {
  mainBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: ColorPalette.white,
    paddingTop: "50px",
    paddingBottom: "50px",
  },
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontSize: { xs: "32px", sm: "40px", md: "50px", lg: "70px" }, 
    fontWeight: 500,
    lineHeight: { xs: "40px", sm: "50px", md: "60px", lg: "80px" },
    color: "#000",
    textAlign: "center",
  },
  highlight: {
    color: "#FF3CAC",
    fontFamily: "Berkshire Swash",
  },
  tagline: {
    fontFamily: "Archivo",
    fontSize: { xs: "14px", sm: "16px", md: "20px" }, 
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
          <Box sx={styles.headingLine}>
            Browse Our Vegan <span style={styles.highlight}>Options</span>
          </Box>
          <Box sx={styles.tagline}>
            Find your new favorite vegan ice cream treat!
          </Box>
        </Box>
        <Box mt={4}>
          <ImageCarousel />
        </Box>
      </Box>
    </Box>
  );
};

export default Home2Comp4;
