import React from "react";
import { Box } from "@mui/material";
import { ColorPalette } from "../Assets/Colors";
import { FaShoppingCart } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Reducer";
import { Link } from "react-router-dom";

const styles = {
  cardContainer: {
    width: "220px",
    backgroundColor: "#FFFFFF",
    borderRadius: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "translateY(-5px)",
    },
  },
  imageBox: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: "10px",
  },
  image: {
    height: "200px",
    width: "220px",
    backgroundColor: "#FFEFD8",
    borderRadius: "15px",
    filter: "brightness(95%)",
    objectFit: "contain",
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 12px 0",
  },
  heading: {
    fontWeight: "450",
    fontFamily: "Archivo",
    fontSize: "18px",
    color: "#0F0200",
  },
  ratingBox: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "14px",
    fontWeight: 500,
  },
  tagline: {
    fontFamily: "Archivo",
    fontSize: "14px",
    fontWeight: "400",
    color: "#646464",
    padding: "4px 12px 0",
    lineHeight: "18px",
    minHeight: "40px",
  },
  bottomRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px",
  },
  priceText: {
    color: ColorPalette.pink,
    fontFamily: "Archivo, sans-serif",
    fontWeight: "700",
    fontSize: "18px",
  },
  cartButton: {
    backgroundColor: ColorPalette.violet,
    borderRadius: "50%",
    border: "none",
    padding: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.3s",
    "&:hover": {
      backgroundColor: "#7a4dc3",
    },
  },
};

const ClassicFavCards = ({ img, heading, tagline, price, rating, onAddToCart, id }) => {
  
const dispatch = useDispatch();
const item = {
    id: heading,
    name: heading,
    image: img,
    price,
    rating,
    tagline,
  };

  return (
    <Box sx={styles.cardContainer}>
      <Box sx={styles.imageBox}>
        <img src={img} alt="ice-cream" style={styles.image} />
      </Box>

      <Box sx={styles.headerRow}>
        <Box sx={styles.heading}>{heading}</Box>
        <Box sx={styles.ratingBox}>
          <IoStar size={18} style={{ color: "gold" }} />
          <span style={{color:'#000'}}>{rating}/5</span>
        </Box>
      </Box>

      <Box sx={styles.tagline}>{tagline}</Box>

      <Box sx={styles.bottomRow}>
        <Box sx={styles.priceText}>${price}</Box>
        <button
          style={styles.cartButton}
          aria-label={`Add ${heading} to cart`}
          onClick={() => dispatch(addToCart(item))}
        >
          <FaShoppingCart size={16} />
        </button>
      
      </Box>
    </Box>
  );
};

export default ClassicFavCards;
