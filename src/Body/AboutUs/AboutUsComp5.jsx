import React from "react";
import { Box } from "@mui/material";
import { alignItems, display, flexDirection, justifyContent, padding } from "@mui/system";
import EmployeeCarousel from "../../Common_Components/EmployeeCarousel";
import employeeData from "../../Data/TeamMembersData"

const styles = {
  mainBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "50px",
    paddingBottom: "50px",
    flexDirection:'column'
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
};

const AboutUsComp5 = () => {
  return (
    <Box>
      <Box sx={styles.mainBox}>
        <Box>
          <Box sx={styles.headingLine}>
            Our <span style={styles.highlight}> Team</span> Members
          </Box>
          <Box sx={styles.tagline}>
            Get to know the friendly faces behind your favorite flavors.
          </Box>
        </Box>
        <Box>
            <EmployeeCarousel data={employeeData} />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUsComp5;
