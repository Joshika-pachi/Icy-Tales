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

const styles = {
  mainBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "70%",
    fontFamily: "Archivo",
    color: "#000",
    flexDirection: "column",
  },
};

const Error = () => {
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
        <Box sx={{ color: "#000", fontSize: "140px", fontWeight: 400 }}>
          404
        </Box>
        <Box
          sx={{
            fontFamily: "Archivo",
            fontSize: "36px",
            fontWeight: 500,
            lineHeight: "56px",
            marginBottom: "1%",
          }}
        >
          Sorry! This page is not found :(
        </Box>
        <Box sx={{ color: "#646464", fontSize: "20px" }}>
          Lorem ipsum dolor sit amet, consec tse tur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
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

export default Error;
