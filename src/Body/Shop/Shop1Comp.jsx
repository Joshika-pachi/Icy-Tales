import React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import CategoryFilter from "../../Common_Components/CategoryFilter";
import PriceFilter from "../../Common_Components/PriceFilter";
import FilteredProducts from "../../Common_Components/FilteredProducts";
import SearchBar from "../../Common_Components/SearchBar";
import SortingDropdown from "../../Common_Components/SortingDropdown";
import PagesHeader from "../../Common_Components/PagesHeader"
import FeaturedProductsCards from "../../Common_Components/FeaturedProductsCards";
import { ColorPalette } from "../../Assets/Colors";
import Image from "../../Assets/Images/Image";

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
  },
};

const Shop1 = () => {
  const filteredProducts = useSelector((state) => state.products.filteredProducts);
  const allProducts = useSelector((state) => state.products.allProducts);

  return (
    <Box>
      <Box>
        <PagesHeader title={"Shop Layout 1"} path={"Shop Layout 1"} />
      </Box>
    <Box sx={styles.mainBox}>
      <Box  sx={styles.sidebar}>
        <CategoryFilter />
        <PriceFilter />
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <Box sx={styles.heading}>Featured Products</Box>
        <FeaturedProductsCards img={Image.gelatoImage4} name={"Pistachio"} firstPrice={9.80} discounted={4.99}/>
        <FeaturedProductsCards img={Image.gelatoImage3} name={"Tiramisu"} firstPrice={9.80} discounted={4.99}/>
        <FeaturedProductsCards img={Image.gelatoImage1} name={"Balsamic"} firstPrice={9.80} discounted={4.99}/>
        <FeaturedProductsCards img={Image.gelatoImage2} name={"Hazelnut"} firstPrice={9.80} discounted={4.99}/>
        </Box>
      </Box>
      <Box sx={styles.centerPart}>
        <Box sx={styles.topControls}>
          <Box sx={styles.leftBox}>
            <SearchBar />
            <Box sx={styles.resultText}>
              Showing 1–{filteredProducts.length} of {allProducts.length} results
            </Box>
          </Box>
          <Box>
            <SortingDropdown />
          </Box>
        </Box>
        <FilteredProducts />
      </Box>
    </Box>
    </Box>
  );
};

export default Shop1;
