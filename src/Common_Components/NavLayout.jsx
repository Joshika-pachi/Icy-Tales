import React, { useState } from "react";
import Button from "./Button";
import "bootstrap/dist/css/bootstrap.min.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import DropDown from "./DropDown";
import { IoSearch } from "react-icons/io5";
import Cart from "./Cart";
import Images from "../Assets/Images/Image";
import { ColorPalette } from "../Assets/Colors";
import { Link, useNavigate } from "react-router-dom";
import { Box, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";

const styles = {
  outerDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  innerDiv: {
    width: "1417px",
    height: "70px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 40px",
  },
  icelogo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#FF5A8D",
    fontFamily: "sans-serif",
  },
  navlist: {
    display: "flex",
    alignItems: "center",
    gap: "30px",
  },
  links: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "500",
    fontSize: "16px",
    cursor: "pointer",
  },
  // mobileMenu: {
  //   width: "250px",
  //   padding: "20px",
  //   backgroundColor: "#fff",
  //   height: "100%",
  // },
  mobileMenu: {
  width: "100%",
  maxWidth: 280,
  padding: "20px",
  backgroundColor: "#fff",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: "20px",
},
  mobileLink: {
    // marginBottom: "15px"
    fontSize: "18px",
    fontFamily: "Archivo",
    fontWeight: 500,
    color: "#333",
    textDecoration: "none",
  },
};

const NavLayout = () => {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);
  const cart = useSelector((state) => state.products.cart);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Box sx={styles.outerDiv}>
      <Box sx={styles.innerDiv}>

        
        <Box sx={styles.icelogo}>
          <img src={Images.logo} alt="Logo" />
        </Box>

       
        <Box sx={{ ...styles.navlist, display: { xs: "none", md: "flex" } }}>
          <DropDown
            title="Home"
            options={[
              { label: "Explore Our Vegan Shop", href: "/home2" },
              { label: "Have a look at our gelato collection", href: "/home3" },
            ]}
          />
          <Link style={styles.links} to="/about">
            <div style={{ fontFamily: "Archivo", fontWeight: 500, fontSize: "19px" }}>About</div>
          </Link>
          <DropDown
            title="Pages"
            options={[
              { label: "Team", href: "/team" },
              { label: "Reviews", href: "/review" },
              { label: "Special Offers", href: "/specialOffers" },
              { label: "404", href: "/error" },
              { label: "Coming Soon", href: "/comingSoon" },
              { label: "Privacy Policy", href: "/privacyPolicy" },
              { label: "Terms & Conditions", href: "/termsConditions" },
              { label: "Thank You", href: "/thankYou" },
              { label: "Shop 1", href: "/shop1" },
              { label: "Shop 2", href: "/shop2" },
              { label: "Shop 3", href: "/shop3" },
            ]}
          />
          <DropDown
            title="Blog"
            options={[
              { label: "Blog", href: "/blog1" },
              { label: "Load More", href: "/loadMore" },
              { label: "One Column", href: "/OneColumn" },
              { label: "Two Column", href: "/TwoColumn" },
              { label: "Three Column", href: "/ThreeColumn" },
              { label: "Four Column", href: "/FourColumn" },
            ]}
          />
          <Link style={styles.links} to="/faqs">
            <div style={{ fontFamily: "Archivo", fontWeight: 500, fontSize: "19px" }}>Faq's</div>
          </Link>

           <Link style={styles.links} to="/login">
            <div style={{ fontFamily: "Archivo", fontWeight: 500, fontSize: "19px" }}>Login</div>
          </Link>
          <Link style={styles.links} to="/signup">
            <div style={{ fontFamily: "Archivo", fontWeight: 500, fontSize: "19px" }}>Signup</div>
          </Link>


          {/* <IoSearch size={26} /> */}
          <Cart count={cartCount} onClick={() => navigate("/cart")} />
          <Button
            text={"Contact Us"}
            width={148}
            height={48}
            bcolor={ColorPalette.pink}
            onClick={"/contactUs"}
          />
        </Box>

      
        <IconButton
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer}>
  <Box sx={{ ...styles.mobileMenu, width: 280, backgroundColor: "#fff" }}>
    <Box display="flex" justifyContent="flex-end" mb={1}>
      <IconButton onClick={toggleDrawer}>
        <CloseIcon />
      </IconButton>
    </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <DropDown
          title="Home"
          options={[
            { label: "Explore Our Vegan Shop", href: "/home2" },
            { label: "Have a look at our gelato collection", href: "/home3" },
          ]}
        />

      <Link to="/about" style={{ ...styles.mobileLink,  }}>
        About
      </Link>

      <DropDown
        title="Pages"
        options={[
          { label: "Team", href: "/team" },
          { label: "Reviews", href: "/review" },
          { label: "Special Offers", href: "/specialOffers" },
          { label: "404", href: "/error" },
          { label: "Coming Soon", href: "/comingSoon" },
          { label: "Privacy Policy", href: "/privacyPolicy" },
          { label: "Terms & Conditions", href: "/termsConditions" },
          { label: "Thank You", href: "/thankYou" },
          { label: "Shop 1", href: "/shop1" },
          { label: "Shop 2", href: "/shop2" },
          { label: "Shop 3", href: "/shop3" },
        ]}
      />

      <DropDown
        title="Blog"
        options={[
          { label: "Blog", href: "/blog1" },
          { label: "Load More", href: "/loadMore" },
          { label: "One Column", href: "/OneColumn" },
          // { label: "Two Column", href: "/TwoColumn" },
          // { label: "Three Column", href: "/ThreeColumn" },
          // { label: "Four Column", href: "/FourColumn" },
        ]}
      />

      <Link to="/faqs" style={{ ...styles.mobileLink,  }}>
        Faq's
      </Link>

      <Link to="/login" style={{ ...styles.mobileLink,  }}>
        Login
      </Link>
      
      <Link to="/signup" style={{ ...styles.mobileLink,  }}>
        Sign Up
      </Link>

      <Box display="flex" alignItems="center">
        <Cart count={cartCount} onClick={() => navigate("/cart")} />
          <Box sx={{ml:1}}>Cart</Box>
      </Box>

      <Box mt={3} textAlign="center">
        <Button
          text={"Contact Us"}
          width={180}
          height={48}
          bcolor={ColorPalette.pink}
          onClick={"/contactUs"}
        />
      </Box>
    </Box>
  </Box>
</Drawer>

    </Box>
  );
};

export default NavLayout;
