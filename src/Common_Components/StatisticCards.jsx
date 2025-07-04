import React from "react";
import { Box } from "@mui/material";
import { borderRadius } from "@mui/system";

const styles = {
  card: {
    height: "150px",
    width: "200px",
    borderBottom: "2px solid #F83D8E",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Berkshire Swash",
    fontSize: "34px",
    fontWeight: 400,
    flexDirection: "column",
    borderRadius:'10px',
     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", 
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

const StatCard = ({ number, icon, label }) => {
  return (
    <Box sx={styles.card}>
      <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
        {number} {icon}
      </Box>
      <Box sx={styles.tagline}>{label}</Box>
    </Box>
  );
};

export default StatCard;
