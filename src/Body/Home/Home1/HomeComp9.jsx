import React from "react";
import { Box } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import { display, justifyContent } from "@mui/system";
import PlainCrads from "../../../Common_Components/PlainCrads";
import Images from "../../../Assets/Images/Image";

const styles = {
  MainBox: {
    display: "flex",
    justifyContent: "center",
    background: ColorPalette.gradient,
    
  },
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontWeight: 400,
    lineHeight: "80px",
    color: "#000",
    fontSize: "48px",
    lineHeight: "70px",
    textAlign: "center",
    marginBottom: "10px",
    
  },
  highlight: {
    color: "#FF3CAC",
    fontFamily: "Berkshire Swash",
  },
  tagline: {
    fontFamily: "Archivo",
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "30px",
    color: ColorPalette.tagline,
  },
};

const HomeComponent9 = () => {
  return (
    <Box>
      <Box sx={{paddingTop: "50px",paddingBottom: "80px",}}>
        {/* Headings box  */}
        <Box>
          <Box sx={styles.headingLine}>
            Follow us on <span style={styles.highlight}>Instagram</span>
          </Box>
          <Box
            sx={{ ...styles.tagline, textAlign: "center", marginTop: "5px" }}
          >
            Join our Instagram community for updates, special deals, and more!
          </Box>
        </Box>
        {/* Image box  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            
          }}
        >
          <PlainCrads img={Images.PlainCardImage1} />
          <PlainCrads img={Images.PlainCardImage2} />
          <PlainCrads img={Images.PlainCardImage3} />
          <PlainCrads img={Images.PlainCardImage4} />
          <PlainCrads img={Images.PlainCardImage5} />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeComponent9;
