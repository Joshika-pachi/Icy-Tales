import React, { useState } from "react";
import reviewdata from "../Data/ReviewsCarouselData";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { IoStar } from "react-icons/io5";
import { ColorPalette } from "../Assets/Colors";

function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const isXs = useMediaQuery("(max-width:600px)");
  const isSm = useMediaQuery("(max-width:900px)");

  const prev = () => setCurrent((current - 1 + reviewdata.length) % reviewdata.length);
  const next = () => setCurrent((current + 1) % reviewdata.length);

  return (
    <Box
      sx={{
        padding: { xs: "30px 15px", sm: "40px", md: "50px" },
        fontFamily: "Archivo",
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Berkshire Swash",
          fontSize: { xs: "28px", sm: "36px", md: "48px" },
          fontWeight: 400,
          lineHeight: { xs: "38px", sm: "50px", md: "70px" },
          color: "#000",
          mb: 2,
        }}
      >
        Hear From Our{" "}
        <Box component="span" sx={{ color: "#FF3CAC", fontFamily: "Berkshire Swash" }}>
          Happy
        </Box>{" "}
        Fans
      </Typography>

      <Box sx={{ py: 2, display: "flex", justifyContent: "center" }}>
        {[...Array(5)].map((_, i) => (
          <IoStar key={i} size={20} style={{ color: "gold" }} />
        ))}
      </Box>

      <Typography
        sx={{
          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
          mb: 3,
          px: { xs: 2, sm: 3 },
        }}
      >
        "{reviewdata[current].text}"
      </Typography>

      <Typography
        sx={{
          fontWeight: 700,
          color: ColorPalette.pink,
          fontSize: { xs: "18px", sm: "20px", md: "22px" },
        }}
      >
        {reviewdata[current].name}
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "14px", sm: "15px", md: "16px" },
          color: ColorPalette.tagline,
          mb: 4,
          fontWeight: 500,
        }}
      >
        {reviewdata[current].role}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: "12px", alignItems: "center" }}>
        <button
          onClick={prev}
          style={{
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
            color: "#444",
          }}
        >
          ←
        </button>

        {reviewdata.map((t, index) => (
          <img
            key={index}
            src={t.avatar}
            alt={t.name}
            onClick={() => setCurrent(index)}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              opacity: index === current ? 1 : 0.5,
              cursor: "pointer",
              border: `2px solid ${index === current ? "hotpink" : "transparent"}`,
              transition: "all 0.3s ease",
            }}
          />
        ))}

        <button
          onClick={next}
          style={{
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
            color: "#444",
          }}
        >
          →
        </button>
      </Box>
    </Box>
  );
}

export default ReviewsCarousel;


