import React from "react";
import { Box } from "@mui/material";
import CategoryCards from "../../../Common_Components/CategoryCards";
import Images from "../../../Assets/Images/Image";

const styles = {
  MainBox: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    paddingTop: "50px",
    paddingBottom: "50px",
  },
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontWeight: 500,
    color: "#000",
    fontSize: { xs: "28px", sm: "36px", md: "48px" },
    lineHeight: { xs: "35px", sm: "45px", md: "64px" },
    textAlign: "center",
    marginBottom: "10px",
  },
  highlight: {
    color: "#FF3CAC",
    fontFamily: "Berkshire Swash",
  },
  tagline: {
    fontFamily: "Archivo",
    fontSize: { xs: "14px", sm: "16px", md: "18px" },
    fontWeight: "300",
    lineHeight: { xs: "22px", sm: "25px", md: "30px" },
    textAlign: "center",
    marginTop: "5px",
  },
  cardsContainer: {
    display: "flex",
    flexDirection: { xs: "column", sm: "column", md: "row" },
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
    marginBottom: "50px",
    gap: { xs: "20px", sm: "25px", md: "30px" },
  },
};

const HomeComp4 = () => {
  return (
    <Box>
      <Box sx={styles.MainBox}>
        <Box sx={styles.headingLine}>
          Explore Our <span style={styles.highlight}>Categories</span>
        </Box>
        <Box sx={styles.tagline}>
          Check out our top products that our customers love
        </Box>
        <Box sx={styles.cardsContainer}>
          <CategoryCards image={Images.CategoryImage1} name="Sundaes" />
          <CategoryCards image={Images.CategoryIamge2} name="Popsicles" />
          <CategoryCards image={Images.CategoryImage3} name="Milkshakes" />
          <CategoryCards image={Images.ClassicFavImage2} name="Ice Cream Cakes" />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeComp4;

