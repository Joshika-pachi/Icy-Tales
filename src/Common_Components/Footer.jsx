import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Images from '../Assets/Images/Image';
import { Box } from "@mui/material";
import { ColorPalette } from "../Assets/Colors";


const styles = {
  footer: {
    backgroundColor: ColorPalette.violet ,
    color: "white",
    padding: "60px 40px 20px",
    fontFamily: "sans-serif",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "40px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  logo: {
    flex: "1",
    minWidth: "180px",
  },
  logoImg: {
    
  },
  logoText: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  navSection: {
    flex: "1",
    minWidth: "180px",
  },
  heading: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "16px",
    textAlign:'center'
  },
  contactItem: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
    fontSize: "14px",
    lineHeight: "1.5",
  },
  icons: {
    marginTop: "4px",
    color: "white",
  },
 
  bottom: {
    textAlign: "center",
    fontSize: "13px",
    color: "#ddd",
  },
};

const Footer = () => {
  return (
    <div style={styles.footer}>
      
      <div style={styles.container}>
        <div style={styles.logo}>
          <img src={Images.icecream} alt="logo" style={{height: "60px",
    marginBottom: "10px"}} />
          <h2 style={styles.logoText}>
            <span style={{ color: '#FF5CA2' }}>Ice</span>Delights
          </h2>
        </div>
        <div style={styles.navSection}>
          <h4 style={styles.heading}>Navigation</h4>
          <div style={{display: "flex",
    gap: "40px",}}>
            <ul style={{color: "#FF5CA2"}}>
              <li>Home</li>
              <li>About</li>
              <li>Shop</li>
            </ul>
            <ul style={{color: "#FF5CA2"}}>
              <li>Products</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div style={{flex: "1.5",}}>
          <div style={styles.contactItem}>
            <FaMapMarkerAlt style={styles.icons} />
            <div>
              <strong>Address:</strong><br />
              121 King Street Melbourne, 3000, Australia
            </div>
          </div>
          <div style={styles.contactItem}>
            <FaEnvelope style={styles.icons} />
            <div style={{marginLeft:'65px'}}>
              <strong>Email:</strong><br />
              info@icedelights.com
            </div>
          </div>
        </div>

        {/* Phone & Social */}
        <div style={{ flex: "1",minWidth: "200px",}}>
          <div style={styles.contactItem}>
            <FaPhone style={styles.icons} />
            <div>
              <strong>+5689 2589 6325</strong><br />
              Got Questions? Call us 24/7
            </div>
          </div>
        </div>
      </div>

      <hr style={{ borderColor: "#ffffff", margin: "20px 0",}} />

      <div style={styles.bottom}>
        Copyright © 2025 Joshika Pachigulla. All rights reserved.
      </div>
    </div>
  );
};



export default Footer;

