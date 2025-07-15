import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import Images from "../Assets/Images/Image";
import { Box, Typography, Divider } from "@mui/material";
import { ColorPalette } from "../Assets/Colors";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: ColorPalette.violet,
        color: "white",
        padding: { xs: "40px 20px", md: "60px 40px 20px" },
        fontFamily: "sans-serif",
      }}
    >
     
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "40px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        
        <Box
          sx={{
            flex: 1,
            minWidth: "180px",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <img
            src={Images.icecream}
            alt="logo"
            style={{ height: "60px", marginBottom: "10px" }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            <span style={{ color: "#FF5CA2" }}>Ice</span>Delights
          </Typography>
        </Box>

      
        <Box
          sx={{
            flex: 1,
            minWidth: "180px",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "16px", fontWeight: 600, mb: 2 }}
          >
            Navigation
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "40px",
              flexWrap: "wrap",
            }}
          >
            <ul style={{ listStyle: "none", padding: 0, color: "#FF5CA2" }}>
              <li>Home</li>
              <li>About</li>
              <li>Shop</li>
            </ul>
            <ul style={{ listStyle: "none", padding: 0, color: "#FF5CA2" }}>
              <li>Products</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </Box>
        </Box>

       
        <Box
          sx={{
            flex: 1.5,
            minWidth: "220px",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 2,
              mb: 2,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <FaMapMarkerAlt style={{ marginTop: "5px" }} />
            <Typography fontSize="14px" lineHeight={1.6}>
              <strong>Address:</strong>
              <br />
              121 King Street Melbourne, 3000, Australia
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 2,
              mb: 2,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <FaEnvelope style={{ marginTop: "5px" }} />
            <Typography fontSize="14px" lineHeight={1.6}>
              <strong>Email:</strong>
              <br />
              info@icedelights.com
            </Typography>
          </Box>
        </Box>

     
        <Box
          sx={{
            flex: 1,
            minWidth: "180px",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 2,
              mb: 2,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <FaPhone style={{ marginTop: "5px" }} />
            <Typography fontSize="14px" lineHeight={1.6}>
              <strong>+5689 2589 6325</strong>
              <br />
              Got Questions? Call us 24/7
            </Typography>
          </Box>
        </Box>
      </Box>

   
      <Divider sx={{ borderColor: "#ffffff", my: 3 }} />

      
      <Box textAlign="center" fontSize="13px" color="#ddd">
        Copyright © 2025 Joshika Pachigulla. All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;
