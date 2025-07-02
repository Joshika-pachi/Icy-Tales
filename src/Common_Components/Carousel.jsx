import React, { useState } from "react";
import products from "../Data/CarouselData";
import Button from "./Button"
import { ColorPalette } from "../Assets/Colors";
import { border, borderRadius, fontFamily, fontSize, fontWeight, lineHeight, textAlign } from "@mui/system";

const styles = {
  carouselContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    margin: "40px",
  },
  carouselSlide: {
    display: "flex",
    gap: "20px",
    overflow: "hidden",
    width: "900px",
    justifyContent: "center",
  },
  productCard: {
    width: "250px",
    borderRadius: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
    padding: "15px",
    boxShadow: "0 0 20px rgba(255, 60, 172, 0.2)",
    borderRadius:'10px'
  },
  productImg: {
    width: "100%",
    height: "130px",
    objectFit: "contain",
    borderRadius: "20px",
    marginBottom: "10px",
   

  },
  title: {
    margin: "5px 0",
    color: "#333",
    fontFamily:'Archivo',
    fontWeight:'700',
    textAlign:'center',
    fontSize:'20px'
  },
  price: {
    fontWeight: 700,
    color: ColorPalette.violet,
    fontFamily:'Archivo',
    fontSize:'22px',
    lineHeight:'20px',
    textAlign:'center'
  },
  rating: {
    fontFamily:'Archivo',
    fontWeight:600,
    fontSize:'18px',
    textAlign:'center'
  },
  button: {
    fontSize: "30px",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#444",
    padding: "10px",
  },
  buttonHover: {
    color: "#dd2c6f",
  },
};

const ProductCarousel = () => {
  const [index, setIndex] = useState(0);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % totalSlides);
  };

  const currentItems = products.slice(index * itemsPerSlide, index * itemsPerSlide + itemsPerSlide);

  return (
    <div style={styles.carouselContainer}>
      <button style={styles.button} onClick={handlePrev}>‹</button>
      <div style={styles.carouselSlide}>
        {currentItems.map((item) => (
          <div key={item.id} style={styles.productCard}>
            <img src={item.image} alt={item.name} style={styles.productImg} />
            <h3 style={styles.title}>{item.name}</h3>
            <p style={styles.rating}>⭐{item.rating}</p>
            <p style={styles.price}>{item.price}</p>
            
            <Button text={"Add to Cart"} width={130} height={44} bcolor={ColorPalette.pink} onClick={alert=>("You clicked add to cart")}></Button>
          </div>
        ))}
      </div>
      <button style={styles.button} onClick={handleNext}>›</button>
    </div>
  );
};

export default ProductCarousel;
