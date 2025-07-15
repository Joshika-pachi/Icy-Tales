// import React from "react";
// import { Box } from "@mui/material";
// import { ColorPalette } from "../../../Assets/Colors";
// import Comp5Image from "./Comp5Image.png";
// import { height, width } from "@mui/system";

// const styles = {
//   mainBox:{
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     paddingTop:'50px',
//     paddingBottom:'50px',
//     width: "100%",
//     // height:'1000px'

//   },
//   imageBox: {
    
//     backgroundColor: ColorPalette.violet,
//     display: "flex",
//     justifyContent: "flex-end",
//     height:'600px',
//   },
//   image: {
//     width:'40%',
//     // height: "600px",
//     objectFit: "cover",
//     borderRadius: "10px",
    
//   },
// };

// const HomeComp5 = () => {
//   return (
//     <Box sx={{width:'100%'}}>
//       <Box style={styles.imageBox}>

//       <Box sx={styles.imageBox}>
//         <img src={Comp5Image} alt="Comp5" style={styles.image}/>
//       </Box>
//       </Box>
//     </Box>
//   );
// };

// export default HomeComp5;

import React from "react";
import { Box,  } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import Images from "../../../Assets/Images/Image"
import Button from "../../../Common_Components/Button";
import { alignItems, height, padding, textAlign, width } from "@mui/system";
import { useMediaQuery } from "@mui/material";


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

  leftContent: {
    color: "#fff",
    maxWidth: {xs:"100%", md:"40%"},
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding:{xs:"22%", md:'0px'}
    
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
  button: {
    width: "200px",
    height: "55px",
    background: "#FF3CAC",
    color: "#fff",
    fontSize: "18px",
    fontWeight: 600,
    borderRadius: "30px",
    textTransform: "none",
    '&:hover': {
      background: "#ff4e9e",
    },
  },
  codeText: {
    fontSize: "14px",
    color: "#fff",
  },
  rightContent: {
    position: "relative",
    flex: "1",
    height: "100%",
    display: {xs:"none",md:"flex"},
    alignItems: "center",
    justifyContent: "center",
    position:'relative'
  },
  iceCreamImg: {
    height: "400px",
    position: "relative",
    zIndex: 1,
    marginTop:'10%',
    transform:'translateX(-50px)',
    marginTop:'8%'
  },
  discountBadge: {
    position: "absolute",
    top: "23%",
    left: "24%",
    width: "100px",
    zIndex: 2,
  },
  arrowIcon: {
    width: "20px",
    height: "20px",
    marginLeft: "8px",
  },
  stringImg: {
  position: "absolute",
  top: "4%",         
  left: "29%",      
  width: "280px",   
  zIndex: 3,  
  transform: "rotate(1deg)",      
},
rightIce:{
    transform:"scaleX(-1)",
    position:'absolute',
    right:'0%',
    height:'320px',
    width:'200px',
    opacity:'0.4',
    top:"20%"
}
};

const Home1Comp5 = () => {
   const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <Box sx={styles.heroContainer}>
      {/* LEFT SIDE */}
      <Box sx={styles.leftContent}>
        <Box sx={styles.heading}>Summer Special!</Box>
        <Box sx={styles.subHeading}>Buy One Sundae, Get One 50% Off!</Box>
        <Button text={"Get This Deal"} width={180} height={62} bcolor={isSmallScreen ? ColorPalette.violet : ColorPalette.pink} onClick={"/specialOffers"}></Button>
        <Box sx={styles.codeText}>Use code: SUMMER50 at checkout.</Box>
      </Box>

      {/* RIGHT SIDE */}
      
      <Box sx={styles.rightContent}>
        <img src={Images.string} style={styles.stringImg}></img>
        <img src={Images.offerBowl} alt="Ice Cream Bowl" style={styles.iceCreamImg} />
        <img src={Images.discount} alt="50% Off" style={styles.discountBadge} />
      </Box>
      <Box sx={{display:{xs:"none", md:"block"}}}>
       <img src={Images.icecream} style={styles.rightIce}></img></Box>
      
    </Box>
  );
};

export default Home1Comp5;

