import React from "react";
import { Box } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import Comp5Image from "./Comp5Image.png";
import { height, width } from "@mui/system";

const styles = {
  mainBox:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop:'50px',
    paddingBottom:'50px',
    width: "100%",
    // height:'1000px'

  },
  imageBox: {
    
    backgroundColor: ColorPalette.violet,
    display: "flex",
    justifyContent: "flex-end",
    height:'600px',
  },
  image: {
    width:'40%',
    // height: "600px",
    objectFit: "cover",
    borderRadius: "10px",
    
  },
};

const HomeComp5 = () => {
  return (
    <Box sx={{width:'100%'}}>
      <Box style={styles.imageBox}>

      <Box sx={styles.imageBox}>
        <img src={Comp5Image} alt="Comp5" style={styles.image}/>
      </Box>
      </Box>
    </Box>
  );
};

export default HomeComp5;


