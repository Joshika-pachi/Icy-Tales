import React from "react";
import { Box } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import Images from "../../../Assets/Images/Image";

import {
  alignItems,
  color,
  display,
  flexWrap,
  fontFamily,
  justifyContent,
  lineHeight,
  margin,
  padding,
  textAlign,
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
    fontSize: {md:"20px", xs:"16px"},
    flexWrap:{xs:'wrap', md:'no-wrap'},
    fontWeight: "300",
    lineHeight: "30px",
    color: "#646464",
    marginTop: "15px",
  },
  SecondBox: {
    display: "flex",
    width: {md:"70%",xs:"85%"},
    justifyContent: "center",
    alignItems: "center",
    mb: "3",
    backgroundColor: "#FFFFFF",
    marginLeft:'70px',
    flexDirection:{xs: "column", lg:'row', },
    padding:{xs:'20px', md:'0'},
    textAlign:{xs:'center',md:'left'}
  },
};

const Home2Comp3 = () => {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          paddingTop: "50px",
          paddingBottom: "50px",
          background: ColorPalette.gradient,
        }}
      >
        <Box sx={{ paddingRight: "30px" }}>
          <Box>
            <img src={Images.dots} style={{ paddingBottom: "10%", marginLeft:'20px' }}></img>
          </Box>
          <Box>
            <img
              src={Images.SideCircles}
              style={{ paddingTop: "90%", paddingLeft: "100px" }}
            ></img>
          </Box>
        </Box>
        <Box sx={styles.SecondBox}>
          <Box>
            <img
              src={Images.Home2Comp3Image}
              style={{ height: "500px", width: "420px", marginRight: "50px" }}
            ></img>
          </Box>
          <Box sx={{width:'600px'}}>
            <Box
              sx={{
                ...styles.headingLine,
                fontSize: "50px",
                lineHeight: "70px",
              }}
            >
              Our Guilt-Free <br></br>
              <span style={styles.highlight}>Vegan</span> Ice Cream
            </Box>
            <Box sx={styles.tagline}>
              Enjoy creamy, dairy-free ice cream that’s both tasty and kind to
              the planet.
            </Box>
            <Box sx={styles.tagline}>
              Delicious Flavors Made With Only the Best Plant-<br></br>
              Based Ingredients.
            </Box>
            <Box sx={{ marginTop: "20px" }}>
              <Button
                text={"See our Vegan Menu"}
                width={234}
                height={62}
                bcolor={ColorPalette.pink}
                onClick={"#"}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={{display:'flex',alignItems:'flex-end', justifyContent:'flex-end'}}>
            <img src={Images.icecream} style={{transform: 'scaleX(-1)', opacity:'0.1', width:'80%',}} ></img>
        </Box>
      </Box>
    </Box>
  );
};

export default Home2Comp3;

