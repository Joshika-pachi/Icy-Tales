import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import ClassicFavCards from "../Common_Components/ClassicFavCards";

const styles = {
  carouselContainer: {
    width: "100%",
    marginTop: "40px",
  },
  slide: {
    display: "flex",
    flexDirection: "column", 
    gap: "50px",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    gap: "70px",
    flexWrap: "wrap",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
    gap: "10px",
  },
  pageNumber: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: "#E3E4E5",
    color: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Archivo",
    fontWeight: "bold",
    fontSize: "14px",
    cursor: "pointer",
    userSelect: "none",
  },
  activePage: {
    backgroundColor: "#FF3CAC",
    color: "#fff",
  },
  arrowBtn: {
    fontSize: "24px",
    fontWeight: "bold",
    backgroundColor: "#fff",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  },
};

const Carousel = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  const itemsPerSlide = 8; 
  const totalSlides = Math.ceil(products.length / itemsPerSlide);
  const [index, setIndex] = useState(0);

  const handlePrev = () => setIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  const handleNext = () => setIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

  if (!products.length) return <p>No products found for selected filter.</p>;

  const currentSlideItems = products.slice(
    index * itemsPerSlide,
    index * itemsPerSlide + itemsPerSlide
  );

  const firstRow = currentSlideItems.slice(0, 4);
  const secondRow = currentSlideItems.slice(4, 8);

  return (
    <Box sx={styles.carouselContainer}>
      {/* Current Slide */}
      <Box sx={styles.slide}>
        <Box sx={styles.row}>
          {firstRow.map((product) => (
            <Box key={product.id} sx={{ maxWidth: "220px" }}>
              <ClassicFavCards
                img={product.image}
                heading={product.name}
                tagline={product.tagline}
                price={product.price}
                rating={product.rating || 4.5}
              />
            </Box>
          ))}
        </Box>
        <Box sx={styles.row}>
          {secondRow.map((product) => (
            <Box key={product.id} sx={{ maxWidth: "220px" }}>
              <ClassicFavCards
                img={product.image}
                heading={product.name}
                tagline={product.tagline}
                price={product.price}
                rating={product.rating || 4.5}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Pagination with arrows */}
      <Box sx={styles.paginationContainer}>
        <button style={styles.arrowBtn} onClick={handlePrev}>‹</button>
        {Array.from({ length: totalSlides }).map((_, pageIdx) => (
          <Box
            key={pageIdx}
            sx={{
              ...styles.pageNumber,
              ...(pageIdx === index ? styles.activePage : {}),
            }}
            onClick={() => setIndex(pageIdx)}
          >
            {pageIdx + 1}
          </Box>
        ))}
        <button style={styles.arrowBtn} onClick={handleNext}>›</button>
      </Box>
    </Box>
  );
};

export default Carousel;
