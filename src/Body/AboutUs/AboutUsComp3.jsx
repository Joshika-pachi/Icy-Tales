import React from "react";
import { Box } from "@mui/material";
import Images from "../../Assets/Images/Image";
import { ColorPalette } from "../../Assets/Colors";
import Button from "../../Common_Components/Button";
import { padding } from "@mui/system";

const styles = {
  mainBox: {
    background: ColorPalette.violet,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    padding:{xs:"20px"}
  },
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontWeight: 400,
    color: "#FFFFFF",
    fontSize: { xs: "42px", sm: "66px", md: "60px" },
    lineHeight: { xs: "55px", sm: "75px", md: "64px" },
    textAlign: { xs: "center", sm:"center",md: "left" },
  },
  highlight: {
    color: "#FF3CAC",
    fontFamily: "Berkshire Swash",
  },
  tagline: {
    fontFamily: "Archivo",
    fontSize: { xs: "14px", sm: "16px", md: "18px" },
    fontWeight: 300,
    lineHeight: { xs: "22px", sm: "25px", md: "30px" },
    textAlign: { xs: "center",sm:"center", md: "left" },
    marginTop: "10px",
    color: "#FFFFFF",
    maxWidth: "500px",
marginX: "auto",
  },
};

const AboutUsComp3 = () => {
  return (
    <Box>
      <Box sx={styles.mainBox}>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <img
            src={Images.crossCircle}
            style={{ position: "absolute", left: "5%", top: "65%" }}
            alt=""
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: "10%",
            top: "30%",
            display: { xs: "none", md: "block" },
          }}
        >
          <img src={Images.wpsideTriangles} alt="" />
        </Box>

        <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: { xs: "center", md: "flex-start" },
    justifyContent: "center",
    textAlign: { xs: "center", md: "left" },
    paddingX: { xs: 2, md: 0 },
    marginLeft: { xs: 0, md: "10%" },
    maxWidth: { xs: "100%", md: "500px" }, 
  }}
>
          <Box sx={styles.headingLine}>
            Our Mission is to <br />
            create Moments
          </Box>
          <Box sx={styles.tagline}>
            We strive to foster a welcoming and joyful environment <br />
            where customers of all ages can gather, celebrate, and <br />
            make lasting memories. Our commitment extends beyond <br />
            serving great ice cream.
          </Box>
          <Box sx={{ marginTop: "10%", display:"flex", alignItems:{xs:'center', md:'left'}, justifyContent:{xs:'center', md:'left' }}}>
            <Button
              text={"Read More"}
              width={180}
              height={62}
              bcolor={ColorPalette.pink}
              onClick={"/blog1"}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: "75%",
              height: "20px",
              display: { xs: "none", md: "block" },
            }}
          >
            <img src={Images.snakes} alt="" />
          </Box>
        </Box>

        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <img
            src={Images.AboutusComp3Image}
            style={{
              height: "580px",
              width: "620px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
            alt=""
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUsComp3;
