// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import {
//   Box,
//   Grid,
//   Typography,
//   Button,
//   Tab,
// } from "@mui/material";
// import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
// import TabPanel from "@mui/lab/TabPanel";
// import { ColorPalette } from "../Assets/Colors";
// import Carousel from "../Common_Components/Carousel"
// import CarouselData from "../Data/CarouselData"
// import PagesHeader from "./PagesHeader";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../Redux/Reducer";

// const styles = {
//   mainBox: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontFamily: "Archivo",
//     flexDirection: "column",
//   },
//   productImage: {
//     width: "100%",
//     maxWidth: 400,
//     borderRadius: "16px",
//     objectFit: "cover",
//   },
//   thumbnail: {
//     width: 60,
//     height: 60,
//     borderRadius: 8,
//     objectFit: "cover",
//     cursor: "pointer",
//     marginRight: 8,
//   },
//   relatedProductCard: {
//     border: "1px solid #eee",
//     borderRadius: 12,
//     padding: 5,
//     textAlign: "center",
//   },
// };

// const ProductDetail = () => {

//   const dispatch = useDispatch();

//   const { id } = useParams();
//   const product = useSelector((state) =>
//     state.products.allProducts.find((item) => item.id.toString() === id)
//   );
//   const related = useSelector((state) =>
//     state.products.allProducts.filter((item) => item.id.toString() !== id).slice(0, 4)
//   );
//   const [tabIndex, setTabIndex] = useState("0");
//   const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || product?.image);

//   if (!product) return <Typography>Product not found.</Typography>;

//   return (
//     <Box>
//       <PagesHeader title={"Single Product Details"} path={"Single Product Details"} />
//     <Box p={5} sx={styles.mainBox}>
//       <Grid container spacing={4} sx={{alignItems:"flex-start", marginTop:'3%'}}>
//         <Grid item xs={12} md={6}>
//           <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",gap:2, }}>
//             <img src={selectedImage} alt={product.name} style={styles.productImage} />

//             <Box display="flex" justifyContent="center" flexWrap="wrap">
//               {product.images?.map((img, index) => (
//                 <img
//                   key={index}
//                   src={img}
//                   alt={`thumb-${index}`}
//                   onClick={() => setSelectedImage(img)}
//                   style={{
//                     ...styles.thumbnail,
//                     border: selectedImage === img ? `2px solid ${ColorPalette.pink}` : "1px solid #ccc",
//                   }}
//                 />
//               ))}
//             </Box>
//           </Box>
//         </Grid>

//         <Grid item xs={12} md={6}>
//           <Typography variant="h6">⭐ {product.rating} / 5</Typography>
//           <Typography variant="h4" fontWeight={600}>{product.name}</Typography>
//           <Typography variant="subtitle1" mt={1}>{product.tagline}</Typography>
//           <Typography variant="h5" color={ColorPalette.violet} mt={2}>$ {product.price}</Typography>

//           <Box mt={2} display="flex" gap={1}>
//             {product.sizes?.map((size, index) => (
//               <Button key={index} variant="outlined" size="small">
//                 {size}
//               </Button>
//             ))}
//           </Box>

//           <Box mt={3} display="flex" alignItems="center" gap={2}>
//             <input
//               type="number"
//               defaultValue={1}
//               min={1}
//               max={99}
//               style={{ width: 60, padding: 8, borderRadius: 8, border: "1px solid #ccc" }}
//             />
//             <Button
//               variant="contained"
//               sx={{ backgroundColor: ColorPalette.pink, textTransform: "none" }}
//               onClick={() => dispatch(addToCart(product))}
//             >
//               Add to Cart
//             </Button>
//           </Box>
//         </Grid>
//       </Grid>

//       <Box mt={5} width="100%">
//         <TabContext value={tabIndex}>
//           <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//             <TabList
//               onChange={(e, val) => setTabIndex(val)}
//               aria-label="product tabs"
//               textColor="inherit"
//               TabIndicatorProps={{ style: { backgroundColor: ColorPalette.pink } }}
//             >
//               <Tab label="Description" value="0" sx={{ color: tabIndex === "0" ? ColorPalette.pink : "inherit" }} />
//               <Tab label="Additional Information" value="1" sx={{ color: tabIndex === "1" ? ColorPalette.pink : "inherit" }} />
//               <Tab label="Reviews" value="2" sx={{ color: tabIndex === "2" ? ColorPalette.pink : "inherit" }} />
//             </TabList>
//           </Box>
//           <TabPanel value="0">
//             <Typography>{product.description || "No description available."}</Typography>
//           </TabPanel>
//           <TabPanel value="1">
//             <Typography>No additional information.</Typography>
//           </TabPanel>
//           <TabPanel value="2">
//             <Typography>No reviews yet.</Typography>
//           </TabPanel>
//         </TabContext>
//       </Box>

