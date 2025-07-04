import React from "react";
import { Box } from "@mui/material";
import PagesHeader from "../../../Common_Components/PagesHeader";
import { alignItems, display, flexDirection, justifyContent } from "@mui/system";
import DiscountCarousel from "../../../Common_Components/DiscountCarousel";
import DiscountData from "../../../Data/DiscountedData"

const styles = {
  mainBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection:'column',
    paddingTop:'50px',
     paddingBottom:'50px'
    
  },
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontWeight: 400,
    color: "#000",
    fontSize: { xs: "28px", sm: "36px", md: "50px" },
    lineHeight: { xs: "35px", sm: "45px", md: "70px" },
    textAlign: { xs: "center", md: "center" },
  },
  highlight: {
    color: "#FF3CAC",
    fontFamily: "Berkshire Swash",
  },
  tagline: {
    fontFamily: "Archivo",
    fontSize: { xs: "14px", sm: "16px", md: "20px" },
    fontWeight: 300,
    lineHeight: { xs: "22px", sm: "25px", md: "30px" },
    textAlign: { xs: "center", md: "center" },
    marginTop: "10px",
    color: "#646464",
  },
};

const SpecialOffers = () => {
  return (
    <Box >
      <Box>
        <PagesHeader title={"Special Offers"} path={"Special Offers"} />
      </Box>
      <Box sx={styles. mainBox}>
        <Box sx={styles.headingLine}>
          Upto <span style={styles.highlight}> 30% </span> Discount
        </Box>
        <Box sx={styles.tagline}>
          Discover the favorites that keep our customers coming back for more.
        </Box>
      </Box>
      <Box>
        <DiscountCarousel data={DiscountData} />
      </Box>
    </Box>
  );
};

export default SpecialOffers;
