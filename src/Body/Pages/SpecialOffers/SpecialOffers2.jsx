import React from "react";
import { Box } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import Images from "../../../Assets/Images/Image";
import Button from "../../../Common_Components/Button";
import { textAlign } from "@mui/system";
import { useMediaQuery, useTheme } from "@mui/material";


const styles = {
  heroContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "500px",
    backgroundColor: ColorPalette.violet,
    backgroundImage: `url(${Images.pinkBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "800px auto",
    backgroundPosition: "right center",
    padding: "0 5%",
    overflow: "hidden",
    
  },

  // leftContent: {
  //   color: "#fff",
  //   maxWidth: "40%",
  //   display: "flex",
  //   flexDirection: "column",
  //   gap: "20px",
    
  // },
  leftContent: {
  color: "#fff",
  maxWidth: {xs:'100%', md:"40%"},
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  textAlign: { xs: "center", md: "left" },       
  alignItems: { xs: "center", md: "flex-start" }, // center content on xs, left-align on md+
},

  heading: {
    fontSize: "60px",
    fontWeight: 700,
    fontFamily: "Berkshire Swash",
    lineHeight: "70px",
  },
  subHeading: {
    fontSize: "22px",
    fontFamily: "Archivo",
    fontWeight: 400,
  },
  codeText: {
    fontSize: "14px",
    color: "#fff",
  },

  rightContent: {
    flex: "1",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  iceCreamImg: {
    height: "400px",
    zIndex: 1,
    marginTop: "8%",
    transform: "translateX(-50px)",
    display: { xs: "none", md: "block" },
  },
  discountBadge: {
    position: "absolute",
    top: "23%",
    left: "24%",
    width: "100px",
    zIndex: 2,
    display: { xs: "none", md: "block" },
  },
  stringImg: {
    position: "absolute",
    top: "4%",
    left: "29%",
    width: "280px",
    zIndex: 3,
    transform: "rotate(1deg)",
    display: { xs: "none", md: "block" },
  },
  rightIce: {
    transform: "scaleX(-1)",
    position: "absolute",
    right: "0%",
    height: "320px",
    width: "200px",
    opacity: "0.4",
    display: { xs: "none", md: "block" },
  },
};

const SpecialOffers2 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={styles.heroContainer}>
      
    
      <Box sx={styles.leftContent}>
        <Box sx={styles.heading}>Summer Special!</Box>
        <Box sx={styles.subHeading}>Buy One Sundae, Get One 50% Off!</Box>
        <Button
          text={"Get This Deal"}
          width={180}
          height={62}
          bcolor={isSmallScreen ? ColorPalette.violet : ColorPalette.pink}
          onClick={"#"}
        />
        <Box sx={styles.codeText}>Use code: SUMMER50 at checkout.</Box>
      </Box>

      
      <Box sx={styles.rightContent}>
        <Box
          component="img"
          src={Images.string}
          alt=""
          sx={styles.stringImg}
        />
        <Box
          component="img"
          src={Images.offerBowl}
          alt="Ice Cream Bowl"
          sx={styles.iceCreamImg}
        />
        <Box
          component="img"
          src={Images.discount}
          alt="50% Off"
          sx={styles.discountBadge}
        />
      </Box>

      <Box
        component="img"
        src={Images.icecream}
        alt=""
        sx={styles.rightIce}
      />
    </Box>
  );
};

export default SpecialOffers2;
