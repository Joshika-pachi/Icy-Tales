import React from "react";
import { Box } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import Carousel from "../../../Common_Components/Carousel";
import VeganData from "../../../Data/CarouselData";

const styles = {
  mainBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: ColorPalette.white,
    flexDirection: "column",
    pb: { xs: 3, sm: 5, md: 8 },
    pt: { xs: 2, sm: 4, md: 6 },
    px: { xs: 1, sm: 2, md: 4, lg: 0 },
    width: "100%",
    minHeight: { xs: "auto", md: "100vh" },
  },
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontWeight: 500,
    color: "#000",
    textAlign: "center",
    width: "100%",
    maxWidth: "1200px",
    mx: "auto",
    fontSize: {
      xs: "clamp(24px, 7vw, 32px)",
      sm: "clamp(32px, 8vw, 40px)",
      md: "clamp(40px, 7vw, 64px)",
      lg: "84px",
    },
    lineHeight: {
      xs: "1.15",
      sm: "1.1",
      md: "1.05",
      lg: "80px",
    },
    mb: { xs: 1, sm: 2, md: 3 },
    mt: { xs: 2, sm: 3, md: 6 },
    wordBreak: "break-word",
  },
  highlight: {
    color: "#FF3CAC",
    fontFamily: "Berkshire Swash",
  },
  tagline: {
    fontFamily: "Archivo",
    fontWeight: 400,
    color: "#646464",
    textAlign: "center",
    mx: "auto",
    maxWidth: { xs: "98vw", sm: "90vw", md: "600px" },
    fontSize: {
      xs: "clamp(13px, 4vw, 15px)",
      sm: "clamp(15px, 3vw, 18px)",
      md: "18px",
    },
    lineHeight: { xs: "1.4", md: "30px" },
    mt: { xs: 1, md: 2 },
    mb: { xs: 2, md: 4 },
  },
  carouselBox: {
    width: { xs: "100vw", sm: "90vw", md: "80vw", lg: "60vw", xl: "1200px" },
    maxWidth: "1200px",
    mx: "auto",
    mt: { xs: 2, md: 4 },
    minHeight: { xs: "210px", sm: "260px", md: "320px" },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const Home2Comp2 = () => {
  return (
    <Box sx={styles.mainBox}>
      <Box sx={styles.headingLine}>
        Our Popular <span style={styles.highlight}>Vegan</span> Treats
      </Box>
      <Box sx={styles.tagline}>
        Check out our favorite vegan ice cream flavors.
      </Box>
      <Box sx={styles.carouselBox}>
        <Carousel data={VeganData} />
      </Box>
    </Box>
  );
};

export default Home2Comp2;
