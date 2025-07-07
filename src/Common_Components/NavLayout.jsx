import React, { useState } from "react";
import Button from "./Button";
import "bootstrap/dist/css/bootstrap.min.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import DropDown from "./DropDown";
import { IoSearch } from "react-icons/io5";
import Cart from "./Cart";
import Images from "../Assets/Images/Image";
import { ColorPalette } from "../Assets/Colors";
import { Link } from "react-router-dom";

const styles = {
  outerDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // marginTop: "22px",
  },
  innerDiv: {
    width: "1417px",
    height: "70px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 40px",
    // boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    // backgroundColor:'#FFF'
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
};

const NavLayout = () => {
  const [cartCount, setCartCount] = useState(5);
  return (
    <div style={styles.outerDiv}>
      <div style={styles.innerDiv}>
        <div style={styles.icelogo}>
          <img src={Images.logo}></img>
        </div>

        <div style={styles.navlist}>
          <DropDown
            title="Home"
            options={[
              { label: "Home 2", href: "/home2" },
              { label: "Home 3", href: "/home3" },
            ]}
          />

          {/* <a style={styles.links} href="#">
            About
          </a> */}
          <Link style={styles.links} to="/about">
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
            title={"Blog"}
            options={[
              { label: "Action", href: "#action/1" },
              { label: "Another Action", href: "#action/2" },
              { label: "Something", href: "#action/3" },
              { type: "divider" },
              { label: "Separated Link", href: "#action/4" },
            ]}
          />
          {/* <a style={styles.links} href="#">
            Faq's
          </a> */}
          <Link style={styles.links} to="/faqs">
            Faq's
          </Link>
          <IoSearch size={26} />
          <Cart count={cartCount} onClick={() => alert("Go to cart")} />
          {/* <button style={styles.button}>Contact Us</button> */}
          <Button
            text={"Contact Us"}
            width={148}
            height={48}
            bcolor={ColorPalette.pink}
            onClick={"/contactUs"}
          />
        </div>
      </div>
    </div>
  );
};

export default NavLayout;
