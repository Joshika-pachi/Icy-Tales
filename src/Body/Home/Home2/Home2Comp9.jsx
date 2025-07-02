import React from 'react';
import { Box } from '@mui/material';
import { ColorPalette } from '../../../Assets/Colors';
import Images from '../../../Assets/Images/Image';
import { height, width } from '@mui/system';
import { FaInstagram } from "react-icons/fa";

const styles = {
  mainBox: {
    display: "flex",
    flexDirection: 'column',
    position: 'relative',
    background:ColorPalette.white
  },
  firstBox: {
    textAlign: 'center',
    padding: '70px 0',
    background: '#fff',
    zIndex: 1,
  },
  secondBox: {
    background: ColorPalette.violet,
    textAlign: 'center',
    padding: '70px 0',
    zIndex: 0,
  },
  imagesContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    zIndex: 2,
  },
  pictures:{
    height:'250px',
    width:'200px',
    objectFit: "fill",
  }
};

const images = [
  Images. Home2Comp9FooterImage1,
  Images. Home2Comp9FooterImage2,
  Images. Home2Comp9FooterImage3,
  Images. Home2Comp9FooterImage4,
  Images. Home2Comp9FooterImage5,
  Images. Home2Comp9FooterImage6,
];

const Home2Comp9 = () => {
  return (
    <Box sx={styles.mainBox}>
        <Box sx={{textAlign:"center", fontFamily:'Archivo', fontSize:'20px',paddingBottom:'20px'}}> <FaInstagram size={26} color={ColorPalette.pink}/> Icedelights</Box>
      <Box sx={styles.firstBox}>
      </Box>

      <Box sx={styles.imagesContainer}>
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index + 1}`} style={styles.pictures} />
        ))}
      </Box>

      <Box sx={styles.secondBox}>

      </Box>
    </Box>
  );
};

export default Home2Comp9;
