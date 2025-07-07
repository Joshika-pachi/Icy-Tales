import React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import PagesHeader from "../../Common_Components/PagesHeader";
import FeaturedProductsCards from "../../Common_Components/FeaturedProductsCards";
import Image from "../../Assets/Images/Image";
import SearchBar from "../../Common_Components/SearchBar";
import SortingDropdown from "../../Common_Components/SortingDropdown"; 
import SixCardCarousel from "../../Common_Components/SixCardCarousel";
import CategoryFilter from "../../Common_Components/CategoryFilter";
import PriceFilter from "../../Common_Components/PriceFilter"
import { alignItems, justifyContent } from "@mui/system";

const styles = {
  mainBox: {
    display: "flex",
    padding: "40px",
    fontFamily: "sans-serif",
  },
  sidebar: {
    width: "18%",
    backgroundColor: "#fff",
    borderRadius: "20px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    marginRight: "40px",
    height: "fit-content",
  },
  centerPart: {
    flex: 1,
  },
  topControls: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },
  leftBox: {
    display: "flex",
    alignItems: "center",
    gap: "30px",
  },
  resultText: {
    fontSize: "14px",
    color: "#666",
  },
  heading: {
    fontFamily: "Berkshire Swash",
    fontWeight: 500,
    color: "#000",
    fontSize: { xs: "12px", sm: "16px", md: "22px" },
    lineHeight: { xs: "8px", sm: "14px", md: "22px" },
    marginBottom: "30px",
  },
  productGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    alignItems:"center",
    justifyContent:'center'
  },
};

const Shop3 = () => {
  const allProducts = useSelector((state) => state.products.allProducts);
  const gelatoProducts = allProducts.filter(
    (product) => product.category === "Popsicles"
  );

  return (
    <Box>
      <PagesHeader title="Shop Layout 3" path="Shop Layout 3" />
      <Box sx={styles.mainBox}>
        {/* Sidebar */}
        <Box sx={styles.sidebar}>
             <CategoryFilter />
        <PriceFilter />
          <Box sx={styles.heading}>Featured Products</Box>
          <FeaturedProductsCards img={Image.gelatoImage4} name="Pistachio" firstPrice={9.80} discounted={4.99} />
          <FeaturedProductsCards img={Image.gelatoImage3} name="Tiramisu" firstPrice={9.80} discounted={4.99} />
          <FeaturedProductsCards img={Image.gelatoImage1} name="Balsamic" firstPrice={9.80} discounted={4.99} />
          <FeaturedProductsCards img={Image.gelatoImage2} name="Hazelnut" firstPrice={9.80} discounted={4.99} />
        </Box>

        {/* Main Content */}
        <Box sx={styles.centerPart}>
          <Box sx={styles.topControls}>
            <Box sx={styles.leftBox}>
              <SearchBar />
              <Box sx={styles.resultText}>
                Showing 1–{gelatoProducts.length} of {allProducts.length} results
              </Box>
            </Box>
            <Box>
              <SortingDropdown />
            </Box>
          </Box>

          <Box sx={styles.productGrid}>
            <SixCardCarousel data={gelatoProducts} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Shop3;

