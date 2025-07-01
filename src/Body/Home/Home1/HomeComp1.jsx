import React from 'react'
import { Box } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import Images from "../../../Assets/Images/Image";
import Button from "../../../Common_Components/Button";

const styles = {
  MainBox: {
    // height: "720px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "space-around",
    flexDirection: "row",
    marginRight: "300px",
   
  },
  contentBox: {
    top: "0",
    // marginLeft: "-400px",
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
    fontSize: "40px",
    lineHeight: "40px",
    marginTop: "100px",
  },
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontSize: "70px",
    fontWeight: 500,
    lineHeight: "80px",
    color: "#000",
  },
  highlight: {
    color: "#FF3CAC",
    fontFamily: "Berkshire Swash",
  },
  tagline: {
    fontFamily: "Archivo",
    fontSize: "20px",
    fontWeight: "300",
    lineHeight: "30px",
  },
  sideImageBox: {
    // height:'428px',
    // width:'428px',
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
            Savor the taste of traditional ice cream made with love and<br></br>
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
        <Box sx={styles.sideImageBox}>
          <img
            src={Images.bigicecream}
            alt="big icecream"
            style={{
              height: "400px",
              width: "400px",
              marginTop: "100px",
              marginLeft: "80px",
            }}
          />
        </Box>
      </Box>
      </Box>
    
  )
}

export default HomeComp1
