import React, { useState, useEffect } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { IoStar } from "react-icons/io5";
import Images from "../Assets/Images/Image";
import { ColorPalette } from "../Assets/Colors";

const styles = {
  carouselContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: "40px",
  },
  carouselSlide: {
    display: "flex",
    gap: "30px",
    overflow: "hidden",
    justifyContent: "center",
    width: "100%",
    maxWidth: "1200px",
    padding: "0 16px", 
    boxSizing: "border-box",
  },
  productCard: {
    width: "280px",
    minWidth: "280px",
    boxShadow: "0 0 20px rgba(255, 60, 172, 0.2)",
    borderRadius: "10px",
    textAlign: "center",
    padding: "15px",
    backgroundColor: "#fff",
    position: "relative",
    borderBottom: "3px solid #F83D8E",
  },
  Img: {
    width: "12%",
    height: "30px",
    objectFit: "contain",
    borderRadius: "10px",
    marginBottom: "20px",
    position: "absolute",
    left: "6%",
    top: "3%",
  },
  review: {
    margin: "5px 0",
    color: "#646464",
    fontFamily: "Archivo",
    fontWeight: "400",
    textAlign: "center",
    fontSize: "16px",
    marginTop:"30px"
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

const CardCarousel = ({ data }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [index, setIndex] = useState(0);

  const itemsPerSlide = isXs ? 1 : isSm ? 2 : 3;
  const totalSlides = Math.ceil(data.length / itemsPerSlide);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % totalSlides);
  };

  useEffect(() => {
    setIndex(0); 
  }, [itemsPerSlide]);

  const currentItems = data.slice(
    index * itemsPerSlide,
    index * itemsPerSlide + itemsPerSlide
  );

  return (
    <Box sx={{ background: ColorPalette.whi, width: "100%" }}>
      <Box sx={styles.carouselContainer}>
        <button style={styles.button} onClick={handlePrev}>
          ‹
        </button>

        <Box sx={styles.carouselSlide}>
          {currentItems.map((item) => (
            <Box key={item.id} style={styles.productCard}>
              <img src={Images.two6} style={styles.Img} alt="badge" />
              <h3 style={styles.review}>{item.text}</h3>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  marginTop: "20px",
                }}
              >
                <Box>
                  <img
                    src={item.avatar}
                    alt={item.name}
                    style={{ width: "70%", borderRadius: "50%" }}
                  />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <IoStar key={i} size={16} style={{ color: "gold" }} />
                    ))}
                  </Box>
                  <Box
                    sx={{
                      color: ColorPalette.pink,
                      fontWeight: "600",
                      fontSize: "16px",
                    }}
                  >
                    {item.name}
                  </Box>
                  <Box sx={{ color: "#646464", fontSize: "13px" }}>
                    {item.role}
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        <button style={styles.button} onClick={handleNext}>
          ›
        </button>
      </Box>
    </Box>
  );
};

export default CardCarousel;
