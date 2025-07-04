import React from "react";
import { Box } from "@mui/material";
import {
  alignItems,
  color,
  display,
  flexDirection,
  fontFamily,
  height,
  justifyContent,
  width,
} from "@mui/system";
import Button from "../../Common_Components/Button";
import { ColorPalette } from "../../Assets/Colors";
import { Link } from "react-router-dom";
import Images from "../../Assets/Images/Image";

const styles = {
  mainBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "70%",
    color: "#000",
    flexDirection: "column",
  },
};

const ThankYou = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: ColorPalette.gradient,
      }}
    >
      <Box sx={styles.mainBox}>
        <Box>
            <img src={Images.smiley} style={{height:'120px', width:'120px'}}></img>
        </Box>
        <Box sx={{ color: "#000", fontSize: "90px", fontWeight: 100,fontFamily: "Berkshire Swash", }}>
          Thank You
        </Box>
        <Box sx={{ color: "#646464", fontSize: "20px" , fontFamily:'Archivo'}}>
         We're delighted you've decided to treat yourself to our delectable ice creams.<br></br>
Your order has been received and is now being prepared with care.
        </Box>
        <Link to="/">
        <Box sx={{marginTop:'30px'}}>
            <Button text={"Back to Home"} width={180} height={52} bcolor={ColorPalette.pink} />
        </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default ThankYou;
