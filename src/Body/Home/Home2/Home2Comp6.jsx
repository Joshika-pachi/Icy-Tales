// import React from "react";
// import { Box } from "@mui/material";
// import { ColorPalette } from "../../../Assets/Colors";
// import Images from "../../../Assets/Images/Image";
// import Carousel from "../../../Common_Components/Carousel";
// import ImageCarousel from "../../../Common_Components/ImageCarousel"
// import Button from "../../../Common_Components/Button";
// import { alignItems, display, flexBasis, flexDirection, height, justifyContent, textAlign, width } from "@mui/system";
// import VeganData from "../../../Data/CarouselData"

// const styles = {
//     mainBox:{
//         display:'flex',
//         background:ColorPalette.white,
        
//     },
//     centerBox:{
//         display:'flex',
//         alignItems:'center',
//         justifyContent:'center',
//         flexDirection:'column',
//         paddingBottom:'50px', 
//         marginLeft:'70px'
//     },
//   headingLine: {
//     fontFamily: "Berkshire Swash",
//     fontSize: "84px",
//     fontWeight: 500,
//     lineHeight: "80px",
//     color: "#000",
//     marginRight: "50px",
//     paddingTop: "50px",
//     textAlign:'center'
//   },
//   highlight: {
//     color: "#FF3CAC",
//     fontFamily: "Berkshire Swash",
//   },
//   tagline: {
//     fontFamily: "Archivo",
//     fontSize: "18px",
//     fontWeight: "400",
//     lineHeight: "30px",
//     color: "#646464",
//     marginTop: "20px",
//     textAlign:'center'
//   },
  
// };

// const Home2Comp6 = () => {
//   return (
//     <Box>
//         <Box sx={styles.mainBox}>
//             <Box sx={{display:'flex', alignItems:'center', justifyContent:'center',background:ColorPalette.white, opacity:'0.1'}}>
//             <img src={Images.icecream} style={{height:'400px', width:'200px', }}></img>
//             </Box>
//       <Box style={styles.centerBox}>
//         <Box>
//         <Box
//           sx={{
//             ...styles.headingLine,
//             fontSize: "50px",
//             lineHeight: "70px",
//           }}
//         >
//           Best <span style={styles.highlight}>Vegan</span> Ice Creams
//         </Box>
//         <Box sx={styles.tagline}>
//          Our best-selling vegan ice creams and desserts.
//         </Box>
//         </Box>
//         <Box >
//         <Carousel data={VeganData}/>
//       </Box>
//       </Box>

//       </Box>
//     </Box>
//   );
// };

// export default Home2Comp6;

import React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import Images from "../../../Assets/Images/Image";
import Carousel from "../../../Common_Components/Carousel";
import VeganData from "../../../Data/CarouselData";

const styles = {
  mainBox: {
    display: "flex",
    background: ColorPalette.white,
    flexDirection: { xs: "column", md: "row" }, // Stack on small screens
  },
  centerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingBottom: "50px",
    marginLeft: { xs: "0px", md: "70px" },
  },
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontSize: { xs: "32px", sm: "40px", md: "50px", lg: "74px" },
    fontWeight: 500,
    lineHeight: { xs: "42px", sm: "50px", md: "60px", lg: "70px" },
    color: "#000",
    marginRight: "50px",
    paddingTop: "50px",
    textAlign: "center",
  },
  highlight: {
    color: "#FF3CAC",
    fontFamily: "Berkshire Swash",
  },
  tagline: {
    fontFamily: "Archivo",
    fontSize: { xs: "14px", sm: "16px", md: "18px" },
    fontWeight: "400",
    lineHeight: "30px",
    color: "#646464",
    marginTop: "20px",
    textAlign: "center",
  },
};

const Home2Comp6 = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm")); // <600px

  return (
    <Box>
      <Box sx={styles.mainBox}>
        {/* Only show ice cream image on medium & large screens */}
        {!isSmall && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: ColorPalette.white,
              opacity: "0.1",
            }}
          >
            <img
              src={Images.icecream}
              style={{ height: "400px", width: "200px" }}
              alt="icecream"
            />
          </Box>
        )}

        <Box sx={styles.centerBox}>
          <Box>
            <Box sx={styles.headingLine}>
              Best <span style={styles.highlight}>Vegan</span> Ice Creams
            </Box>
            <Box sx={styles.tagline}>
              Our best-selling vegan ice creams and desserts.
            </Box>
          </Box>

          <Box>
            <Carousel data={VeganData} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home2Comp6;