//       <Box mt={5}>
//         <Typography
//           variant="h5"
//           fontWeight={600}
//           color={ColorPalette.pink}
//           textAlign="center"
//         >
//           Related Products
//         </Typography>
//         <Typography variant="subtitle1" textAlign="center" mb={4}>
//           Choose from some of related products
//         </Typography>
//         <Carousel data={CarouselData}/>
//       </Box>
//     </Box>
//     </Box>
//   );
// };

// export default ProductDetail;


import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Grid,
  Typography,
  Button,
  Tab,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { ColorPalette } from "../Assets/Colors";
import Carousel from "../Common_Components/Carousel";
import CarouselData from "../Data/CarouselData";
import PagesHeader from "./PagesHeader";
import { addToCart } from "../Redux/Reducer";

const styles = {
  mainBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Archivo",
    flexDirection: "column",
  },
  productImage: {
    width: "100%",
    maxWidth: 400,
    borderRadius: "16px",
    objectFit: "cover",
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 8,
    objectFit: "cover",
    cursor: "pointer",
    marginRight: 8,
  },
};

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const product = useSelector((state) =>
    state.products.allProducts.find((item) => item.id.toString() === id)
  );

  const related = useSelector((state) =>
    state.products.allProducts.filter((item) => item.id.toString() !== id).slice(0, 4)
  );

  const [tabIndex, setTabIndex] = useState("0");
  const [selectedImage, setSelectedImage] = useState(product?.images?.[0] || product?.image);

  if (!product) return <Typography>Product not found.</Typography>;

  return (
    <Box>
      <PagesHeader title="Single Product Details" path="Single Product Details" />
      <Box p={{ xs: 2, md: 5 }} sx={styles.mainBox}>
        <Grid container spacing={4} justifyContent="center" alignItems="center" mt={3}>
          {/* IMAGE SIDE */}
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
              <img src={selectedImage} alt={product.name} style={styles.productImage} />

              <Box display="flex" justifyContent="center" flexWrap="wrap">
                {product.images?.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`thumb-${index}`}
                    onClick={() => setSelectedImage(img)}
                    style={{
                      ...styles.thumbnail,
                      border: selectedImage === img
                        ? `2px solid ${ColorPalette.pink}`
                        : "1px solid #ccc",
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Grid>

          {/* DETAILS SIDE */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6">⭐ {product.rating} / 5</Typography>
            <Typography variant="h4" fontWeight={600}>{product.name}</Typography>
            <Typography variant="subtitle1" mt={1}>{product.tagline}</Typography>
            <Typography variant="h5" color={ColorPalette.violet} mt={2}>$ {product.price}</Typography>

            <Box mt={2} display="flex" gap={1} flexWrap="wrap">
              {product.sizes?.map((size, index) => (
                <Button key={index} variant="outlined" size="small">
                  {size}
                </Button>
              ))}
            </Box>

            <Box mt={3} display="flex" alignItems="center" gap={2}>
              <input
                type="number"
                defaultValue={1}
                min={1}
                max={99}
                style={{
                  width: 60,
                  padding: 8,
                  borderRadius: 8,
                  border: "1px solid #ccc",
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: ColorPalette.pink,
                  textTransform: "none",
                  "&:hover": { backgroundColor: ColorPalette.violet }
                }}
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* TABS */}
        <Box mt={5} width="100%">
          <TabContext value={tabIndex}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={(e, val) => setTabIndex(val)}
                aria-label="product tabs"
                textColor="inherit"
                TabIndicatorProps={{ style: { backgroundColor: ColorPalette.pink } }}
              >
                <Tab label="Description" value="0" sx={{ color: tabIndex === "0" ? ColorPalette.pink : "inherit" }} />
                <Tab label="Additional Information" value="1" sx={{ color: tabIndex === "1" ? ColorPalette.pink : "inherit" }} />
                <Tab label="Reviews" value="2" sx={{ color: tabIndex === "2" ? ColorPalette.pink : "inherit" }} />
              </TabList>
            </Box>
            <TabPanel value="0">
              <Typography>{product.description || "No description available."}</Typography>
            </TabPanel>
            <TabPanel value="1">
              <Typography>No additional information.</Typography>
            </TabPanel>
            <TabPanel value="2">
              <Typography>No reviews yet.</Typography>
            </TabPanel>
          </TabContext>
        </Box>

        {/* CAROUSEL */}
        <Box mt={5} width="100%">
          <Typography
            variant="h5"
            fontWeight={600}
            color={ColorPalette.pink}
            textAlign="center"
          >
            Related Products
          </Typography>
          <Typography variant="subtitle1" textAlign="center" mb={4}>
            Choose from some of related products
          </Typography>

          <Box display="flex" justifyContent="center">
            <Carousel data={CarouselData} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetail;
