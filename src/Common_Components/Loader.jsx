import React from "react";
import { Box, Typography, CircularProgress, keyframes } from "@mui/material";
import IcecreamIcon from "@mui/icons-material/Icecream";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { ColorPalette } from "../Assets/Colors";


const float = keyframes`
  0%, 100% { transform: translateY(0px); opacity: 0.9; }
  50% { transform: translateY(-12px); opacity: 1; }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Loader = ({ message = "Scooping joy just for you..." }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(135deg, #FFF0F3, #FFE8CC)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
        zIndex: 9999,
      }}
    >
      {[...Array(6)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            width: `${30 + i * 10}px`,
            height: `${30 + i * 10}px`,
            backgroundColor: i % 2 === 0 ? "#ffbfd6" : "#ffd8a8",
            borderRadius: "50%",
            top: `${10 + i * 10}%`,
            left: `${i * 15}%`,
            animation: `${float} 4s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
            boxShadow: "0 4px 12px rgba(255, 182, 193, 0.4)",
            border: "1px solid #ffe0e6",
          }}
        />
      ))}

      <Box
        sx={{
          padding: 5,
          background: "linear-gradient(145deg, #ffffffdd, #fff0f5cc)",
          borderRadius: "24px",
          boxShadow: "0 12px 28px rgba(255, 179, 186, 0.4)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 2,
          animation: `${fadeIn} 1.2s ease`,
          maxWidth: "90%",
          width: "360px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "inline-flex",
            mb: 3,
          }}
        >
          <CircularProgress
            size={70}
            thickness={5}
            sx={{ color: ColorPalette.pink }}
          />
        </Box>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
            fontSize: "1.1rem",
            color: "#4d4d4d",
            animation: `${fadeIn} 1.5s ease-in-out`,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          {message}
          <FaRegFaceSmileBeam color={ColorPalette.pink} size={26} />
        </Typography>
      </Box>
    </Box>
  );
};

export default Loader;
