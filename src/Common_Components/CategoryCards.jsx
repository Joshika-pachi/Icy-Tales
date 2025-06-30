// import React from "react";
// import { Box } from "@mui/material";
// import { FaArrowRight } from "react-icons/fa";
// import { ColorPalette } from "../Assets/Colors";
// import { padding } from "@mui/system";

// const styles = {
//   cardContainer: {
//     width: "220px",
//     height: "300px",
//     borderRadius: "16px",
//     overflow: "hidden",
//     boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
//     position: "relative",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//   },
//   footerBox: {
//     position: "absolute",
//     bottom: "0",
//     width: "100%",
//     height: "60px",
//     backgroundColor: "#fff",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "0 16px",
//     borderTopLeftRadius: "16px",
//     borderTopRightRadius: "16px",
//     paddingLeft:'10px',
//     paddingRight:'10px',
//   },
//   nameText: {
//     fontWeight: "600",
//     fontFamily: "Archivo",
//     fontSize: "16px",
//     color: "#000",
//   },
//   iconCircle: {
//     height: "32px",
//     width: "32px",
//     backgroundColor: ColorPalette.pink,
//     borderRadius: "50%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     color: "#fff",
//   },
// };

// const CategoryCards = ({ image, name }) => {
//   return (
//     <Box sx={{ ...styles.cardContainer, backgroundImage: `url(${image})` }}>
//       <Box sx={styles.footerBox}>
//         <Box sx={styles.nameText}>{name}</Box>
//         <Box sx={styles.iconCircle}>
//           <FaArrowRight />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default CategoryCards;


import React from "react";
import { Box } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";
import { ColorPalette } from "../Assets/Colors";

const styles = {
  cardContainer: {
    width: "220px",
    height: "300px",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex", 
    flexDirection: "column", 
    padding: "10px", 
    boxSizing: "border-box",
  },
  footerBox: {
    marginTop: "auto",
    backgroundColor: "#fff",
    borderRadius: "16px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 16px",
  },
  nameText: {
    fontWeight: "600",
    fontFamily: "Archivo",
    fontSize: "16px",
    color: "#000",
  },
  iconCircle: {
    height: "32px",
    width: "32px",
    backgroundColor: ColorPalette.pink,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
};

const CategoryCards = ({ image, name }) => {
  return (
    <Box sx={{ ...styles.cardContainer, backgroundImage: `url(${image})` }}>
      <Box sx={styles.footerBox}>
        <Box sx={styles.nameText}>{name}</Box>
        <Box sx={styles.iconCircle}>
          <FaArrowRight />
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryCards;
