import React from "react";
import { Box } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import PlainCrads from "../../../Common_Components/PlainCrads";
import Images from "../../../Assets/Images/Image";

const styles = {
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontWeight: 400,
    color: "#000",
    fontSize: { xs: "28px", sm: "36px", md: "48px" },
    lineHeight: { xs: "35px", sm: "50px", md: "70px" },
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
    fontWeight: "400",
    lineHeight: { xs: "22px", sm: "25px", md: "30px" },
    color: ColorPalette.tagline,
    textAlign: "center",
    marginTop: "5px",
  },
};

const HomeComponent9 = () => {
  return (
    <Box sx={{ paddingTop: "50px", paddingBottom: "80px" }}>
      <Box>
        <Box sx={styles.headingLine}>
          Follow us on <span style={styles.highlight}>Instagram</span>
        </Box>
        <Box sx={styles.tagline}>
          Join our Instagram community for updates, special deals, and more!
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: { xs: "10px", sm: "15px", md: "20px" },
          marginTop: "20px",
          paddingX: { xs: "10px", sm: "0" },
        }}
      >
        <PlainCrads img={Images.PlainCardImage1} />
        <PlainCrads img={Images.PlainCardImage2} />
        <PlainCrads img={Images.PlainCardImage3} />
        <PlainCrads img={Images.PlainCardImage4} />
        <PlainCrads img={Images.PlainCardImage5} />
      </Box>
    </Box>
  );
};

export default HomeComponent9;
