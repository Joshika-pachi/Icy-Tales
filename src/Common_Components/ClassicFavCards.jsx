// import { borderRadius, display, flexDirection, fontSize, fontWeight } from "@mui/system";
// import React from "react";
// import { Box } from "@mui/material";
// import { ColorPalette } from "../Assets/Colors";
// import { FaShoppingCart } from "react-icons/fa";
// import { IoStar } from "react-icons/io5";

// const styles = {
//   heading: {
//     fontWeight: "700",
//     fontFamily: "archivo",
//     fontSize: "16px",
//     lineHeight: "24px",
//     color: "#0F0200",
//   },
//   tagline: {
//     fontFamily: "Archivo",
//     fontSize: "10px",
//     fontWeight: "400",
//     lineHeight: "24px",
//     color: "#646464",
//   },
// };

// const ClassicFavCards = ({ img, heading, tagline, price, rating }) => {
//   return (
//     <Box>
//       <Box
//         sx={{
//           width: "220px",
//           backgroundColor: "#FFFFFF",
//           borderRadius: "10px",
//           top: "10px",
//           left: "10px",
//           marginBottom: "15px",
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <img
//             src={img}
//             style={{
//               height: "180px",
//               width: "180px",
//               marginTop: "12px",
//               backgroundColor: "#F7F2F7",
//               borderRadius: "10px",
//               filter: "brightness(90%)",
//               opacity: 0.9,
//             }}
//           ></img>
//         </Box>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-between",
//             marginTop: "7px",
//             paddingLeft:'10px',
//             paddingRight:'10px',
//           }}
//         >
//           <Box sx={styles.heading}>{heading}</Box>
//           <Box>
//             <IoStar size={20} style={{ color: "gold" }} />
//             {rating}
//           </Box>
//         </Box>
//         <Box sx={{paddingLeft:'10px', paddingRight:'10px'}}>{tagline}</Box>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-between",
//             alignItems: "center",
//             // marginTop: "2px",
//             padding:'10px'
//           }}
//         >
//         <Box
//             sx={{
//               color: ColorPalette.pink,
//               font: "Archivo",
//               fontWeight: "700",
//               fontSize: "22px",
//               lineHeight: "22px",
//               marginTop:'3px',
//               marginBottom:'3px'
              
//             }}
//           >
//             ${price}
//           </Box>
//           <Box>
//             <FaShoppingCart size={24} style={{ color: ColorPalette.violet }} />
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ClassicFavCards;


import React from "react";
import { Box } from "@mui/material";
import { ColorPalette } from "../Assets/Colors";
import { FaShoppingCart } from "react-icons/fa";
import { IoStar } from "react-icons/io5";

const styles = {
  cardContainer: {
    width: "220px",
    backgroundColor: "#FFFFFF",
    borderRadius: "15px",
    top: "10px",
    left: "10px",
    marginBottom: "15px",
  },
  imageBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "195px",
    width: "195px",
    marginTop: "12px",
    backgroundColor: "#F7F2F7",
    borderRadius: "15px",
    filter: "brightness(90%)",
    opacity: 0.9,
  },
  headerRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "7px",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  heading: {
    fontWeight: "700",
    fontFamily: "archivo",
    fontSize: "18px",
    lineHeight: "24px",
    color: "#0F0200",
    
  },
  ratingBox: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "14px",
    fontWeight: 500,
  },
  tagline: {
    fontFamily: "Archivo",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "24px",
    color: "#646464",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  bottomRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
  },
  priceText: {
    color: ColorPalette.pink,
    font: "Archivo",
    fontWeight: "700",
    fontSize: "22px",
    lineHeight: "22px",
    marginTop: "3px",
    marginBottom: "3px",
  },
  cartIcon: {
    color: ColorPalette.violet,
  },
};

const ClassicFavCards = ({ img, heading, tagline, price, rating }) => {
  return (
    <Box>
      <Box sx={styles.cardContainer}>
        <Box sx={styles.imageBox}>
          <img src={img} alt="ice-cream" style={styles.image} />
        </Box>

        <Box sx={styles.headerRow}>
          <Box sx={styles.heading}>{heading}</Box>
          <Box sx={styles.ratingBox}>
            <IoStar size={20} style={{ color: "gold" }} />
            <span>{rating}</span>
          </Box>
        </Box>

        <Box sx={styles.tagline}>{tagline}</Box>

        <Box sx={styles.bottomRow}>
          <Box sx={styles.priceText}>${price}</Box>
          <FaShoppingCart size={24} style={styles.cartIcon} />
        </Box>
      </Box>
    </Box>
  );
};

export default ClassicFavCards;

