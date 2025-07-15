import React from "react";
import { Box } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";
import { ColorPalette } from "../Assets/Colors";
import { useDispatch } from "react-redux";
import { setCategory } from "../Redux/Reducer";
import { useNavigate } from "react-router-dom";

const styles = {
  cardContainer: {
    width: "220px",
    height: "300px",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    boxSizing: "border-box",
  },
  footerBox: {
    marginTop: "auto",
    backgroundColor: "#fff",
    borderRadius: "16px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 16px",
  },
  nameText: {
    fontWeight: "600",
    fontFamily: "Archivo",
    fontSize: "16px",
    color: "#000",
  },
  iconCircle: {
    height: "32px",
    width: "32px",
    backgroundColor: ColorPalette.pink,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    cursor: "pointer",
  },
};

const CategoryCards = ({ image, name }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setCategory(name));
    navigate("/shop1");
  };

  return (
    <Box sx={{ ...styles.cardContainer, backgroundImage: `url(${image})` }}>
      <Box sx={styles.footerBox}>
        <Box sx={styles.nameText}>{name}</Box>
        <Box sx={styles.iconCircle} onClick={handleClick}>
          <FaArrowRight />
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryCards;
