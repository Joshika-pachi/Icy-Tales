import React from "react";
import { Box } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import Images from "../../../Assets/Images/Image";
import { color, fontSize, margin, textAlign } from "@mui/system";
import Button from "../../../Common_Components/Button";

const styles = {
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontSize: "84px",
    fontWeight: 500,
    lineHeight: "80px",
    color: "#FFFFFF",
    marginRight: "50px",
    paddingTop: "50px",
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
    color: "#FFFFFF",
    marginTop: "20px",
    
    
  },
};

const Home2Comp1 = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: ColorPalette.violet,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "30px",
          marginTop: "5px",
          paddingTop: "40px",
        }}
      >
        <Box>
          <img
            src={Images.halfcircles}
            alt="Pink Ice"
            style={{
              height: "150px",
              width: "80px",
              marginTop: "50px",
              opacity: 0.3,
            }}
          />
        </Box>
        <Box>
          <Box sx={styles.headingLine}>
            Vegan Ice <br></br>Cream Delights
          </Box>
          <Box sx={styles.tagline}>
            Discover a world of tasty vegan ice cream flavors and desserts{" "}
            <br></br> that everyone can enjoy.
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <Button
              text={"Explore our Vegan Flavors"}
              width={248}
              height={56}
              bcolor={ColorPalette.pink}
              onClick={"#"} style={{fontSize:'28px'}}
            />
          </Box>
          <Box >
            {/* <img src={Images.snakes} style={{}}></img> */}
            <img
              src={Images.dots}
              style={{ paddingLeft: "100%", paddingTop: "5%" ,}}
            ></img>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" , paddingTop:'10px'}}>
          <img src={Images.string} style={{height:'200px', width:'300px', marginBottom:'-160px', }}></img>
          <img src={Images.discount} style={{height:'100px', width:'100px', marginBottom:'-165px', position:'absolute', bottom:"550px", right:'540px'}}></img>
          <img
            src={Images.iceBox}
            alt="Ice Box"
            style={{
              height: "450px",
              width: "660px",
              marginRight: "-40px",
              paddingTop: "0",
              marginTop: "30",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home2Comp1;


