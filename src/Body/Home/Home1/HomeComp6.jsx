import React from "react";
import { Box } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import Images from "../../../Assets/Images/Image";
import ClassicFavCards from "../../../Common_Components/ClassicFavCards";

const styles = {
  ThirdMain: {
    width: "100%",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: { md: "space-between" },
    alignItems: "center",
    paddingBottom: "30px",
    backgroundColor: ColorPalette.gradient,
    overflowX: "auto",
  },
  ThirdBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
    paddingTop: "50px",
    paddingBottom: "80px",
    width: { xs: "95%", md: "auto" },
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
    fontWeight: "400",
    lineHeight: { xs: "22px", sm: "25px", md: "30px" },
    textAlign: "center",
    marginTop: "5px",
  },
  cardsContainer: {
    display: "flex",
    flexDirection: { xs: "column", sm: "column", md: "row" },
    gap: { xs: "20px", sm: "30px", md: "40px" },
    marginTop: "30px",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  sideImage: {
    height: "300px",
    width: "183px",
    marginTop: "50px",
    opacity: 0.8,
    display: { xs: "none", md: "block" },
  },
};

const HomeComp5 = () => {
  return (
    <Box>
      <Box sx={styles.ThirdMain}>
        <Box sx={{display:{xs:"none", md:"flex"}}}>
          <img
            src={Images.pinkice}
            alt="Pink Ice"
            style={styles.sideImage}
          />
        </Box>
        <Box sx={styles.ThirdBox}>
          <Box>
            <Box sx={styles.headingLine}>
              Our Classic <span style={styles.highlight}>Favourites</span>
            </Box>
            <Box sx={styles.tagline}>
              Check out our top products that our customers love
            </Box>
            <Box sx={styles.cardsContainer}>
              <ClassicFavCards
                img={Images.ClassicFavImage1}
                heading={"Chocolate Brownie Sundae"}
                tagline={"Rich chocolate ice cream with chunks of brownie."}
                price={5.49}
                rating={4.8}
                onclick={'#'}
              />
              <ClassicFavCards
                img={Images.ClassicFavImage2}
                heading={"Strawberry Shortcake"}
                tagline={"Strawberry ice cream layered with shortcake"}
                price={5.29}
                rating={4.9}
                onclick={'#'}
              />
              <ClassicFavCards
                img={Images.ClassicFavImage3}
                heading={"Mint Chocolate Chip Cone"}
                tagline={"Refreshing mint ice cream with chocolate"}
                price={3.99}
                rating={4.5}
                onclick={'#'}
              />
              <ClassicFavCards
                
                img={Images.ClassicFavImage4}
                heading={"Classic Vanilla Ice Cream"}
                tagline={"Creamy vanilla ice cream topped with cherry."}
                price={4.99}
                rating={5.0}
                onclick={'#'}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{display:{xs:"none", md:"flex"}}}>
          <img
            src={Images.chocolateice}
            alt="Chocolate Ice"
            style={styles.sideImage}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeComp5;
