// import React from "react";
// import { Box } from "@mui/material";
// import {
//   alignItems,
//   color,
//   display,
//   flexDirection,
//   fontFamily,
//   height,
//   justifyContent,
//   width,
// } from "@mui/system";
// import Button from "../../Common_Components/Button";
// import { ColorPalette } from "../../Assets/Colors";
// import { Link } from "react-router-dom";
// import Images from "../../Assets/Images/Image";
// import { CiInstagram } from "react-icons/ci";
// import { FiYoutube } from "react-icons/fi";
// import { CiFacebook } from "react-icons/ci";
// import { CiLinkedin } from "react-icons/ci";
// import { FaPinterestP } from "react-icons/fa6";

// const styles = {
//   mainBox: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     width: "70%",
//     fontFamily: "Berkire Swash",
//     color: "#000",
//     flexDirection: "column",
//   },
// };

// const ComingSoon = () => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: ColorPalette.gradient,
//       }}
//     >
//       <Box sx={styles.mainBox}>
//         <Box>
//             <img src={Images.logo} style={{height:"140%",}}></img>
//         </Box>
//         <Box sx={{ color: "#000", fontSize: "110px", fontWeight: 400 }}>
//           Coming Soon
//         </Box>
//         <Box sx={{ color: "#646464", fontSize: "20px" }}>
//           Be the first to know when our new site is live
//         </Box>
//         <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'40px'}}>
//          <Box
//               sx={{
//                 color: ColorPalette.tagline,
//                 height: "50px",
//                 width: "550px",
//                 boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
//                 textAlign: "left",
//                 display: "flex",
//                 alignItems: "center",
//                 paddingLeft: "15px",
//                 borderRadius: "8px",
//                 backgroundColor: "#fff",
//                 marginRight: "10px",
//                 paddingTop: "0px",
//               }}
//             >
//               Enter your email address
//             </Box>
//             <Button
//               text={"Subscribe"}
//               width={160}
//               height={50}
//               bcolor={ColorPalette.pink}
//               onClick={() => alert("Subscribed!")}
//             />
//         </Box>
//         <Box sx={{color:ColorPalette.pink, marginTop:'30px',display:'flex', gap:'10px'}}>
//               <CiInstagram size={30} />
//               <FiYoutube size={30}/>
//               <CiFacebook size={30} />
//               <CiLinkedin size={30}/>
//               <FaPinterestP size={30}/>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ComingSoon;


import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ColorPalette } from "../../Assets/Colors";
import Images from "../../Assets/Images/Image";
import Button from "../../Common_Components/Button";
import { CiInstagram, CiFacebook, CiLinkedin } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa6";

const styles = {
  mainBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    fontFamily: "Berkshire Swash",
    color: "#000",
    flexDirection: "column",
    padding: "20px",
    textAlign: "center",
  },
  emailBox: {
    color: ColorPalette.tagline,
    height: "50px",
    boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    paddingLeft: "15px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    flexGrow: 1,
  },
};

const ComingSoon = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: ColorPalette.gradient,
        height: "100vh",
        padding: { xs: "20px", sm: "40px" },
      }}
    >
      <Box sx={{ ...styles.mainBox, width: { xs: "100%", sm: "90%", md: "70%" } }}>
        <Box>
          <img src={Images.logo} style={{ height: "100px" }} alt="Logo" />
        </Box>

        <Box
          sx={{
            color: "#000",
            fontSize: { xs: "40px", sm: "60px", md: "100px" },
            fontWeight: 400,
            marginTop: "20px",
          }}
        >
          Coming Soon
        </Box>

        <Box
          sx={{
            color: "#646464",
            fontSize: { xs: "16px", sm: "18px", md: "20px" },
            marginTop: "10px",
            textAlign: "center",
            fontFamily:"Archivo"
          }}
        >
          Be the first to know when our new site is live
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
            gap: "15px",
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <Box
            sx={{
              ...styles.emailBox,
              width: { xs: "100%", sm: "350px", md: "500px", fontFamily:"Archivo" },
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

        <Box
          sx={{
            color: ColorPalette.pink,
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <CiInstagram size={30} />
          <FiYoutube size={30} />
          <CiFacebook size={30} />
          <CiLinkedin size={30} />
          <FaPinterestP size={30} />
        </Box>
      </Box>
    </Box>
  );
};

export default ComingSoon;
