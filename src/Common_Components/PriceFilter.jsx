// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setPriceRange } from "../Redux/Reducer";

// const styles = {
//   container: {
//     marginBottom: "32px",
//     fontFamily: "Archivo, sans-serif",
//   },
//   heading: {
//     fontWeight: 700,
//     fontSize: "22px",
//     marginBottom: "16px",
//     color: "#0F0200",
//     fontFamily: "'Pacifico', cursive", // or replace with your heading font
//   },
//   rangeWrapper: {
//     display: "flex",
//     alignItems: "center",
//     gap: "8px",
//     marginBottom: "16px",
//   },
//   label: {
//     fontSize: "18px",
//     color: "#888",
//     fontWeight: 500,
//   },
//   priceInput: {
//     width: "60px",
//     border: "none",
//     borderBottom: "2px solid #FF3CAC",
//     fontSize: "18px",
//     fontWeight: 700,
//     color: "#FF3CAC",
//     textAlign: "center",
//     outline: "none",
//     fontFamily: "Archivo, sans-serif",
//   },
//   button: {
//     padding: "10px",
//     borderRadius: "12px",
//     backgroundColor: "#FF3CAC",
//     border: "none",
//     cursor: "pointer",
//     fontWeight: 700,
//     fontFamily: "Archivo, sans-serif",
//     fontSize: "14px",
//     color: "#fff",
//     transition: "background-color 0.3s",
//   },
// };

// const PriceFilter = () => {
//   const dispatch = useDispatch();
//   const selectedRange = useSelector((state) => state.products.filters.priceRange);
//   const [min, setMin] = useState(selectedRange[0]);
//   const [max, setMax] = useState(selectedRange[1]);

//   const handleApply = () => {
//     dispatch(setPriceRange([Number(min), Number(max)]));
//   };

//   return (
//     <div style={styles.container}>
//       <h3 style={styles.heading}>Filter By Price</h3>

//       <div style={styles.rangeWrapper}>
//         <span style={styles.label}>Range:</span>
//         <input
//           type="number"
//           value={min}
//           onChange={(e) => setMin(e.target.value)}
//           style={styles.priceInput}
//         />
//         <span style={styles.label}>-</span>
//         <input
//           type="number"
//           value={max}
//           onChange={(e) => setMax(e.target.value)}
//           style={styles.priceInput}
//         />
//       </div>

//       <button onClick={handleApply} style={styles.button}>
//         Apply
//       </button>
//     </div>
//   );
// };

// export default PriceFilter;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPriceRange } from "../Redux/Reducer";
import { fontFamily, lineHeight } from "@mui/system";

const styles = {
  container: {
    marginBottom: "32px",
  },
  heading: {
    fontWeight: 400,
    fontSize: "22px",
    marginBottom: "16px",
    color: "#000",
    fontFamily: "Berkshire Swash",
    lineHeight:'24px'
  },
  range: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  text: {
    fontSize: "18px",
    color: "#646464",
    fontWeight: 500,
    fontFamily:'Archivo'
  },
  priceInput: {
    width: "60px",
    border: "none",
    borderBottom: "2px solid #F83D8E",
    fontSize: "18px",
    fontWeight: 700,
    color: "#FF3CAC",
    textAlign: "center",
    outline: "none",
    fontFamily: "Archivo,",
  },
};

const PriceFilter = () => {
  const dispatch = useDispatch();
  const selectedRange = useSelector((state) => state.products.filters.priceRange);
  const [min, setMin] = useState(selectedRange[0]);
  const [max, setMax] = useState(selectedRange[1]);

  // Dispatch filter automatically when min or max changes
  useEffect(() => {
    dispatch(setPriceRange([Number(min), Number(max)]));
  }, [min, max, dispatch]);

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Filter By Price</h3>

      <div style={styles.range}>
        <span style={styles.text}>Range:</span>
        <input
          type="number"
          value={min}
          onChange={(e) => setMin(e.target.value)}
          style={styles.priceInput}
        />
        <span style={styles.label}>-</span>
        <input
          type="number"
          value={max}
          onChange={(e) => setMax(e.target.value)}
          style={styles.priceInput}
        />
      </div>
    </div>
  );
};

export default PriceFilter;
