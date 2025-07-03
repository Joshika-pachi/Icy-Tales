import React from "react";
import { Box } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import Images from "../../../Assets/Images/Image";
import CardCarousel from "../../../Common_Components/cardCarousel";
import ReviewsCarouselData from "../../../Data/ReviewsCarouselData"
import {
  alignItems,
  display,
  flexDirection,
  justifyContent,
  padding,
} from "@mui/system";

const styles = {
  mainBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "50px",
    paddingBottom: "50px",
    background: ColorPalette.white
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

const Home3Comp7 = () => {
  return (
    <Box>
      <Box sx={styles.mainBox}>
        <Box>
          <Box sx={styles.headingLine}>
            Hear From Our <span style={styles.highlight}> Gelato</span>{" "}
            <br></br> Enthusiasts
          </Box>
          <Box sx={styles.tagline}>
            Read testimonials from those who have enjoyed our artisan gelato.
          </Box>
        </Box>
        <Box>
            <CardCarousel data={ReviewsCarouselData}/>
        </Box>
      </Box>
    </Box>
  );
};

export default Home3Comp7;
