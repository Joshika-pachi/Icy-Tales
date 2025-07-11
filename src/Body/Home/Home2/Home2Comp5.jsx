import React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import Images from "../../../Assets/Images/Image";
import Button from "../../../Common_Components/Button";

const Home2Comp5 = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));

  // Determine scale based on screen size
  let scaleValue = 1;
  if (isXs) scaleValue = 0.5;
  else if (isSm) scaleValue = 0.7;
  else if (isMd) scaleValue = 0.85;

  return (
    <Box
      sx={{
        background: ColorPalette.pink,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: "70px",
      }}
    >
      <Box
        sx={{
          transform: `scale(${scaleValue})`,
          transformOrigin: "top center",
          width: "1440px", // fixed width container
          maxWidth: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            px: 4,
          }}
        >
          {/* Left Image */}
          <Box>
            <img
              src={Images.Home2Comp5Image1}
              style={{ width: "300px", height: "auto" }}
              alt="Left Ice Cream"
            />
          </Box>

          {/* Center Text */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Box
              component="img"
              src={Images.dots}
              alt="Dots"
              sx={{ width: "90px", height: "50px", mb: 2 }}
            />
            <Box
              sx={{
                fontFamily: "Berkshire Swash",
                fontSize: "64px",
                fontWeight: 700,
                color: ColorPalette.white,
                lineHeight: "72px",
                mb: 2,
              }}
            >
              Limited <br /> Time Offer!
            </Box>
            <Box
              sx={{
                fontFamily: "Archivo",
                fontSize: "24px",
                color: ColorPalette.white,
                mb: 3,
              }}
            >
              Get <span style={{ color: "#FFD800" }}>20% Off</span> All Vegan Ice Creams!
            </Box>
            <Button
              text={"Get This Deal"}
              width={180}
              height={58}
              bcolor={ColorPalette.violet}
              onClick={"#"}
            />
            <Box
              sx={{
                fontFamily: "Archivo",
                fontSize: "16px",
                color: ColorPalette.white,
                mt: 2,
              }}
            >
              Use code: <span style={{ color: "#FFD800" }}>VEGAN20</span> at checkout.
            </Box>
          </Box>

          {/* Right Image */}
          <Box>
            <img
              src={Images.Home2Comp5Image2}
              style={{
                width: "300px",
                height: "auto",
                transform: "rotate(-20deg)",
              }}
              alt="Right Ice Cream"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home2Comp5;
