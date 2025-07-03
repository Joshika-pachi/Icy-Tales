import React, { useState } from "react";
import Button from "./Button";
import { ColorPalette } from "../Assets/Colors";
import Images from "../Assets/Images/Image";
import { Box } from "@mui/material";
import { IoStar } from "react-icons/io5";
import { borderBottom } from "@mui/system";

const styles = {
  carouselContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    margin: "40px",
    width: "100%",
    
  },
  carouselSlide: {
    display: "flex",
    gap: "30px",
    overflow: "hidden",
    width: "900px",
    justifyContent: "center",
  },
  productCard: {
    width: "280px",
    boxShadow: "0 0 20px rgba(255, 60, 172, 0.2)",
    borderRadius: "10px",
    textAlign: "center",
    padding: "15px",
    backgroundColor: "#fff",
    position: "relative",
    borderBottom:"3px solid #F83D8E"
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
  },
  rating: {
    fontFamily: "Archivo",
    fontWeight: 600,
    fontSize: "18px",
    textAlign: "center",
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

const CardCarousel = ({ data, itemsPerSlide = 3 }) => {
  const [index, setIndex] = useState(0);
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
    <Box sx={{background:ColorPalette.whi}}>
      <Box style={styles.carouselContainer}>
        <button style={styles.button} onClick={handlePrev}>
          ‹
        </button>
        <Box style={styles.carouselSlide}>
          {currentItems.map((item) => (
            <Box key={item.id} style={styles.productCard}>
              <img src={Images.two6} style={styles.Img} />
              <br></br>
              <h3 style={styles.review}>{item.text}</h3>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Box>
                  <img src={item.avatar} style={{ width: "70%" }}></img>
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
