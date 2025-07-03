import React from "react";
import { Box } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import Images from "../../../Assets/Images/Image";
import Button from "../../../Common_Components/Button";

const styles = {
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
  },
  SecondBox: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    width: { xs: "95%", sm: "90%", md: "80%", lg: "70%" },
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    gap: { xs: 4, md: 0 },
    textAlign: { xs: "center", md: "left" },
    overflowX: "auto", 
  },
  image: {
    height: "500px",
    width: "420px",
    marginRight: { xs: 0, md: "50px" },
    marginBottom: { xs: "20px", md: 0 },
    flexShrink: 0,
  },
};

const HomeComp2 = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        marginTop: "50px",
      }}
    >
      <Box sx={styles.SecondBox}>
        <Box>
          <img src={Images.girl} alt="Ice cream girl" style={styles.image} />
        </Box>
        <Box>
          <Box sx={styles.headingLine}>
            Relive the Sweet <br /> Memories of Classic <br />
            <span style={styles.highlight}>Ice Cream</span>
          </Box>
          <Box sx={styles.tagline}>
            From rich chocolate fudge to creamy vanilla sundaes, discover our
            menu of classic ice cream creations
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <Button
              text={"Explore Our Menu"}
              width={234}
              height={62}
              bcolor={ColorPalette.pink}
              onClick={() => {}}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeComp2;
