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
