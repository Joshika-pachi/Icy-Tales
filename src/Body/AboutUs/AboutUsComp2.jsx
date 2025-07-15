import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import Images from "../../Assets/Images/Image";
import Button from "../../Common_Components/Button";
import { ColorPalette } from "../../Assets/Colors";
import { useTheme } from "@mui/material/styles";
import { width } from "@mui/system";

const styles = {
  mainBox: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: "50px",
    background: ColorPalette.white,
    flexDirection: { xs: "column", md: "row" },
    gap: { xs: 4, md: 0 },
    paddingBottom:"50px"
  },
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontWeight: 500,
    color: "#000",
    fontSize: { xs: "30px", sm: "36px", md: "50px" },
    lineHeight: { xs: "40px", sm: "50px", md: "70px" },
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
    height: "90%",
    width: "80%",
    marginTop: "5%",
  },
  textBox: {
    paddingTop: "2%",
    marginRight: "3%",
    paddingLeft: { xs: "5%", md: 0 },
    paddingRight: { xs: "5%", md: 0 },
  },
};

const AboutUsComp2 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); 

  return (
    <Box>
      <Box sx={styles.mainBox}>
        {!isSmallScreen && (
          <Box>
            <img src={Images.AboutusComp2Image} style={styles.image} alt="About Us" />
          </Box>
        )}

        <Box sx={styles.textBox}>
          <Box sx={styles.headingLine}>
            Our Guilt-Free <br />
            <span style={styles.highlight}>Vegan</span> Ice Cream
          </Box>

          <Box sx={styles.tagline}>
            Our goal is to make the best ice cream using only the finest,
            natural ingredients. <br />
            From rich, creamy classics to adventurous<br />
            new creations, every flavor is meticulously crafted in-house to<br />
            ensure the highest quality and freshness.
          </Box>

          <Box sx={styles.tagline}>
            Delicious Flavors Made With Only the Best Plant-<br />
            Based Ingredients.
          </Box>

          <Box sx={{ marginTop: "20px", textAlign: { xs: "center", md: "left" } }}>
            <Button
              text={"Read More"}
              width={172}
              height={62}
              bcolor={ColorPalette.pink}
              onClick={"/loadMore"}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUsComp2;
