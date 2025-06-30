import React from "react";
import { Box } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import Images from "../../../Assets/Images/Image";
import ClassicFavCards from "../../../Common_Components/ClassicFavCards";
const styles = {
  ThirdMain: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "30px",
    backgroundColor: ColorPalette.gradient,
  },
  ThirdBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
  },
  ThirdMiddle: {
    ml: "30px",
    mr: "30px",
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

const HomeComp3 = () => {
  return (
    <Box>
      <Box sx={styles.ThirdMain}>
        {/* Left Image */}
        <Box>
          <img
            src={Images.pinkice}
            alt="Pink Ice"
            style={{
              height: "300px",
              width: "243px",
              marginTop: "50px",
              opacity: 0.8,
            }}
          />
        </Box>

        {/* Center Content */}
        <Box sx={styles.ThirdBox}>
          <Box sx={styles.ThirdMiddle}>
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
            <Box
              sx={{ ...styles.tagline, textAlign: "center", marginTop: "5px" }}
            >
              Check out our top products that our customers love
            </Box>
            <Box sx={{ display: "flex", gap: "40px", marginTop: "30px" }}>
              <ClassicFavCards
                img={Images.ClassicFavImage1}
                heading={"Chocolate Brownie Sundae"}
                tagline={"Rich chocolate ice cream with chunks of brownie."}
                price={5.49}
                rating={4.8}
              />
              <ClassicFavCards
                img={Images.ClassicFavImage2}
                heading={"Strawberry Shortcake"}
                tagline={"Strawberry ice cream layered with shortcake"}
                price={5.29}
                rating={4.9}
              />
              <ClassicFavCards
                img={Images.ClassicFavImage3}
                heading={"Mint Chocolate Chip Cone"}
                tagline={"Refreshing mint ice cream with chocolate"}
                price={3.99}
                rating={4.5}
              />
              <ClassicFavCards
                img={Images.ClassicFavImage4}
                heading={"Classic Vanilla Ice Cream"}
                tagline={"Creamy vanilla ice cream topped with cherry."}
                price={4.99}
                rating={5.0}
              />
            </Box>
          </Box>
        </Box>

        {/* Right Image */}
        <Box>
          <img
            src={Images.chocolateice}
            alt="Chocolate Ice"
            style={{
              height: "300px",
              width: "243px",
              marginTop: "50px",
              opacity: 0.8,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeComp3;
