import React from 'react'
import { Box } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import Images from "../../../Assets/Images/Image";
import Button from "../../../Common_Components/Button";

const styles = {
  MainBox: {
    width: "100%",
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "center",
    alignItems: "center",
    gap: { xs: 4, md: 0 },
    overflowX: "auto",
  },
  contentBox: {
    textAlign: { xs: "center", md: "left" },
  },
  iceimage: {
    position: "absolute",
    width: "224px",
    height: "363px",
    opacity: 0.05,
    top: "120px",
  },
  firstLine: {
    height: "40px",
    width: "355px",
    fontFamily: "Berkshire Swash",
    fontWeight: "400",
    fontSize: { xs: "24px", sm: "32px", md: "40px" },
    lineHeight: "40px",
    marginTop: "100px",
    textAlign: { xs: "center", md: "left" },
  },
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontSize: { xs: "36px", sm: "50px", md: "70px" },
    fontWeight: 500,
    lineHeight: { xs: "45px", sm: "60px", md: "80px" },
    color: "#000",
    textAlign: { xs: "center", md: "left" },
  },
  highlight: {
    color: "#FF3CAC",
    fontFamily: "Berkshire Swash",
  },
  tagline: {
    fontFamily: "Archivo",
    fontSize: { xs: "14px", sm: "16px", md: "20px" },
    fontWeight: "300",
    lineHeight: { xs: "22px", sm: "25px", md: "30px" },
    textAlign: { xs: "center", md: "left" },
    marginTop: "10px",
  },
  image: {
    height: "400px",
    width: "400px",
    marginTop: "100px",
    marginLeft: { xs: 0, md: "80px" },
    flexShrink: 0,
  },
};

const HomeComp1 = () => {
  return (
    <Box>
      <Box>
        <img src={Images.icecream} alt="icecream" style={styles.iceimage} />
      </Box>
      <Box sx={styles.MainBox}>
        <Box sx={styles.contentBox}>
          <Box sx={styles.firstLine}>Welcome to the</Box>
          <Box sx={styles.headingLine}>
            Classic <span style={styles.highlight}>Ice</span> <br />
            <span style={styles.highlight}>Cream</span> Parlor
          </Box>
          <Box sx={styles.tagline}>
            Savor the taste of traditional ice cream made with love and<br />
            quality ingredients.
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <Button
              text={"Browse Our Classic Flavors"}
              width={304}
              height={62}
              bcolor={ColorPalette.violet}
              onClick={"#"}
            />
          </Box>
        </Box>
        <Box>
          <img
            src={Images.bigicecream}
            alt="big icecream"
            style={styles.image}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default HomeComp1
