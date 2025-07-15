import React from "react";
import { Box } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import Button from "../../../Common_Components/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Images from "../../../Assets/Images/Image";
import { useNavigate } from "react-router-dom";

const styles = {
  mainBox: {
    background: ColorPalette.white,
    padding: { xs: "20px 10px", sm: "20px 30px" },
    paddingBottom: "50px",
    paddingTop: "50px",
  },
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontWeight: 400,
    color: "#000",
    fontSize: { xs: "28px", sm: "36px", md: "48px" },
    lineHeight: { xs: "35px", sm: "50px", md: "70px" },
    textAlign: "center",
    marginBottom: "10px",
  },
  highlight: {
    color: "#FF3CAC",
    fontFamily: "Berkshire Swash",
  },
  tagline: {
    fontFamily: "Archivo",
    fontSize: { xs: "14px", sm: "16px", md: "18px" },
    fontWeight: "400",
    lineHeight: { xs: "22px", sm: "25px", md: "30px" },
    color: ColorPalette.tagline,
    textAlign: "center",
    marginTop: "5px",
  },
  emailBoxContainer: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    gap: { xs: "15px", sm: "0px" },
    
  },
  emailBox: {
    color: ColorPalette.tagline,
    height: "50px",
    width: { xs: "100%", sm: "400px", md: "550px" },
    boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    paddingLeft: "15px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    paddingTop: "0px",
    marginRight: '15px'
  },
};

const HomeComp8 = () => {
  const navigate=useNavigate();
  return (
    <Box>
      <Box sx={styles.mainBox}>
        <Box>
          <Box sx={styles.headingLine}>
            Sign up For <span style={styles.highlight}>Exclusive Deals</span>{" "}
            <br />
            and Updates
          </Box>
          <Box sx={styles.tagline}>
            Get 10% off your next order and stay updated with our latest offers.
          </Box>
          <Box sx={styles.emailBoxContainer}>
            <Box sx={styles.emailBox}>
              Enter your email address
            </Box>
            <Button
              text={"Subscribe"}
              width={160}
              height={50}
              bcolor={ColorPalette.pink}
              onClick={() => {alert("Subscribed!"); navigate("/blog1")}}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 3,
          }}
        >
          <FormControlLabel
            control={<Radio color="primary" />}
            label={
              <span>
                I agree to the{" "}
                <a
                  href="/privacy"
                  target="_blank"
                  style={{ color: ColorPalette.pink }}
                >
                  privacy policy
                </a>
              </span>
            }
            sx={{
              color: "#333",
              fontFamily: "Arial, sans-serif",
              fontSize: { xs: "12px", sm: "14px" },
              textAlign: "center",
            }}
          />
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <img
            src={Images.SideCircles}
            alt="Side Circles"
            style={{ height: "auto", paddingLeft: "10%", marginTop: "-15%" }}
          />
        </Box>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <img
            src={Images.SideTraingle}
            alt="Side Triangle"
            style={{ height: "auto", paddingLeft: "80%", marginTop: "-30%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeComp8;
