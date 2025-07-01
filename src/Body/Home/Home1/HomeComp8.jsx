import React from "react";
import { Box } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import NavLayout from "../../../Common_Components/NavLayout";
import Button from "../../../Common_Components/Button";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { padding } from "@mui/system";
import Images from "../../../Assets/Images/Image";

const styles = {
  mainBox: {
    background: ColorPalette.white,
    padding: "20px",
    paddingBottom: "50px",
    paddingTop: "50px",
  },
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontWeight: 400,
    lineHeight: "80px",
    color: "#000",
    fontSize: "48px",
    lineHeight: "70px",
    textAlign: "center",
    marginBottom: "10px",
  },
  highlight: {
    color: "#FF3CAC",
    fontFamily: "Berkshire Swash",
  },
  tagline: {
    fontFamily: "Archivo",
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "30px",
    color: ColorPalette.tagline,
  },
};

const HomeComp8 = () => {
  return (
    <Box>
      <Box sx={styles.mainBox}>
        <Box>
          <Box sx={styles.headingLine}>
            Sign up For <span style={styles.highlight}>Exclusive Deals</span>{" "}
            <br />
            and Updates
          </Box>
          <Box
            sx={{ ...styles.tagline, textAlign: "center", marginTop: "5px" }}
          >
            Get 10% off your next order and stay updated with our latest offers.
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            {/* <textarea name="email" id="mail">Enter your email adress</textarea> */}
            <Box
              sx={{
                color: ColorPalette.tagline,
                height: "50px",
                width: "550px",
                boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                paddingLeft: "15px",
                borderRadius: "8px",
                backgroundColor: "#fff",
                marginRight: "10px",
                paddingTop: "0px",
              }}
            >
              Enter your email address
            </Box>
            <Button
              text={"Subscribe"}
              width={160}
              height={50}
              bcolor={ColorPalette.pink}
              onClick={() => alert("Subscribed!")}
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
              fontSize: "14px",
              textAlign: "center",
            }}
          />
        </Box>
        <Box>
          <img
            src={Images.SideCircles}
            alt="Side Circles"
            style={{ height: "auto", paddingLeft: "10%", marginTop: "-15%" }}
          />
        </Box>
        <Box>
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
