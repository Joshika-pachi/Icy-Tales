import React, { useState } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { ColorPalette } from "../Assets/Colors";
import { useNavigate } from "react-router-dom";

const styles = {
  productCard: {
    width: "250px",
    minWidth: "250px",
    boxShadow: "0 0 20px rgba(255, 60, 172, 0.2)",
    borderRadius: "10px",
    textAlign: "center",
    padding: "15px",
    backgroundColor: "#fff",
  },
  productImg: {
    width: "160px",
    height: "160px",
    objectFit: "contain",
    borderRadius: "50%",
    margin: "0 auto 10px",
    display: "block",
  },
  title: {
    margin: "5px 0",
    color: "#333",
    fontFamily: "Archivo",
    fontWeight: "700",
    fontSize: "20px",
  },
  role: {
    fontSize: "16px",
    color: ColorPalette.tagline,
    marginBottom: "15px",
    fontWeight: 500,
  },
  button: {
    fontSize: "30px",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#444",
    padding: "10px",
  },
};

const EmployeeCarousel = ({ data = [] }) => {
  const [index, setIndex] = useState(0);
  const navigate=useNavigate();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); 
  const itemsPerSlide = isSmallScreen ? 1 : 3;

  const totalSlides = Math.ceil(data.length / itemsPerSlide);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % totalSlides);
  };

  const currentItems = data.slice(
    index * itemsPerSlide,
    index * itemsPerSlide + itemsPerSlide
  );

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        width: "100%",
        overflow: "hidden",
        marginTop: "30px",
      }}
    >
      <button style={styles.button} onClick={handlePrev}>
        ‹
      </button>

      <Box
        sx={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          flexWrap: "nowrap",
          
        }}
        onClick={() => navigate("/team")}
      >
        {currentItems.map((item, i) => (
          <Box key={i} sx={styles.productCard}>
            <img src={item.avatar} alt={item.name} style={styles.productImg} />
            <h3 style={styles.title}>{item.name}</h3>
            <p style={styles.role}>{item.role}</p>

            <Box>
              <FaFacebook size={24} style={{ color: "#F83D8E", marginRight: "5%" }} />
              <FaInstagram size={24} style={{ color: "#F83D8E", marginRight: "5%" }} />
              <FaYoutube size={26} style={{ color: "#F83D8E", marginRight: "5%" }} />
            </Box>
          </Box>
        ))}
      </Box>

      <button style={styles.button} onClick={handleNext}>
        ›
      </button>
    </Box>
  );
};

export default EmployeeCarousel;
