import React from 'react';
import { Box } from '@mui/material';
import PagesHeader from '../../Common_Components/PagesHeader';
import { ColorPalette } from '../../Assets/Colors';
import ReviewsCarouselData from "../../Data/ReviewsCarouselData";
import CardCarousel from "../../Common_Components/cardCarousel";

const styles = {
  mainBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "50px",
    paddingBottom: "50px",
    background: ColorPalette.white,
    px: { sm: 4, md: 8 },
    overflowX:'hidden'
  },
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontWeight: 500,
    color: "#000",
    fontSize: { xs: "28px", sm: "36px", md: "50px" },
    lineHeight: { xs: "35px", sm: "45px", md: "70px" },
    textAlign: "center",
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
    textAlign: "center",
    marginTop: "10px",
    color: "#646464",
    mb: 4,
  },
  carouselBox: {
    width: "100%",
    maxWidth: "1200px",     
    display: "flex",
    justifyContent: "center",
  },
};

const ReviewPage = () => {
  return (
    <Box>
      <PagesHeader title={"Review"} path={"Review"} />

      <Box sx={styles.mainBox}>
        <Box>
          <Box sx={styles.headingLine}>
            Hear From Our <span style={styles.highlight}> Gelato</span><br /> Enthusiasts
          </Box>
          <Box sx={styles.tagline}>
            Read testimonials from those who have enjoyed our artisan gelato.
          </Box>
        </Box>

        <Box sx={styles.carouselBox}>
          <CardCarousel data={ReviewsCarouselData} />
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewPage;
