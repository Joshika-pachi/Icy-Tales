import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import Images from "../../../Assets/Images/Image";
import Button from "../../../Common_Components/Button";

const styles = {
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontSize: "84px",
    fontWeight: 500,
    lineHeight: "80px",
    color: "#FFFFFF",
    marginRight: "50px",
    paddingTop: "50px",
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
    color: "#FFFFFF",
    marginTop: "20px",
  },
};

const Home2Comp1 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: ColorPalette.violet,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "30px",
          marginTop: "5px",
          paddingTop: "40px",
          flexDirection: { xs: "column", md: "row" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {!isSmallScreen && (
          <Box>
            <img
              src={Images.halfcircles}
              alt="Pink Ice"
              style={{
                height: "150px",
                width: "80px",
                marginTop: "50px",
                opacity: 0.3,
              }}
            />
          </Box>
        )}

        <Box>
          <Box
            sx={{
              ...styles.headingLine,
              fontSize: isSmallScreen ? "50px" : styles.headingLine.fontSize,
              lineHeight: isSmallScreen ? "60px" : styles.headingLine.lineHeight,
              marginRight: isSmallScreen ? "0" : "50px",
              paddingTop: isSmallScreen ? "20px" : "50px",
            }}
          >
            Vegan Ice <br />
            Cream Delights
          </Box>

          <Box
            sx={{
              ...styles.tagline,
              fontSize: isSmallScreen ? "14px" : styles.tagline.fontSize,
              lineHeight: isSmallScreen ? "24px" : styles.tagline.lineHeight,
            }}
          >
            Discover a world of tasty vegan ice cream flavors and desserts
            <br />
            that everyone can enjoy.
          </Box>

          <Box sx={{ marginTop: "20px" }}>
            <Button
              text={"Explore our Vegan Flavors"}
              width={248}
              height={56}
              bcolor={ColorPalette.pink}
              onClick={"/shop2"}
              style={{ fontSize: isSmallScreen ? "18px" : "28px" }}
            />
          </Box>

          {!isSmallScreen && (
            <Box>
              <img
                src={Images.dots}
                alt="dots"
                style={{ paddingLeft: "100%", paddingTop: "5%" }}
              />
            </Box>
          )}
        </Box>

        {!isSmallScreen && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "10px",
            }}
          >
            <img
              src={Images.string}
              style={{
                height: "200px",
                width: "300px",
                marginBottom: "-160px",
              }}
              alt="string"
            />
            <img
              src={Images.discount}
              style={{
                height: "100px",
                width: "100px",
                marginBottom: "-165px",
                position: "absolute",
                bottom: "550px",
                right: "540px",
              }}
              alt="discount"
            />
            <img
              src={Images.iceBox}
              alt="Ice Box"
              style={{
                height: "450px",
                width: "660px",
                marginRight: "-40px",
                paddingTop: "0",
                marginTop: "30px",
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home2Comp1;
