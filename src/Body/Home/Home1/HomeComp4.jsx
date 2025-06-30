import React from "react";
import { Box } from "@mui/material";
import CategoryCards from "../../../Common_Components/CategoryCards";
import Images from "../../../Assets/Images/Image";
import { margin, padding } from "@mui/system";

const styles = {
  MainBox: {
    width: "100%",
    backgroundColor: "#FFFFFF",
   
    paddingTop:'30px',
    paddingBottom: "30px",
  },
  headingLine: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "70px",
    fontWeight: 700,
    lineHeight: "80px",
    color: "#000",
  },
  highlight: {
    color: "#FF3CAC",
    fontFamily: "'Playfair Display', serif",
  },
  tagline: {
    fontFamily: "Archivo",
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "30px",
  },
};

const HomeComp4 = () => {
  return (
    <Box >
        <Box sx={styles.MainBox}>
      <Box
        sx={{
          ...styles.headingLine,
          fontSize: "60px",
          lineHeight: "64px",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        Our Classic <span style={styles.highlight}>Favourites</span>
      </Box>
      <Box sx={{ ...styles.tagline, textAlign: "center", marginTop: "5px" }}>
        Check out our top products that our customers love
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "50px",
          gap: "30px",
        }}
      >
        <CategoryCards image={Images.CategoryImage1} name="Sundaes" />
        <CategoryCards image={Images.CategoryIamge2} name="Ice Cream Cones" />
        <CategoryCards image={Images.CategoryImage3} name="Milkshakes" />
        <CategoryCards image={Images.CategoryImage4} name="Seasonal Flavours" />
      </Box>
      </Box>
    </Box>
  );
};

export default HomeComp4;
