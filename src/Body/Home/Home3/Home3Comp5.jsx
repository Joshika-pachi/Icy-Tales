


import React from "react";
import { Box } from "@mui/material";
import Images from "../../../Assets/Images/Image";
import { ColorPalette } from "../../../Assets/Colors";
import Button from "../../../Common_Components/Button";

const styles = {
  mainBox: {
    background: ColorPalette.violet,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    flexDirection: { xs: "column", md: "row" }, 
    paddingY: { xs: "40px", md: "0" },
    textAlign: { xs: "center", md: "left" },
  },
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontWeight: 500,
    color: "#FFFFFF",
    fontSize: { xs: "34px", sm: "44px", md: "92px" },
    lineHeight: { xs: "42px", sm: "55px", md: "110px" },
    textAlign: { xs: "center", md: "left" },
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
    textAlign: { xs: "center", md: "left" },
    marginTop: "10px",
    color: "#FFFFFF",
  },
};

const Home3Comp5 = () => {
  return (
    <Box>
      <Box sx={styles.mainBox}>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <img
            src={Images.crossCircle}
            style={{ position: "absolute", left: "5%", top: "65%" }}
            alt="cross circle"
          />
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" }, position: "absolute", left: "10%", top: "30%" }}>
          <img src={Images.wpsideTriangles} alt="triangles" />
        </Box>

        {/* Text & CTA */}
        <Box sx={{ marginLeft: { xs: "0", md: "10%" }, zIndex: 1 }}>
          <Box sx={styles.headingLine}>
            Gelato Lovers' <br /> Special!!!
          </Box>
          <Box sx={styles.tagline}>
            Buy Any Two Gelato Pints, Get One{" "}
            <span style={{ color: "#FFD800" }}>Free </span>
          </Box>
          <Box sx={{ paddingTop: "3%" }}>
            <Button
              text={"Claim Offer"}
              width={180}
              height={62}
              bcolor={ColorPalette.pink}
              onClick={"/specialOffers"}
            />
          </Box>

          <Box sx={{ display: { xs: "none", md: "block" }, position: "absolute", left: "50%", top: "75%" }}>
            <img src={Images.snakes} alt="snakes" />
          </Box>
        </Box>

        {/* Right-side Bowl Image - hidden on small screens */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <img
            src={Images.icecreamBowl}
            alt="ice cream bowl"
            style={{
              height: "580px",
              width: "620px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home3Comp5;
