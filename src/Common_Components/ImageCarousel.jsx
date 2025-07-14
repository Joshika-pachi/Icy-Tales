// import React, { useState } from "react";
// import products from "../Data/CarouselData"
// import { ColorPalette } from "../Assets/Colors";

// const ImageCarousel = () => {
//   const [index, setIndex] = useState(0);
//   const itemsPerSlide = 3;
//   const totalSlides = Math.ceil(products.length / itemsPerSlide);

//   const handlePrev = () => {
//     setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
//   };

//   const handleNext = () => {
//     setIndex((prev) => (prev + 1) % totalSlides);
//   };

//   const currentItems = products.slice(
//     index * itemsPerSlide,
//     index * itemsPerSlide + itemsPerSlide
//   );

//   return (
//     <div style={styles.carouselContainer}>
//       <div style={styles.carouselSlide}>
//         {currentItems.map((item, i) => (
//           <div
//             key={item.id}
//             className={i === 1 ? "center-card" : "side-card"}
//             style={styles.cardWrapper}
//           >
//             <div style={styles.productCard}>
//               <img src={item.image} alt={item.name} style={styles.productImg} />

//               {/* Overlays */}
//               {i === 0 && (
//                 <div className="hover-overlay" style={styles.sideOverlay} onClick={handlePrev}>
//                   ← PREV
//                 </div>
//               )}

//               {i === 1 && (
//                 <div className="hover-overlay" style={styles.centerOverlay}>
//                   <div style={{ fontSize: "18px", fontWeight: "bold" }}>{item.name}</div>
//                   <div style={styles.centerButton} onClick={handleNext}>
//                     →
//                   </div>
//                 </div>
//               )}

//               {i === 2 && (
//                 <div className="hover-overlay" style={styles.sideOverlay} onClick={handleNext}>
//                   NEXT →
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Hover effects */}
//       <style>
//         {`
//           .hover-overlay {
//             opacity: 0;
//             transition: opacity 0.3s ease-in-out;
//           }

//           .side-card:hover .hover-overlay,
//           .center-card:hover .hover-overlay {
//             opacity: 1;
//           }

//           .center-card {
//             transition: transform 0.4s ease;
//           }

//           .center-card:hover {
//             transform: scale(1.15);
//             z-index: 2;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// const styles = {
//   carouselContainer: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     margin: "40px",
//   },
//   carouselSlide: {
//     display: "flex",
//     gap: "30px",
//     overflow: "hidden",
//     width: "900px",
//     justifyContent: "center",
//   },
//   cardWrapper: {
//     position: "relative",
//     borderRadius: "20px",
//   },
//   productCard: {
//     position: "relative",
//     width: "250px",
//     height: "300px",
//     borderRadius: "20px",
//     overflow: "hidden",
//     boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
//     cursor: "pointer",
//     backgroundColor: "#fff",
//   },
//   productImg: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//     borderRadius: "20px",
//   },
//   sideOverlay: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: "rgba(0, 0, 0, 0.4)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     color: "#fff",
//     fontSize: "18px",
//     fontWeight: "bold",
//     fontFamily: "Archivo",
//     zIndex: 1,
//   },
//   centerOverlay: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: "rgba(0, 0, 0, 0.3)",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     color: "#fff",
//     fontFamily: "Archivo",
//     zIndex: 1,
//   },
//   centerButton: {
//     backgroundColor: ColorPalette.pink || "#e91e63",
//     color: "#fff",
//     borderRadius: "50%",
//     width: "40px",
//     height: "40px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "20px",
//     cursor: "pointer",
//     marginTop: "10px",
//   },
// };

// export default ImageCarousel;


import React, { useState, useEffect } from "react";
import { useTheme, useMediaQuery, Box } from "@mui/material";
import products from "../Data/CarouselData";
import { ColorPalette } from "../Assets/Colors";

const ImageCarousel = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600–899px

  const [index, setIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    if (isXs) setItemsPerSlide(1);
    else if (isSm) setItemsPerSlide(2);
    else setItemsPerSlide(3);
  }, [isXs, isSm]);

  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % totalSlides);
  };

  const currentItems = products.slice(
    index * itemsPerSlide,
    index * itemsPerSlide + itemsPerSlide
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: isXs ? "10px" : "40px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "30px",
          overflow: "hidden",
          justifyContent: "center",
          width:
            itemsPerSlide === 1
              ? "90%"
              : itemsPerSlide === 2
              ? "600px"
              : "900px",
        }}
      >
        {currentItems.map((item, i) => (
          <Box
            key={item.id}
            className={i === 1 ? "center-card" : "side-card"}
            sx={{
              position: "relative",
              borderRadius: "20px",
              width:
                itemsPerSlide === 1
                  ? "100%"
                  : itemsPerSlide === 2
                  ? "48%"
                  : "250px",
              flexShrink: 0,
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "300px",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
                cursor: "pointer",
                backgroundColor: "#fff",
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />

              {/* Overlays */}
              {i === 0 && itemsPerSlide > 1 && (
                <Box
                  className="hover-overlay"
                  sx={overlayStyles.side}
                  onClick={handlePrev}
                >
                  ← PREV
                </Box>
              )}

              {i === Math.floor(itemsPerSlide / 2) && (
                <Box className="hover-overlay" sx={overlayStyles.center}>
                  <Box sx={{ fontSize: "18px", fontWeight: "bold" }}>
                    {item.name}
                  </Box>
                  <Box sx={overlayStyles.centerButton} onClick={handleNext}>
                    →
                  </Box>
                </Box>
              )}

              {i === itemsPerSlide - 1 && itemsPerSlide > 1 && (
                <Box
                  className="hover-overlay"
                  sx={overlayStyles.side}
                  onClick={handleNext}
                >
                  NEXT →
                </Box>
              )}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Hover Effects */}
      <style>
        {`
          .hover-overlay {
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
          }

          .side-card:hover .hover-overlay,
          .center-card:hover .hover-overlay {
            opacity: 1;
          }

          .center-card {
            transition: transform 0.4s ease;
          }

          .center-card:hover {
            transform: scale(1.15);
            z-index: 2;
          }
        `}
      </style>
    </Box>
  );
};

const overlayStyles = {
  side: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: "18px",
    fontWeight: "bold",
    fontFamily: "Archivo",
    zIndex: 1,
  },
  center: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.3)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontFamily: "Archivo",
    zIndex: 1,
  },
  centerButton: {
    backgroundColor: ColorPalette.pink,
    color: "#fff",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default ImageCarousel;
