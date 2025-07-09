import React, { useState } from "react";
import reviewdata from "../Data/ReviewsCarouselData";
import { Box } from "@mui/material";
import { IoStar } from "react-icons/io5";
import { ColorPalette } from "../Assets/Colors";
import { fontWeight } from "@mui/system";

function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + reviewdata.length) % reviewdata.length);
  const next = () => setCurrent((current + 1) % reviewdata.length);

  const styles = {
    container: {
      textAlign: "start",
      padding: "50px",
     
      fontFamily: "Archivo",
    },
    headingLine: {
    fontFamily: "Berkshire Swash",
    fontWeight: 400,
    lineHeight: "80px",
    color: "#000",
    fontSize: "48px",
    lineHeight: "70px",
    textAlign: "center",
    marginBottom: "10px",
  },
  highlight: {
    color: "#FF3CAC",
    fontFamily: "Berkshire Swash",
  },
  
    content: {
      maxWidth: "700px",
      margin: "0 auto",
      position: "relative",
      padding:"20px"
    },
    review: {
      fontSize: "1.2rem",
      marginBottom: "30px",
      paddingBottom:'20px'
    },
    author: {
      fontWeight: 700,
      color: ColorPalette.pink,
      fontSize: "22px",
      marginBottom: "5px",
    },
    role: {
      fontSize: "16px",
      color: ColorPalette.tagline,
      marginBottom: "30px",
      fontWeight:500,
    },
    controls: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "15px",
    },
    button: {
      background: "none",
      border: "none",
      fontSize: "1.5rem",
      cursor: "pointer",
    },
    avatar: (isActive) => ({
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      opacity: isActive ? 1 : 0.5,
      cursor: "pointer",
      border: `2px solid ${isActive ? "hotpink" : "transparent"}`,
      transition: "all 0.3s ease",
    }),
  };

  return (
    <Box  style={styles.container}>
      <Box style={styles.headingLine}>
        Hear From Our <span style={styles.highlight}>Happy</span> Fans
      </Box>

      <Box style={styles.content}>
        <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingBottom:'20px',
                      paddingTop:'20px'
                    }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <IoStar key={i} size={20} style={{ color: "gold" }} />
                    ))}
                  </Box>
        <Box style={styles.review}>"{reviewdata[current].text}"</Box>
        <Box style={styles.author}>{reviewdata[current].name}</Box>
        <Box style={styles.role}>{reviewdata[current].role}</Box>
        <Box style={styles.controls}>
          <button style={styles.button} onClick={prev}>&larr;</button>
          {reviewdata.map((t, index) => (
            <img
              key={index}
              src={t.avatar}
              alt={t.name}
              style={styles.avatar(index === current)}
              onClick={() => setCurrent(index)}
            />
          ))}
          <button style={styles.button} onClick={next}>&rarr;</button>
        </Box>
      </Box>
    </Box>
  );
}

export default ReviewsCarousel;
