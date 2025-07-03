import React from 'react'
import { Box } from '@mui/material'
import { ColorPalette } from '../../../Assets/Colors'
import Images from '../../../Assets/Images/Image'
import { alignContent, display, justifyContent } from '@mui/system'
import CategoryCards from "../../../Common_Components/CategoryCards"


const styles={
    mainBox:{
        background:ColorPalette.white,
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        paddingTop:'50px',
        paddingBottom:'50px',
        flexDirection:'column'
    },
     headingLine: {
    fontFamily: "Berkshire Swash",
    fontWeight: 500,
    color: "#000",
    fontSize: { xs: "28px", sm: "36px", md: "50px" },
    lineHeight: { xs: "35px", sm: "45px", md: "70px" },
    textAlign: { xs: "center", md: "center" },
  },
  highlight: {
    color: "#FF3CAC",
    fontFamily: "Berkshire Swash",
  },
  tagline: {
    fontFamily: "Archivo",
    fontSize: { xs: "14px", sm: "16px", md: "20px" },
    fontWeight: 300,
    lineHeight: { xs: "22px", sm: "25px", md: "30px" },
    textAlign: { xs: "center", md: "center" },
    marginTop: "10px",
    color: "#646464",
  },
  cards: {
    display: "flex",
    flexDirection: { xs: "column", sm: "column", md: "row" },
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
    marginBottom: "50px",
    gap: { xs: "20px", sm: "25px", md: "30px" },
  },
}

const Home3Comp4 = () => {
  return (
    <Box>
        <Box sx={styles.mainBox}>
        <Box>
          <Box sx={styles.headingLine}>
            Find your Perfect <span style={styles.highlight}> Gelato</span> 
          </Box>
          <Box sx={styles.tagline}>
            Browse through our different gelato offerings to find your favorite.
          </Box>
        </Box>
         <Box sx={styles.cards}>
          <CategoryCards image={Images.CategoryImage1} name="Sundaes" />
          <CategoryCards image={Images.CategoryIamge2} name="Ice Cream Cones" />
          <CategoryCards image={Images.CategoryImage3} name="Milkshakes" />
          <CategoryCards image={Images.CategoryImage4} name="Seasonal Flavours" />
        </Box>

        </Box>
      
    </Box>
  )
}

export default Home3Comp4
