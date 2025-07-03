import React from "react";
import { Box } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import Images from "../../../Assets/Images/Image";
import Button from "../../../Common_Components/Button";

const styles = {
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontWeight: 500,
    color: "#000",
    fontSize: { xs: "28px", sm: "36px", md: "50px" },
    lineHeight: { xs: "35px", sm: "45px", md: "70px" },
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
    color: "#646464",
  },
  SecondBox: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    width: { xs: "95%", sm: "90%", md: "80%", lg: "70%" },
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    gap: { xs: 4, md: 0 },
    textAlign: { xs: "center", md: "left" },
    overflowX: "auto",
  },
  image: {
    height: "450px",
    width: "460px",
    marginRight: { xs: 0, md: "50px" },
    marginBottom: { xs: "20px", md: 0 },
    flexShrink: 0, // prevent image from shrinking
  },
};

const Home3Comp2 = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        paddingTop: "50px",
        paddingBottom: "50px",
        position: "relative",
      }}
    >
      <Box>
        <img
          src={Images.SideCircles}
          style={{ position: "absolute", top: "35%", left: "10%" }}
        ></img>
      </Box>
      <Box sx={styles.SecondBox}>
        <Box>
          <img
            src={Images.Home3Comp2Image}
            alt="Ice cream girl"
            style={styles.image}
          />
        </Box>
        <Box sx={{ paddingLeft: "50px" }}>
          <Box sx={styles.headingLine}>
            Experience the <br /> Art Of{" "}
            <span style={styles.highlight}> Gelato</span>
          </Box>
          <Box sx={styles.tagline}>
            Handcrafted Flavors with Fresh, Local Ingredients.
            <br></br>
            Enjoy gelato made with the finest ingredients and traditional
            techniques.
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <Button
              text={"See Our Gelato Menu"}
              width={234}
              height={62}
              bcolor={ColorPalette.pink}
              onClick={() => {}}
            />
          </Box>
        </Box>
      </Box>
      <Box>
        <img src={Images.SideTraingle}></img>
      </Box>
      <Box>
        <img src={Images.twoCircles} style={{position:'absolute',bottom:'0', right:'10%'}}></img>
      </Box>
    </Box>
  );
};

export default Home3Comp2;
