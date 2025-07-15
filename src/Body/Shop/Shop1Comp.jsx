// import React from "react";
// import { useSelector } from "react-redux";
// import Box from "@mui/material/Box";
// import CategoryFilter from "../../Common_Components/CategoryFilter";
// import PriceFilter from "../../Common_Components/PriceFilter";
// import FilteredProducts from "../../Common_Components/FilteredProducts";
// import SearchBar from "../../Common_Components/SearchBar";
// import SortingDropdown from "../../Common_Components/SortingDropdown";
// import PagesHeader from "../../Common_Components/PagesHeader"
// import FeaturedProductsCards from "../../Common_Components/FeaturedProductsCards";
// import { ColorPalette } from "../../Assets/Colors";
// import Image from "../../Assets/Images/Image";
// import DropDown from "../../Common_Components/DropDown";

// const styles = {
//   mainBox: {
//     display: "flex",
//     padding: "40px",
//     fontFamily: "sans-serif",
//   },
//   sidebar: {
//     width: "18%",
//     backgroundColor: "#fff",
//     borderRadius: "20px",
//     padding: "20px",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//     marginRight: "40px",
//     height: "fit-content",
//   },
//   centerPart: {
//     flex: 1,
//   },
//   topControls: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: "30px",
//   },
//   leftBox: {
//     display: "flex",
//     alignItems: "center",
//     gap: "30px",
//   },
//   resultText: {
//     fontSize: "14px",
//     color: "#666",
//   },
//    heading: {
//     fontFamily: "Berkshire Swash",
//     fontWeight: 500,
//     color: "#000",
//     fontSize: { xs: "12px", sm: "16px", md: "22px" },
//     lineHeight: { xs: "8px", sm: "14px", md: "22px" },
//   },
// };

// const Shop1 = () => {
//   const filteredProducts = useSelector((state) => state.products.filteredProducts);
//   const allProducts = useSelector((state) => state.products.allProducts);

//   return (
//     <Box>
//       <Box>
//         <PagesHeader title={"Shop Layout 1"} path={"Shop Layout 1"} />
//       </Box>
//     <Box sx={styles.mainBox}>
//       <Box  sx={styles.sidebar}>
//         <CategoryFilter />
//         <PriceFilter />
//         <Box sx={{display: 'flex', flexDirection: 'column', gap: '5px' }}>
//           <Box sx={styles.heading}>Featured Products</Box>
//         <FeaturedProductsCards img={Image.gelatoImage4} name={"Pistachio"} firstPrice={9.80} discounted={4.99}/>
//         <FeaturedProductsCards img={Image.gelatoImage3} name={"Tiramisu"} firstPrice={9.80} discounted={4.99}/>
//         <FeaturedProductsCards img={Image.gelatoImage1} name={"Balsamic"} firstPrice={9.80} discounted={4.99}/>
//         <FeaturedProductsCards img={Image.gelatoImage2} name={"Hazelnut"} firstPrice={9.80} discounted={4.99}/>
//         </Box>
//       </Box>
//       <Box sx={styles.centerPart}>
//         <Box sx={styles.topControls}>
//           <Box sx={styles.leftBox}>
//             <SearchBar />
//             <Box sx={styles.resultText}>
//               Showing 1–{filteredProducts.length} of {allProducts.length} results
//             </Box>
//           </Box>
//           <Box>
//             <SortingDropdown />
          
//           </Box>
//         </Box>
//         <FilteredProducts />
//       </Box>
//     </Box>
//     </Box>
//   );
// };

// export default Shop1;


import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Drawer,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CategoryFilter from "../../Common_Components/CategoryFilter";
import PriceFilter from "../../Common_Components/PriceFilter";
import FilteredProducts from "../../Common_Components/FilteredProducts";
import SearchBar from "../../Common_Components/SearchBar";
import SortingDropdown from "../../Common_Components/SortingDropdown";
import PagesHeader from "../../Common_Components/PagesHeader";
import FeaturedProductsCards from "../../Common_Components/FeaturedProductsCards";
import { ColorPalette } from "../../Assets/Colors";
import Image from "../../Assets/Images/Image";

const styles = {
  mainBox: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    padding: { xs: "20px", md: "40px" },
    fontFamily: "sans-serif",
    gap: { xs: "30px", md: "40px" },
  },
  sidebar: {
    width: { xs: "100%", md: "20%" },
    backgroundColor: "#fff",
    borderRadius: "20px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    height: "fit-content",
    display: { xs: "none", md: "block" }, // Hide on small screens
  },
  centerPart: {
    flex: 1,
  },
  topControls: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "space-between",
    alignItems: { xs: "space-around", sm: "center" },
    marginBottom: "30px",
    gap: { xs: "20px", sm: "0" },
  },
  leftBox: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: { xs: "flex-start", sm: "center" },
    gap: "20px",
  },
  resultText: {
    fontSize: "14px",
    color: "#666",
    mt: { xs: "10px", sm: 0 },
  },
  heading: {
    fontFamily: "Berkshire Swash",
    fontWeight: 500,
    color: "#000",
    fontSize: { xs: "18px", sm: "20px", md: "22px" },
    lineHeight: "22px",
    mb: 1,
  },
};

const Shop1 = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:900px)");

  const filteredProducts = useSelector((state) => state.products.filteredProducts);
  const allProducts = useSelector((state) => state.products.allProducts);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box>
      <Box>
        <PagesHeader title={"Shop Layout 1"} path={"Shop Layout 1"} />
      </Box>

      <Box sx={styles.mainBox}>
        {/* Mobile Burger Menu Button */}
        {isSmallScreen && (
          <IconButton
            onClick={toggleDrawer(true)}
            sx={{ mb: 2, alignSelf: "flex-end" }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        )}

        {/* Sidebar visible only on large screens */}
        <Box sx={styles.sidebar}>
          <CategoryFilter />
          <PriceFilter />
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", mt: 3 }}>
            <Box sx={styles.heading}>Featured Products</Box>
            <FeaturedProductsCards img={Image.gelatoImage4} name={"Pistachio"} firstPrice={9.80} discounted={4.99} />
            <FeaturedProductsCards img={Image.gelatoImage3} name={"Tiramisu"} firstPrice={9.80} discounted={4.99} />
            <FeaturedProductsCards img={Image.gelatoImage1} name={"Balsamic"} firstPrice={9.80} discounted={4.99} />
            <FeaturedProductsCards img={Image.gelatoImage2} name={"Hazelnut"} firstPrice={9.80} discounted={4.99} />
          </Box>
        </Box>

        {/* Drawer for small screen filters */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Box sx={{ width: "280px", padding: 2 }}>
            <Typography sx={styles.heading}>Filters</Typography>
            <CategoryFilter />
            <PriceFilter />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", mt: 3 }}>
              <Box sx={styles.heading}>Featured Products</Box>
              <FeaturedProductsCards img={Image.gelatoImage4} name={"Pistachio"} firstPrice={9.80} discounted={4.99} />
              <FeaturedProductsCards img={Image.gelatoImage3} name={"Tiramisu"} firstPrice={9.80} discounted={4.99} />
              <FeaturedProductsCards img={Image.gelatoImage1} name={"Balsamic"} firstPrice={9.80} discounted={4.99} />
              <FeaturedProductsCards img={Image.gelatoImage2} name={"Hazelnut"} firstPrice={9.80} discounted={4.99} />
            </Box>
          </Box>
        </Drawer>

        {/* Main content area */}
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
