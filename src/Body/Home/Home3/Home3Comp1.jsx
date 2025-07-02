import React from "react";
import { Box } from "@mui/material";
import Images from "../../../Assets/Images/Image";
import {
  alignItems,
  color,
  display,
  height,
  justifyContent,
} from "@mui/system";
import { ColorPalette } from "../../../Assets/Colors";
import Button from "../../../Common_Components/Button";

const styles = {
  mainBox: {
   backgroundImage: `url(${Images.Home3Comp1Bg})`,
  minHeight: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  },
  roundBox: {
    background: ColorPalette.white,
    height: "550px",
    width: "570px",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: "48px",
    overflow:"hidden",
    position:'relative'
  },
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontWeight: 500,
    color: "#000",
    fontSize: { xs: "28px", sm: "36px", md: "58px" },
    lineHeight: { xs: "35px", sm: "45px", md: "70px" },
    textAlign: { xs: "center", md: "left" },
    
  },
  highlight: {
    color: "#FF3CAC",
    fontFamily: "Berkshire Swash",
  },
  tagline: {
    fontFamily: "Archivo",
    fontSize: { xs: "14px", sm: "16px", md: "22px" },
    fontWeight: 300,
    lineHeight: { xs: "22px", sm: "25px", md: "30px" },
    textAlign: { xs: "center", md: "left" },
    marginTop: "10px",
    color: "#646464",
  },
};

const Home3Comp1 = () => {
  return (
    <Box>
      <Box sx={styles.mainBox}>
        <Box sx={{ marginRight: "600px",}}>
          <Box sx={styles.roundBox}>
            <Box sx={{height:'150px', width:'150px', position:'absolute',background:ColorPalette.pink,borderRadius:'50%', left:'50%', top:'0', transform: 'translate(-50%, -50%)' }}></Box>
            <Box>
              <Box sx={styles.headingLine}>
                Artisan <span style={styles.highlight}>Gelato</span> Shop
              </Box>
              <Box sx={styles.tagline}>
                Experience the rich, creamy flavors of our artisan gelato
                creations.
              </Box>
              <Box sx={{ marginTop: "20px", marginLeft: "90px" }}>
                <Button
                  text={"Discover Our Gelato Flavors "}
                  width={270}
                  height={62}
                  bcolor={ColorPalette.violet}
                  onClick={() => {}}
                />
              </Box>
            </Box>
            <Box>
                <img src={Images.icecream} style={{height:'200px', width:'200px', position:'absolute', left:'200px', bottom:'-68px', opacity:'0.3', overflow:'hidden'}}></img>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home3Comp1;
