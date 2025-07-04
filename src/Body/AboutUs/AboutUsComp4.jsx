import React from "react";
import { Box } from "@mui/material";
import {
  alignItems,
  borderBottom,
  display,
  flexDirection,
  fontFamily,
  fontSize,
  fontWeight,
  justifyContent,
  padding,
  textAlign,
} from "@mui/system";
import { FaPlus } from "react-icons/fa6";
import StatisticCards from "../../Common_Components/StatisticCards";
import { FaPercent } from "react-icons/fa";
import { ColorPalette } from "../../Assets/Colors";

const styles = {
  mainBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingTop: "50px",
    background:ColorPalette.white,
    paddingBottom:'50px'
  },
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontWeight: 400,
    color: "#000",
    fontSize: { xs: "48px", sm: "76px", md: "60px" },
    lineHeight: { xs: "55px", sm: "75px", md: "64px" },
    textAlign: { xs: "center", md: "left" },
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
    textAlign: { xs: "center", md: "left" },
    marginTop: "10px",
    color: "#646464",
  },
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    marginTop: "40px",
    justifyContent: "center",
  },
 
};

const AboutUsComp4 = () => {
  return (
    <Box>
      <Box sx={styles.mainBox}>
        <Box sx={styles.headingLine}>
          Our <span style={styles.highlight}> Statistics</span>
        </Box>
        <Box sx={styles.tagline}>
          What makes us special through our impressive statistics.
        </Box>
      
      <Box sx={styles.cardsContainer}>
        <StatisticCards number={91} icon={<FaPlus size={16} style={{ color: "#F83D8E" }} />} label="Awards Win" />
         <StatisticCards number={95} icon={<FaPercent size={16} style={{ color: "#F83D8E" }} />} label="Satisfied Clients" />
          <StatisticCards number={48} icon={<FaPlus size={16} style={{ color: "#F83D8E" }} />} label="Years of experience" />
           <StatisticCards number={143} icon={<FaPlus size={16} style={{ color: "#F83D8E" }} />} label="Employees working" />

      </Box>
      </Box>
    </Box>
  );
};

export default AboutUsComp4;
