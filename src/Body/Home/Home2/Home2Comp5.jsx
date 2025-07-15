// import React from "react";
// import { alignItems, Box, display, justifyContent, width } from "@mui/system";
// import { ColorPalette } from "../../../Assets/Colors";
// import Images from "../../../Assets/Images/Image";
// import Button from "../../../Common_Components/Button";

// const styles = {
//   mainBox: {
//     background: ColorPalette.pink,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     paddingTop: "70px",
//     paddingBottom: "70px",
//   },
//   sideImage: {
//     height: {md:"320px",xs:'scale(0.5)'},
//     width: "460px",

//   },
//   headingLine: {
//     fontFamily: "Berkshire Swash",
//     fontSize: "122px",
//     fontWeight: 400,
//     lineHeight: 112,
//     color: ColorPalette.white,
//     textAlign: "center",
//   },
//   highlight: {
//     color: "#FF3CAC",
//     fontFamily: "Berkshire Swash",
//   },
//   tagline: {
//     fontFamily: "Archivo",
//     fontSize: "30px",
//     fontWeight: "300",
//     lineHeight: "30px",
//     color: ColorPalette.white,
//     marginTop: "15px",
//     textAlign: "center",
//   },
//   centerBox: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column",
//     marginLeft: "20px",
//     marginRight: "80px",
//   },
// };

// const Home2Comp5 = () => {
//   return (
//     <Box>
//       <Box sx={styles.mainBox}>
//         <Box>
//           <img src={Images.Home2Comp5Image1} style={styles.sideImage}></img>
//         </Box>
//         <Box>
//           <img
//             src={Images.dots}
//             style={{
//               marginBottom: "190%",
//               height: "50px",
//               position: "relative",
//               left: "-60%",
//               paddingRight: "0",
//               marginRight: "0",
//               width: "90px",
//             }}
//           ></img>
//         </Box>
//         <Box sx={styles.centerBox}>
//           <Box
//             sx={{
//               ...styles.headingLine,
//               fontSize: "50px",
//               lineHeight: "70px",
//             }}
//           >
//             Limited <br></br> Time Offer!
//           </Box>
//           <Box sx={styles.tagline}>
//             Get <span style={{ color: "#FFD800" }}>20% Off</span> All Vegan Ice
//             Creams!
//           </Box>
//           <Box sx={{ marginTop: "30px" }}>
//             <Button
//               text={"Get This Deal"}
//               width={180}
//               height={58}
//               bcolor={ColorPalette.violet}
//               onClick={"#"}
//             ></Button>
//           </Box>
//           <Box sx={{ ...styles.tagline, fontSize: "18px" }}>
//             Use code: <span style={{ color: "#FFD800" }}>VEGAN20</span> at
//             checkout.
//           </Box>
//         </Box>
//         <Box>
//           <img
//             src={Images.singleColorSnake}
//             style={{ position: "relative", top: "100px", left: "50px" }}
//           ></img>
//         </Box>
//         <Box>
//           <img
//             src={Images.Home2Comp5Image2}
//             style={{ ...styles.sideImage, width: "350px", height: "350px" }}
//           ></img>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Home2Comp5; 
 import React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import Images from "../../../Assets/Images/Image";
import Button from "../../../Common_Components/Button";

const styles = {
  mainBox: {
    background: ColorPalette.pink,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "70px",
    paddingBottom: "70px",
  },
  sideImage: {
    height: "320px",
    width: "460px",
  },
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontSize: "102px",
    fontWeight: 400,
    lineHeight: "102px",
    color: ColorPalette.white,
    textAlign: "center",
  },
  highlight: {
    color: "#FF3CAC",
    fontFamily: "Berkshire Swash",
  },
  tagline: {
    fontFamily: "Archivo",
    fontSize: "24px",
    fontWeight: "300",
    lineHeight: "30px",
    color: ColorPalette.white,
    marginTop: "15px",
    textAlign: "center",
  },
  centerBox: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginLeft: { xs: 0, md: "20px" },
  marginRight: { xs: 0, md: "80px" },
  textAlign: "center", 
},
};

const Home2Comp5 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // Only detect screen size

  return (
    <Box>
      <Box sx={styles.mainBox}>
        {/* Left Image */}
        {!isSmallScreen && (
          <Box>
            <img
              src={Images.Home2Comp5Image1}
              style={styles.sideImage}
              alt="left"
            />
          </Box>
        )}

        {/* Dots Image */}
        {!isSmallScreen && (
          <Box>
            <img
              src={Images.dots}
              alt="dots"
              style={{
                marginBottom: "190%",
                height: "50px",
                position: "relative",
                left: "-60%",
                paddingRight: "0",
                marginRight: "0",
                width: "90px",
              }}
            />
          </Box>
        )}

        {/* Center Text */}
        <Box sx={styles.centerBox}>
          <Box
            sx={{
              ...styles.headingLine,
              fontSize: isSmallScreen ? "50px" : styles.headingLine.fontSize,
              lineHeight: isSmallScreen ? "70px" : styles.headingLine.lineHeight,
            }}
          >
            Limited <br /> Time Offer!
          </Box>

          <Box
            sx={{
              ...styles.tagline,
              fontSize: isSmallScreen ? "16px" : styles.tagline.fontSize,
            }}
          >
            Get <span style={{ color: "#FFD800" }}>20% Off</span> All Vegan Ice
            Creams!
          </Box>

          <Box sx={{ marginTop: "30px" }}>
            <Button
              text={"Get This Deal"}
              width={180}
              height={58}
              bcolor={ColorPalette.violet}
              onClick={"#"}
            />
          </Box>

          <Box
            sx={{
              ...styles.tagline,
              fontSize: isSmallScreen ? "14px" : "18px",
            }}
          >
            Use code: <span style={{ color: "#FFD800" }}>VEGAN20</span> at
            checkout.
          </Box>
        </Box>

        {/* Snake Image */}
        {!isSmallScreen && (
          <Box>
            <img
              src={Images.singleColorSnake}
              alt="snake"
              style={{ position: "relative", top: "100px", left: "50px" }}
            />
          </Box>
        )}

        {/* Right Image */}
        {!isSmallScreen && (
          <Box>
            <img
              src={Images.Home2Comp5Image2}
              style={{ ...styles.sideImage, width: "350px", height: "350px" }}
              alt="right"
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home2Comp5;
