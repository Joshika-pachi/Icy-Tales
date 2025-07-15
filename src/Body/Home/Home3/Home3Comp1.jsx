import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import Images from "../../../Assets/Images/Image";
import { ColorPalette } from "../../../Assets/Colors";
import Button from "../../../Common_Components/Button";

const styles = {
  mainBox: {
    backgroundImage: `url(${Images.Home3Comp1Bg})`,
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  roundBox: {
    background: ColorPalette.white,
    height: { xs: "400px", md: "550px" },
    width: { xs: "400px", md: "570px" },
    borderRadius:"50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: { xs: "0px", md: "48px" },
    padding: { xs: "20px", md: "0px" },
    overflow: "hidden",
    position: "relative",
    textAlign: "center",
    backgroundColor: { xs: ColorPalette.pink, md: ColorPalette.white },
  },
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontWeight: 500,
    fontSize: { xs: "28px", sm: "36px", md: "58px" },
    lineHeight: { xs: "35px", sm: "45px", md: "70px" },
    textAlign: "center",
    color: { xs: "#fff", md: "#000" },
  },
  highlight: {
    color: "#fff",
    fontFamily: "Berkshire Swash",
  },
  highlightLarge: {
    color: "#FF3CAC",
    fontFamily: "Berkshire Swash",
  },
  tagline: {
    fontFamily: "Archivo",
    fontSize: { xs: "14px", sm: "16px", md: "22px" },
    fontWeight: 300,
    lineHeight: { xs: "22px", sm: "25px", md: "30px" },
    textAlign: "center",
    marginTop: "10px",
    color: { xs: "#fff", md: "#646464" },
  },
};

const Home3Comp1 = () => {
  const isSmallScreen = useMediaQuery("(max-width:899px)");

  return (
    <Box>
      <Box sx={isSmallScreen ? { display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#fff" } : styles.mainBox}>
        <Box sx={isSmallScreen ? {} : { marginRight: "600px" }}>
          <Box sx={styles.roundBox}>
            {!isSmallScreen && (
              <Box
                sx={{
                  height: "150px",
                  width: "150px",
                  position: "absolute",
                  background: ColorPalette.pink,
                  borderRadius: "50%",
                  left: "50%",
                  top: "0",
                  transform: "translate(-50%, -50%)",
                }}
              />
            )}

            <Box>
              <Box sx={styles.headingLine}>
                Artisan{" "}
                <span style={isSmallScreen ? styles.highlight : styles.highlightLarge}>
                  Gelato
                </span>{" "}
                Shop
              </Box>
              <Box sx={styles.tagline}>
                Experience the rich, creamy flavors of our artisan gelato creations.
              </Box>
              <Box sx={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
                <Button
                  text={"Discover Our Gelato Flavors "}
                  width={270}
                  height={50}
                  bcolor={ColorPalette.violet}
                  onClick={"/shop3"}
                />
              </Box>
            </Box>
            <Box>
              <img
                src={Images.icecream}
                alt="icecream"
                style={{
                  height: "120px",
                  width: "90px",
                  position: "absolute",
                  left: "50%",
                  top: "93%",
                  transform: "translate(-50%, -50%)",
                  opacity: "0.3",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home3Comp1;
