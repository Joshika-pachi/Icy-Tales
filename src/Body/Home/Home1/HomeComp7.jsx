// import React from "react";
// import { Box } from "@mui/material";
// import { ColorPalette } from "../../../Assets/Colors";
// import { display, flex, flexDirection, fontFamily, fontSize, fontWeight, padding } from "@mui/system";
// import { IoStar } from "react-icons/io5";
// import Images from "../../../Assets/Images/Image"

// const styles = {
//   MainBox: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: ColorPalette.gradient,
//     flexDirection: "column",
//     paddingTop: "30px",
//     paddingBottom: "30px",
//   },
//   headingLine: {
//     fontFamily: "'Playfair Display', serif",
//     fontSize: "64px",
//     fontWeight: 400,
//     lineHeight: "80px",
//     color: "#000",
//   },
//   highlight: {
//     color: "#FF3CAC",
//     fontFamily: "'Playfair Display', serif",
//   },
//   tagline: {
//     fontFamily: "Archivo",
//     fontSize: "18px",
//     fontWeight: "400",
//     lineHeight: "30px",
//   },
//   middleBox: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: "30px",
//     width: "50%",
//     padding: "20px",
//     fontFamily:"Archivo",
//     fontSize:'22px',
//     fontWeight:400
//   },
//   namesBox:{
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: "30px",
//     flexDirection:'column',
//   }
// };

// const HomeComp7 = () => {
//   return (
//     <Box>
//       <Box sx={styles.MainBox}>
//         <Box></Box>
//         <Box>
//           <Box
//             sx={{
//               ...styles.headingLine,
//               fontSize: "54px",
//               lineHeight: "70px",
//               textAlign: "center",
//               marginBottom: "10px",
//             }}
//           >
//             Hear from our <span style={styles.highlight}>Happy</span> <br></br>{" "}
//             <span style={styles.highlight}>Icecream</span> Lovers
//           </Box>
//           <Box
//             sx={{ ...styles.tagline, textAlign: "center", marginTop: "5px" }}
//           >
//             Discover the favorites that keep our customers coming back for more
//           </Box>
//         </Box>
//         {/* Middle Box */}
//         <Box style={styles.middleBox}>
//           <Box>
//             Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
//             voluptas as pernatur aut odit aut fugit, sed beatae vitae dicta
//             ripiscing elit, sed do euismod tempor incidunt. Labore et dolore
//             magna aliqua ut enim ad minim adipiscing elit, sed do euismod tempor
//             incidunt aut labore.
//           </Box>
//         </Box>
//         {/* Names Box  */}
//         <Box sx={styles.namesBox}>
//             <Box sx={{color:ColorPalette.pink, fontWeight:300, fontFamily:'Archivo', fontSize:'20px'}}>
//                 Kevin Andrew
//             </Box>
//             <Box sx={{fontSize:'18px', fontWeight:200, fontFamily:'Archivo', padding:'5px'}}>Happy Customer</Box>
//             <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}><IoStar size={20} style={{ color: "gold" }} />
//             <IoStar size={20} style={{ color: "gold" }} />
//             <IoStar size={20} style={{ color: "gold" }} />
//             <IoStar size={20} style={{ color: "gold" }} />
//             <IoStar size={20} style={{ color: "gold" }} />
//             </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default HomeComp7;

import React from "react";
import { Box } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import { IoStar } from "react-icons/io5";
import Images from "../../../Assets/Images/Image";

const styles = {
  MainBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: ColorPalette.gradient,
    flexDirection: "column",
    paddingTop: "50px",
    paddingBottom: "50px",
    position: "relative",
  },
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontWeight: 400,
    lineHeight: "80px",
    color: "#000",
    fontSize: "48px",
    lineHeight: "70px",
    textAlign: "center",
    marginBottom: "10px",
  },
  highlight: {
    color: "#FF3CAC",
    fontFamily: "Berkshire Swash",
  },
  tagline: {
    fontFamily: "Archivo",
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "30px",
  },
  middleBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
    width: "50%",
    padding: "20px",
    fontFamily: "Archivo",
    fontSize: "22px",
    fontWeight: 400,
    textAlign: "center",
  },
  namesBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
    flexDirection: "column",
  },
  imageCircle: {
    position: "absolute",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    overflow: "hidden",
  },
};

const HomeComp7 = () => {
  return (
    <Box>
      <Box sx={styles.MainBox}>
        <Box>
          <Box
            sx={{
              ...styles.headingLine,
            }}
          >
            Hear from our <span style={styles.highlight}>Happy</span> <br />{" "}
            <span style={styles.highlight}>Icecream</span> Lovers
          </Box>
          <Box
            sx={{ ...styles.tagline, textAlign: "center", marginTop: "5px" }}
          >
            Discover the favorites that keep our customers coming back for more
          </Box>
        </Box>

        {/* Middle Box */}
        <Box sx={styles.middleBox}>
          <Box>
            Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas as pernatur aut odit aut fugit, sed beatae vitae dicta
            ripiscing elit, sed do euismod tempor incidunt. Labore et dolore
            magna aliqua ut enim ad minim adipiscing elit, sed do euismod tempor
            incidunt aut labore.
          </Box>
        </Box>

        {/* Names Box */}
        <Box sx={styles.namesBox}>
          <Box
            sx={{
              color: ColorPalette.pink,
              fontWeight: 300,
              fontFamily: "Archivo",
              fontSize: "20px",
            }}
          >
            Kevin Andrew
          </Box>
          <Box
            sx={{
              fontSize: "18px",
              fontWeight: 200,
              fontFamily: "Archivo",
              padding: "5px",
            }}
          >
            Happy Customer
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {[...Array(5)].map((_, i) => (
              <IoStar key={i} size={20} style={{ color: "gold" }} />
            ))}
          </Box>
        </Box>

        {/* Side  Images */}
        <Box sx={{ ...styles.imageCircle, top: "10%", left: "5%" }}>
          <img
            src={Images.Home1Comp7People1}
            alt="person"
            width="100%"
            height="100%"
          />
        </Box>
        <Box sx={{ ...styles.imageCircle, top: "35%", left: "8%" }}>
          <img
            src={Images.Home1Comp7Person2}
            alt="person"
            width="100%"
            height="100%"
          />
        </Box>
        <Box sx={{ ...styles.imageCircle, bottom: "15%", left: "15%" }}>
          <img
            src={Images.Home1Comp7Person3}
            alt="person"
            width="100%"
            height="100%"
          />
        </Box>
        <Box sx={{ ...styles.imageCircle, top: "10%", right: "5%" }}>
          <img
            src={Images.Home1Comp7Person4}
            alt="person"
            width="100%"
            height="100%"
          />
        </Box>
        <Box sx={{ ...styles.imageCircle, top: "35%", right: "8%" }}>
          <img
            src={Images.Home1Comp7Person5}
            alt="person"
            width="100%"
            height="100%"
          />
        </Box>
        <Box sx={{ ...styles.imageCircle, bottom: "15%", right: "15%" }}>
          <img
            src={Images.Home1Comp7Person6}
            alt="person"
            width="100%"
            height="100%"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeComp7;
