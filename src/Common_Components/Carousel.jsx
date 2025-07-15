import React, { useState, useEffect } from "react";
import Button from "./Button";
import { ColorPalette } from "../Assets/Colors";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Reducer";
import { useTheme, useMediaQuery } from "@mui/material";

const styles = {
  carouselContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    margin: "40px",
    width: "100%",
    flexWrap: "nowrap",
  },
  carouselSlide: {
    display: "flex",
    gap: "20px",
    overflow: "hidden",
    justifyContent: "center",
    transition: "all 0.3s ease-in-out",
  },
  productCard: {
    flexShrink: 0,
    boxShadow: "0 0 20px rgba(255, 60, 172, 0.2)",
    borderRadius: "10px",
    textAlign: "center",
    padding: "15px",
    backgroundColor: "#fff",
  },
  productImg: {
    width: "100%",
    height: "130px",
    objectFit: "contain",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  title: {
    margin: "5px 0",
    color: "#333",
    fontFamily: "Archivo",
    fontWeight: "700",
    textAlign: "center",
    fontSize: "20px",
  },
  price: {
    fontWeight: 700,
    color: ColorPalette.violet,
    fontFamily: "Archivo",
    fontSize: "22px",
    lineHeight: "20px",
    textAlign: "center",
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

const ProductCarousel = ({ data = [], itemsPerSlide = 3 }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); 
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")); 

  const [index, setIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(itemsPerSlide);

  useEffect(() => {
    if (isXs) {
      setVisibleItems(1);
    } else if (isSm) {
      setVisibleItems(2);
    } else {
      setVisibleItems(itemsPerSlide);
    }
  }, [isXs, isSm, itemsPerSlide]);

  const totalSlides = Math.ceil(data.length / visibleItems);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % totalSlides);
  };

  const currentItems = data.slice(
    index * visibleItems,
    index * visibleItems + visibleItems
  );

  const dispatch = useDispatch();

  return (
    <div style={styles.carouselContainer}>
      <button style={styles.button} onClick={handlePrev}>
        ‹
      </button>
      <div
        style={{
          ...styles.carouselSlide,
          width:
            visibleItems === 1
              ? "90%"
              : visibleItems === 2
              ? "80%"
              : "900px",
        }}
      >
        {currentItems.map((item) => (
          <div
            key={item.id}
            style={{
              ...styles.productCard,
              width:
                visibleItems === 1
                  ? "100%"
                  : visibleItems === 2
                  ? "45%"
                  : "250px",
            }}
          >
            <Link to={`/product/${item.id}`} style={{ textDecoration: "none" }}>
              <img
                src={item.image}
                alt={item.name}
                style={styles.productImg}
              />
              <h3 style={styles.title}>{item.name}</h3>
            </Link>
            <p style={styles.rating}>⭐ {item.rating}</p>
            <p style={styles.price}>$ {item.price}</p>
            <Button
              text={"Add to Cart"}
              width={130}
              height={44}
              bcolor={ColorPalette.pink}
              onClick={() =>{ dispatch(addToCart(item)); alert("Added to Cart")}}
            />
          </div>
        ))}
      </div>
      <button style={styles.button} onClick={handleNext}>
        ›
      </button>
    </div>
  );
};

export default ProductCarousel;
