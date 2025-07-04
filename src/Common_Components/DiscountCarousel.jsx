import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { FaShoppingCart} from "react-icons/fa";
import { color } from "@mui/system";
import { ColorPalette } from "../Assets/Colors";

const styles = {
  carouselContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    margin: "40px 0",
    width: "100%",
  },
  carouselSlide: {
    display: "flex",
    gap: "20px",
    overflow: "hidden",
    width: "1000px",
    justifyContent: "center",
  },
  button: {
    fontSize: "30px",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#444",
    padding: "10px",
  },
  productCard: {
    position: "relative",
    width: "220px",
    backgroundColor: "#fff",
    borderRadius: "20px",
    padding: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  discountBadge: {
    position: "absolute",
    top: "15px",
    right: "15px",
    backgroundColor: ColorPalette.pink,
    color: "#fff",
    padding: "4px 8px",
    borderRadius: "5px",
    fontSize: "12px",
    fontWeight: "bold",
  },
  productImg: {
    width: "100%",
    height: "140px",
    objectFit: "contain",
    marginBottom: "10px",
  },
  productHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productTitle: {
    fontSize: "16px",
    fontWeight: 700,
    color: "#333",
    margin: 0,
    flex: 1,
  },
  productRating: {
    fontSize: "12px",
    color: "#333",
    display: "flex",
    alignItems: "center",
    marginLeft: "5px",
  },
  productDescription: {
    fontSize: "12px",
    color: "#777",
    margin: "5px 0",
    flexGrow: 1,
  },
  priceContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "auto",
  },
  originalPrice: {
    textDecoration: "line-through",
    color: "#aaa",
    fontSize: "12px",
  },
  discountedPrice: {
    color: ColorPalette.pink,
    fontWeight: "bold",
    fontSize: "14px",
  },
  cartButton: {
    backgroundColor: "#9C27B0",
    borderRadius: "50%",
    width: "35px",
    height: "35px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:'white'
  },
};

const DiscountCarousel = ({ data = [], itemsPerSlide = 3, autoplayDelay = 4000 }) => {
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

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, autoplayDelay);
    return () => clearInterval(interval);
  }, [index, autoplayDelay, totalSlides]); 

  return (
    <Box sx={styles.carouselContainer}>
      <button style={styles.button} onClick={handlePrev}>
        ‹
      </button>
      <Box sx={styles.carouselSlide}>
        {currentItems.map((item) => (
          <Box key={item.id} sx={styles.productCard}>
            <Box sx={styles.discountBadge}>{item.discount}</Box>

            <Box component="img" src={item.image} alt={item.name} sx={styles.productImg} />

            <Box sx={styles.productHeader}>
              <Box component="h3" sx={styles.productTitle}>
                {item.name}
              </Box>
              <Box sx={styles.productRating}>⭐ {item.rating}</Box>
            </Box>

            <Box component="p" sx={styles.productDescription}>
              {item.description}
            </Box>

            <Box sx={styles.priceContainer}>
              <Box>
                <Box component="span" sx={styles.originalPrice}>
                  {item.originalPrice}
                </Box>{" "}
                <Box component="span" sx={styles.discountedPrice}>
                  {item.discountedPrice}
                </Box>
              </Box>

              <Box sx={styles.cartButton}><FaShoppingCart /></Box>
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

export default DiscountCarousel;
