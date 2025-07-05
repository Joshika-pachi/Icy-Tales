import React from "react";
import { alignItems, Box, display, justifyContent, width } from "@mui/system";
import { ColorPalette } from "../../Assets/Colors";
import Images from "../../Assets/Images/Image";
import Button from "../../Common_Components/Button";

const styles = {
  mainBox: {
    background: ColorPalette.pink,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "70px",
    paddingBottom: "70px",
  },
  sideImage: {
    height: "320px",
    width: "460px",
  },
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontSize: "122px",
    fontWeight: 400,
    lineHeight: 112,
    color: ColorPalette.white,
    textAlign: "center",
  },
  highlight: {
    color: "#FF3CAC",
    fontFamily: "Berkshire Swash",
  },
  tagline: {
    fontFamily: "Archivo",
    fontSize: "30px",
    fontWeight: "300",
    lineHeight: "30px",
    color: ColorPalette.white,
    marginTop: "15px",
    textAlign: "center",
  },
  centerBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginLeft: "20px",
    marginRight: "80px",
  },
};

const FaqsComp2 = () => {
  return (
    <Box>
      <Box sx={styles.mainBox}>
        <Box>
          <img src={Images.Home2Comp5Image1} style={styles.sideImage}></img>
        </Box>
        <Box>
          <img
            src={Images.dots}
            style={{
              marginBottom: "190%",
              height: "50px",
              position: "relative",
              left: "-60%",
              paddingRight: "0",
              marginRight: "0",
              width: "90px",
            }}
          ></img>
        </Box>
        <Box sx={styles.centerBox}>
          <Box
            sx={{
              ...styles.headingLine,
              fontSize: "50px",
              lineHeight: "70px",
            }}
          >
            Limited <br></br> Time Offer!
          </Box>
          <Box sx={styles.tagline}>
            Get <span style={{ color: "#FFD800" }}>20% Off</span> All Vegan Ice
            Creams!
          </Box>
          <Box sx={{ marginTop: "30px" }}>
            <Button
              text={"Get This Deal"}
              width={180}
              height={58}
              bcolor={ColorPalette.violet}
              onClick={"#"}
            ></Button>
          </Box>
          <Box sx={{ ...styles.tagline, fontSize: "18px" }}>
            Use code: <span style={{ color: "#FFD800" }}>VEGAN20</span> at
            checkout.
          </Box>
        </Box>
        <Box>
          <img
            src={Images.singleColorSnake}
            style={{ position: "relative", top: "100px", left: "50px" }}
          ></img>
        </Box>
        <Box>
          <img
            src={Images.Home2Comp5Image2}
            style={{ ...styles.sideImage, width: "350px", height: "350px" }}
          ></img>
        </Box>
      </Box>
    </Box>
  );
};

export default FaqsComp2;
