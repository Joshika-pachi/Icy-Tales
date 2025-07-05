import React from "react";
import { Box } from "@mui/material";
import Images from "../../../Assets/Images/Image";
import { ColorPalette } from "../../../Assets/Colors";
import { alignItems, display, flexDirection, justifyContent, padding, width } from "@mui/system";
import CommitmentCards from "../../../Common_Components/CommitmentCards";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiMoneyCnyCircleLine } from "react-icons/ri";

const styles = {
  mainBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
   
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
    paddingTop:'50px'
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
    color: ColorPalette.tagline,
  },
  secondBox:{
    display:'flex',
    justifyContent:"center",
    alignItems:"center",
    paddingTop:"30px",
    width:'100%'
  },
  cardBoxes:{
    display:'flex',
    justifyContent:'center',
    alignItems:"center",
    flexDirection:'column',
    gap:'30px'
  },
  imageContainer: {
  width: "350px",
  height: "350px",
  borderRadius: "50%",
  backgroundColor:"#FAEBE1", 
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  
},
};

const SpecialOffers3 = () => {
  return (
    <Box>
      <Box sx={styles.mainBox}>
        <Box>
          <Box sx={styles.headingLine}>
            Our <span style={styles.highlight}>Commitments</span> to You
          </Box>
          <Box
            sx={{ ...styles.tagline, textAlign: "center", marginTop: "5px" }}
          >
            Exceeding expectations with every promise we make.
          </Box>
        </Box>
        {/* Second Part  */}
        <Box sx={styles.secondBox}>
          <Box sx={styles.cardBoxes}>
            <CommitmentCards icon={<CiDeliveryTruck size={50} style={{background:ColorPalette.pink, color:'white'}}/>} title={"Free Shipping"} tag={"Enjoy the convenience of free shipping on all orders!"} boxbg={ColorPalette.pink} />
            <CommitmentCards icon={<RiMoneyCnyCircleLine size={50} style={{background:ColorPalette.violet, color:'white'}}/>} title={"Unique Packaging"} tag={"Experience our commitment to uniqueness with every order."} boxbg={ColorPalette.violet}/>
          </Box>
          <Box sx={{padding:'8%'}}>
          <Box sx={styles.imageContainer}>
            <img src={Images.CommitmentIcecream} style={{height:"550px", width:'550px', padding:'20px'}}></img>
          </Box>
          </Box>
          <Box sx={styles.cardBoxes}>
            <CommitmentCards icon={<CiDeliveryTruck size={50} style={{background:ColorPalette.pink, color:'white'}}/>} title={"100% Money Back"} tag={"Rest assured with our money-back guarantee at any time."} boxbg={ColorPalette.pink}/>
            <CommitmentCards icon={<RiMoneyCnyCircleLine size={50} style={{background:ColorPalette.violet, color:'white'}}/>} title={"Fast Delivery"} tag={"Experience swift and efficiently reliable delivery with us"} boxbg={ColorPalette.violet}/>
            
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SpecialOffers3;
