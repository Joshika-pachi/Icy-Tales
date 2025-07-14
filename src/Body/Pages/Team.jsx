import React from "react";
import { Box } from "@mui/material";
import Images from "../../Assets/Images/Image";
import { ColorPalette } from "../../Assets/Colors";
import teamMembers from "../../Data/TeamMembersData";
import TeamDataCards from "../../Common_Components/TeamDataCards"
import PagesHeader from "../../Common_Components/PagesHeader";

const styles = {
  mainBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "50px",
    paddingBottom: "50px",
    flexDirection: "column",
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

const Team = () => {
  return (
    <Box>
         <Box>
            <PagesHeader title={"Team"} path={"Team"} />
        </Box>
      <Box sx={styles.mainBox}>
       
        <Box sx={styles.headingLine}>
          Our <span style={styles.highlight}> Team</span> Members
        </Box>
        <Box sx={styles.tagline}>
          Get to know the friendly faces behind your favorite flavors.
        </Box>
      
      <Box>
        <TeamDataCards data={teamMembers} />
      </Box>
      </Box>
    </Box>
  );
};

export default Team;

