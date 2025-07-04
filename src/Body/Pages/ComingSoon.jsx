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
import { CiInstagram } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaPinterestP } from "react-icons/fa6";

const styles = {
  mainBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "70%",
    fontFamily: "Berkire Swash",
    color: "#000",
    flexDirection: "column",
  },
};

const ComingSoon = () => {
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
            <img src={Images.logo} style={{height:"140%",}}></img>
        </Box>
        <Box sx={{ color: "#000", fontSize: "110px", fontWeight: 400 }}>
          Coming Soon
        </Box>
        <Box sx={{ color: "#646464", fontSize: "20px" }}>
          Be the first to know when our new site is live
        </Box>
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'40px'}}>
         <Box
              sx={{
                color: ColorPalette.tagline,
                height: "50px",
                width: "550px",
                boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                paddingLeft: "15px",
                borderRadius: "8px",
                backgroundColor: "#fff",
                marginRight: "10px",
                paddingTop: "0px",
              }}
            >
              Enter your email address
            </Box>
            <Button
              text={"Subscribe"}
              width={160}
              height={50}
              bcolor={ColorPalette.pink}
              onClick={() => alert("Subscribed!")}
            />
        </Box>
        <Box sx={{color:ColorPalette.pink, marginTop:'30px',display:'flex', gap:'10px'}}>
              <CiInstagram size={30} />
              <FiYoutube size={30}/>
              <CiFacebook size={30} />
              <CiLinkedin size={30}/>
              <FaPinterestP size={30}/>
        </Box>
      </Box>
    </Box>
  );
};

export default ComingSoon;
