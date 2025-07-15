import React from "react";
import { Box } from "@mui/material";
import { ColorPalette } from "../Assets/Colors";
import Button from "./Button";

const styles = {
  rowBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "30px",
    flexDirection: { xs: "column", sm: "row" }, 
    marginBottom: "30px",
  },
  title: {
    color: "#646464",
    fontWeight: 500,
    fontFamily: "Archivo",
    fontSize: "18px",
    lineHeight: "16px",
    padding: "9px",
  },
  inputBox: {
    height: "42px",
    width: { xs: "100%", sm: "300px" },
    borderRadius: "20px",
    border: "1px solid #E3E4E5",
    "&:hover": {
      borderColor: ColorPalette.pink,
    },
  },
  messageBox: {
    height: "150px",
    width: { xs: "100%", sm: "630px" },
    borderRadius: "20px",
    border: "1px solid #E3E4E5",
    "&:hover": {
      borderColor: ColorPalette.pink,
    },
  },
};

const Form = () => {
  return (
    <Box width="100%">
      <Box sx={styles.rowBox}>
        <Box width={{ xs: "100%", sm: "auto" }}>
          <span style={styles.title}>First Name</span>
          <br />
          <Box sx={styles.inputBox}></Box>
        </Box>
        <Box width={{ xs: "100%", sm: "auto" }}>
          <span style={styles.title}>Last Name</span>
          <br />
          <Box sx={styles.inputBox}></Box>
        </Box>
      </Box>

      <Box sx={styles.rowBox}>
        <Box width={{ xs: "100%", sm: "auto" }}>
          <span style={styles.title}>Email address</span>
          <br />
          <Box sx={styles.inputBox}></Box>
        </Box>
        <Box width={{ xs: "100%", sm: "auto" }}>
          <span style={styles.title}>Phone</span>
          <br />
          <Box sx={styles.inputBox}></Box>
        </Box>
      </Box>

      <Box sx={{ ...styles.rowBox, flexDirection: "column", gap: "10px" }}>
        <Box width="100%">
          <span style={styles.title}>Message</span>
          <br />
          <Box sx={styles.messageBox}></Box>
        </Box>
      </Box>

      <Box sx={{ textAlign: { xs: "center", sm: "left" }, mt: 2 }}>
        <Button
          text={"Submit Now"}
          width={180}
          height={52}
          bcolor={ColorPalette.pink}
          onClick={"#"}
        />
      </Box>
    </Box>
  );
};

export default Form;
