import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../Data/BlogData"; 
import { Box, Typography, Divider } from "@mui/material";
import { IoPerson } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { ColorPalette } from "../Assets/Colors";

const BlogDetailPage = () => {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id === id);

  if (!blog) {
    return (
      <Box sx={{ padding: "50px", textAlign: "center", fontFamily: "Archivo" }}>
        <Typography variant="h4" color="error">
          Blog not found 😢
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Archivo",
        color: "#2e2e2e",
      }}
    >
      <Box
        component="img"
        src={blog.image}
        alt={blog.title}
        sx={{
          width: "100%",
          height: { xs: "200px", md: "450px" },
          objectFit: "cover",
          borderRadius: "20px",
          mb: 4,
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        }}
      />

      <Typography variant="h3" fontWeight={700} sx={{ mb: 2, fontSize: { xs: "1.8rem", md: "2.5rem" } }}>
        {blog.title}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 3, fontSize: "16px" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IoPerson size={18} color={ColorPalette.pink} />
          <span>{blog.author}</span>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <FaCalendarAlt size={16} color={ColorPalette.pink} />
          <span>{blog.date}</span>
        </Box>
      </Box>

      <Divider sx={{ mb: 3 }} />

      <Typography
        variant="body1"
        sx={{
          fontSize: "18px",
          lineHeight: 1.8,
          color: "#4a4a4a",
          whiteSpace: "pre-line",
        }}
      >
        {blog.description}
      </Typography>
    </Box>
  );
};

export default BlogDetailPage;
