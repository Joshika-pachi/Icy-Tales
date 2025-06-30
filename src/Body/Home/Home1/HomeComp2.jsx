import React from 'react'
import { Box } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import Images from "../../../Assets/Images/Image";
import HomeComp1 from "./HomeComp1";
import {
  alignItems,
  display,
  fontFamily,
  justifyContent,
  lineHeight,
  margin,
  width,
} from "@mui/system";
import Button from "../../../Common_Components/Button";

const styles = {
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
  SecondBox: {
    display: "flex",
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    mb: "3",
    backgroundColor: "#FFFFFF",
  },
};

const HomeComp2 = () => {
  return (
    <Box>
       <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          marginTop: "50px",
        }}
      >
        <Box sx={styles.SecondBox}>
          <Box>
            <img
              src={Images.girl}
              style={{ height: "500px", width: "420px", marginRight: "50px" }}
            ></img>
          </Box>
          <Box>
            <Box
              sx={{
                ...styles.headingLine,
                fontSize: "50px",
                lineHeight: "70px",
              }}
            >
              Relive the Sweet <br></br> Memories of Classic <br></br>{" "}
              <span style={styles.highlight}>Ice Cream</span>
            </Box>
            <Box sx={styles.tagline}>
              From rich chocolate fudge to creamy vanilla sundaes, discover our
              menu of classic ice cream creations
            </Box>
            <Box sx={{ marginTop: "20px" }}>
              <Button
                text={"Explore Our Menu"}
                width={234}
                height={62}
                bcolor={ColorPalette.pink}
                onClick={"#"}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default HomeComp2
