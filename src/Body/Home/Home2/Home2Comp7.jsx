// import React from "react";
// import { Box } from "@mui/material";
// import { ColorPalette } from "../../../Assets/Colors";
// import { IoStar } from "react-icons/io5";
// import Images from "../../../Assets/Images/Image";
// import { alignContent, alignItems, display, justifyContent, lineHeight } from "@mui/system";
// import ReviewCarousel from "../../../Common_Components/ReviewCarousel";

// const styles = {
//   mainBox:{
//     display:'flex',
//     justifyContent:'center',
//     alignItems:'center',
//     background:ColorPalette.gradient
//   }
// };

// const Home2Comp7 = () => {
//   return (
//     <Box>
//       <Box sx={styles.mainBox}>
//       <Box>
//         <img src={Images.violetBlocks} style={{position:'relative', left:'-100px',top:"-70px"}}></img>
//       </Box>
//       <Box>
//         <ReviewCarousel />
//       </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Home2Comp7;

import React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import Images from "../../../Assets/Images/Image";
import ReviewCarousel from "../../../Common_Components/ReviewCarousel";

const styles = {
  mainBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: ColorPalette.gradient,
    flexDirection: { xs: "column", md: "row" }, // stack vertically on small screens
    paddingY: "40px", // add vertical spacing
    overflow: "hidden", // prevent image overflow
  },
  sideImage: {
    position: "relative",
    left: { xs: "0px", md: "-100px" },
    top: { xs: "0px", md: "-70px" },
    width: { xs: "200px", md: "auto" },
    marginBottom: { xs: "20px", md: "0" },
  },
  carouselWrapper: {
    width: "100%",
    maxWidth: "1000px",
    paddingX: { xs: "10px", sm: "20px", md: "40px" },
  },
};

const Home2Comp7 = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <Box sx={styles.mainBox}>
        {/* Decorative Image */}
        <Box sx={{display:{xs:"none", md:"block"}}}>
          <img
            src={Images.violetBlocks}
            style={{
              position: "relative",
              left:  "-100px",
              top: "-70px",
              width: "auto",
              marginBottom: "0px",
            }}
            alt="violet blocks"
          />
        </Box>

        {/* Review Carousel */}
        <Box sx={styles.carouselWrapper}>
          <ReviewCarousel />
        </Box>
      </Box>
    </Box>
  );
};

export default Home2Comp7;
