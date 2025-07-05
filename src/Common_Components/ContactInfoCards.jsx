import React from "react";
import { Box } from "@mui/material";
import {
  alignItems,
  border,
  display,
  flexDirection,
  fontFamily,
  fontSize,
  fontWeight,
  height,
  justifyContent,
  lineHeight,
  padding,
  textAlign,
  width,
} from "@mui/system";
import { ColorPalette } from "../Assets/Colors";

const styles = {
  mainBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "150px",
    width: "350px",
    // border:'2px solid #646464',
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    paddingLeft:'10px'
  },
  title: {
    fontFamily: "Archivo",
    fontWeight: 700,
    fontSize: "22px",
    lineHeight: "22px",
    marginTop: "10px",
  },
  tagline: {
    fontFamily: "Archivo",
    fontWeight: 300,
    fontSize: "18px",
    lineHeight: "22px",
    marginTop: "10px",
    color: "#646464",
    
  },
  iconContainer: {
    width: "80px",
    height: "60px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const ContactInfoCards = ({ icon, title, tag, boxbg }) => {
  return (
    <Box>
      <Box sx={{ ...styles.mainBox }}>
        <Box sx={{ ...styles.iconContainer, background: boxbg,  }}>{icon}</Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingLeft:'20px',
          }}
        >
            <Box sx={{paddingLeft:'15px'}}>
          <Box sx={styles.title}>{title}</Box>
          <Box sx={styles.tagline}>{tag}</Box></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactInfoCards;
