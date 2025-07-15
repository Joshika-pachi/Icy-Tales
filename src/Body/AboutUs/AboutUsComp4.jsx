import React from "react";
import { Box } from "@mui/material";
import { FaPlus, FaPercent } from "react-icons/fa6";
import StatisticCards from "../../Common_Components/StatisticCards";
import { ColorPalette } from "../../Assets/Colors";

const styles = {
  mainBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    paddingTop: "50px",
    paddingBottom: "50px",
    background: ColorPalette.white,
  },
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontWeight: 400,
    color: "#000",
    fontSize: { xs: "36px", sm: "50px", md: "60px" },
    lineHeight: { xs: "45px", sm: "60px", md: "64px" },
    textAlign: "center",
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
    textAlign: "center",
    marginTop: "10px",
    color: "#646464",
  },
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    marginTop: "40px",
    justifyContent: "center",
    width: "100%",
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
          <StatisticCards
            number={91}
            icon={<FaPlus size={16} style={{ color: "#F83D8E" }} />}
            label="Awards Win"
          />
          <StatisticCards
            number={95}
            icon={<FaPercent size={16} style={{ color: "#F83D8E" }} />}
            label="Satisfied Clients"
          />
          <StatisticCards
            number={48}
            icon={<FaPlus size={16} style={{ color: "#F83D8E" }} />}
            label="Years of experience"
          />
          <StatisticCards
            number={143}
            icon={<FaPlus size={16} style={{ color: "#F83D8E" }} />}
            label="Employees working"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUsComp4;
