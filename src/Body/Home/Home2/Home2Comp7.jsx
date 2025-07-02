import React from "react";
import { Box } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import { IoStar } from "react-icons/io5";
import Images from "../../../Assets/Images/Image";
import { alignContent, alignItems, display, justifyContent, lineHeight } from "@mui/system";
import ReviewCarousel from "../../../Common_Components/ReviewCarousel";

const styles = {
  mainBox:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
};

const Home2Comp7 = () => {
  return (
    <Box>
      <Box sx={styles.mainBox}>
      <Box>
        <img src={Images.violetBlocks} style={{position:'relative', left:'-100px',top:"-70px"}}></img>
      </Box>
      <Box>
        <ReviewCarousel />
      </Box>
      </Box>
    </Box>
  );
};

export default Home2Comp7;
