import React, { useState } from "react";
import Button from "./Button";
import { ColorPalette } from "../Assets/Colors";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { borderRadius } from "@mui/system";

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
    gap: "20px",
    overflow: "hidden",
    width: "900px",
    justifyContent: "center",
  },
  productCard: {
    width: "250px",
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
    borderRadius:'50%',
    margin: "0 auto 10px",
     display: "block"
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
  role: {
        fontSize: "16px",
        color: ColorPalette.tagline,
        marginBottom: "15px",
        fontWeight:500,
      },
};

const ProductCarousel = ({ data=[], itemsPerSlide = 3 }) => {
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
    <div style={styles.carouselContainer}>
      <button style={styles.button} onClick={handlePrev}>
        ‹
      </button>
      <div style={styles.carouselSlide}>
        {currentItems.map((item) => (
          <div key={item.id} style={styles.productCard}>
            <img src={item.avatar} alt={item.name} style={styles.productImg} />
            <h3 style={styles.title}>{item.name}</h3>
            <p style={styles.role}> {item.role}</p>
            
            <FaFacebook size={24} style={{color:'#F83D8E', marginRight:'5%'}}/>
            <FaInstagram size={24} style={{color:'#F83D8E', marginRight:'5%'}}/>
            <FaYoutube size={26} style={{color:'#F83D8E', marginRight:'5%'}}/>

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
