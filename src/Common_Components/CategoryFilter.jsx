// import React from "react";
// import { Box, Typography } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { setCategory } from "../Redux/Reducer";

// const categories = [
//   "All",
//   "Canned Ice Cream",
//   "Frozen Yogurt",
//   "Ice Cream Cakes",
//   "Milkshakes",
//   "Popsicles",
//   "Sundaes",
// ];

// const CategoryFilter = () => {
//   const dispatch = useDispatch();
//   const selectedCategory = useSelector((state) => state.products.filters.category);

//   const handleCategoryChange = (e) => {
//     dispatch(setCategory(e.target.value));
//   };

//   return (
//     <Box sx={{ mb: 4 }}>
//       <Typography sx={{ fontFamily: "Archivo", fontWeight: 700, fontSize: "16px", mb: 2 }}>
//         Categories
//       </Typography>
//       <Box sx={{ fontFamily: "Archivo", fontSize: "18px", display: "flex", flexDirection: "column", gap: "8px" }}>
//         {categories.map((category) => (
//           <label key={category} style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
//             <input
//               type="radio"
//               name="category"
//               value={category}
//               checked={selectedCategory === category}
//               onChange={handleCategoryChange}
//             />
//             {category}
//           </label>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default CategoryFilter;

import React from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../Redux/Reducer";
import { color } from "@mui/system";

const categories = [
  "All",
  "Canned Ice Cream",
  "Frozen Yogurt",
  "Ice Cream Cakes",
  "Milkshakes",
  "Popsicles",
  "Sundaes",
];

const styles = {
  container: {
    mb: 4,
  },
  heading: {
    fontFamily: "Berkshire Swash",
    fontWeight: 700,
    fontSize: "20px",
    mb: 2,
  },
  radioGroup: {
    fontFamily: "Archivo",
    fontSize: "18px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    color:"#646464"
  },
  label: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
  },
};

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.products.filters.category);

  const handleCategoryChange = (e) => {
    dispatch(setCategory(e.target.value));
  };

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.heading}>
        Categories
      </Typography>
      <Box sx={styles.radioGroup}>
        {categories.map((category) => (
          <label key={category} style={styles.label}>
            <input
              type="radio"
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={handleCategoryChange}
            />
            {category}
          </label>
        ))}
      </Box>
    </Box>
  );
};

export default CategoryFilter;
