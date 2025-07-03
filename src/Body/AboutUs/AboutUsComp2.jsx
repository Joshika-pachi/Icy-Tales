import React from "react";
import { Box } from "@mui/material";
import {
  alignContent,
  borderRadius,
  display,
  height,
  justifyContent,
  padding,
} from "@mui/system";
import Images from "../../Assets/Images/Image";
import Button from "../../Common_Components/Button";
import { ColorPalette } from "../../Assets/Colors";

const styles = {
  mainBox: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: "50px",
    // paddingBottom: "30px",
  },
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontWeight: 500,
    color: "#000",
    fontSize: { xs: "28px", sm: "36px", md: "50px" },
    lineHeight: { xs: "35px", sm: "45px", md: "70px" },
    textAlign: { xs: "center", md: "left" },
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
    textAlign: { xs: "center", md: "left" },
    marginTop: "10px",
    color: "#646464",
  },
  image: {
    borderRadius: "50%",
    height: "80%",
    with:'60%',
    marginTop:'5%'
  },
  textBox: {
    paddingTop: "2%",
    marginRight:'3%'
  },
};

const AboutUsComp2 = () => {
  return (
    <Box>
      <Box sx={styles.mainBox}>
        <Box>
          <img src={Images.AboutusComp2Image} style={styles.image}></img>
        </Box>
        <Box sx={styles.textBox}>
          <Box
            sx={{
              ...styles.headingLine,
              fontSize: "50px",
              lineHeight: "70px",
            }}
          >
            Our Guilt-Free <br></br>
            <span style={styles.highlight}>Vegan</span> Ice Cream
          </Box>
          <Box sx={styles.tagline}>
            Our goal is to make the best ice cream using only the finest,
natural ingredients. <br></br>From rich, creamy classics to adventurous<br></br>
new creations, every flavor is meticulously crafted in-house to<br></br>
ensure the highest quality and freshness.
          </Box>
          <Box sx={styles.tagline}>
            Delicious Flavors Made With Only the Best Plant-<br></br>
            Based Ingredients.
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <Button
              text={"Read More"}
              width={172}
              height={62}
              bcolor={ColorPalette.pink}
              onClick={"#"}
            />
          </Box>
        </Box>
         <Box sx={{transform:'scaleX(-1)', position:'absolute', right:'0', opacity:'0.1',top:'20%'}}>
        <img src={Images.icecream} style={{ width:'80%'}}></img>
      </Box>
      </Box>
     
    </Box>
  );
};

export default AboutUsComp2;
