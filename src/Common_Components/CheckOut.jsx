import React from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import PagesHeader from "./PagesHeader";
import DropDown from "../Common_Components/DropDown";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "./Button";
import Image from "../Assets/Images/Image";
import { FaMoneyBillWave } from "react-icons/fa";
import { ColorPalette } from "../Assets/Colors";
import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { borderColor } from "@mui/system";

const styles = {
  container: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "center",
    alignItems: "flex-start",
    gap: { xs: "30px", md: "40px" },
    padding: { xs: "20px", md: "50px" },
  },
  formBox: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 0 15px rgba(0,0,0,0.2)",
    padding: "20px",
    borderRadius: "20px",
    width: { xs: "100%", md: "65%" },
  },
  rowBox: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "center",
    alignItems: "flex-start",
    gap: { xs: "15px", sm: "30px" },
    marginBottom: "30px",
  },
  inputTitle: {
    color: "#646464",
    fontWeight: 540,
    fontFamily: "Archivo",
    fontSize: "18px",
    lineHeight: "16px",
    padding: "9px 9px 0 0",
  },
  inputBox: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "20px",
      height: "42px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#E3E4E5",
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: ColorPalette.pink,
    },
  },
  wideInputBox: {
    height: "42px",
    width: "100%",
    borderRadius: "20px",
    border: "1px solid #E3E4E5",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    "&:hover": {
      borderColor: ColorPalette.pink,
    },
  },
  summaryBox: {
    width: { xs: "100%", md: "350px" },
    borderRadius: "16px",
    padding: "20px",
    fontFamily: "Archivo",
    backgroundColor: "#fff",
    boxShadow: "0 0 15px rgba(0,0,0,0.2)",
  },
  summaryHeader: {
    display: "flex",
    justifyContent: "space-between",
    fontWeight: 700,
    borderBottom: "1px solid #eee",
    paddingBottom: "10px",
    marginBottom: "15px",
    fontSize: "16px",
  },
  summaryRow: {
    display: "flex",
    justifyContent: "space-between",
    fontWeight: 700,
    marginTop: "20px",
    fontSize: "16px",
  },
  selectStyles: {
    borderRadius: "20px",
    borderColor:'#E3E4E5',
    height: "42px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "20px",
      height: "42px",
      "&:hover fieldset": {
        borderColor: ColorPalette.pink,
      },
      "&.Mui-focused fieldset": {
        borderColor: ColorPalette.pink,
      },
    },
  },
};

const CheckOut = () => {
  const cartItems = useSelector((state) => state.products.cart);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [state, setState] = React.useState("");
  const [city, setCity]=React.useState("");

  const handleChange = (event) => {
    setState(event.target.value);
  };
  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  return (
    <Box>
      <PagesHeader title={"CheckOut"} path={"CheckOut"} />
      <Box sx={styles.container}>
        <Box sx={styles.summaryBox}>
          <Box sx={styles.summaryHeader}>
            <Box>Items</Box>
            <Box>Price</Box>
          </Box>

          {cartItems.map((item, index) => (
            <Box key={index} sx={{ marginBottom: "18px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: 700,
                }}
              >
                <Box>
                  {item.quantity} x {item.name}
                </Box>
                <Box>${(item.price * item.quantity).toFixed(2)}</Box>
              </Box>
              <Box sx={{ borderBottom: "1px solid #eee", marginTop: "12px" }} />
            </Box>
          ))}

          <Box sx={styles.summaryRow}>
            <Box>Grand Total</Box>
            <Box sx={{ color: "#FF5A8D" }}>${total.toFixed(2)}</Box>
          </Box>
        </Box>
        {/* Billing Form */}

        <Box sx={styles.formBox}>
          <Box sx={{ fontWeight: 550, fontSize: "20px", marginBottom: 2 }}>
            Billing Address
          </Box>

          <Box sx={styles.rowBox}>
            <Box sx={{ width: "100%" }}>
              <span style={styles.inputTitle}>First Name</span>
              <TextField
                fullWidth
                placeholder="First Name"
                sx={styles.inputBox}
                variant="outlined"
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              <span style={styles.inputTitle}>Last Name</span>
              <TextField
                fullWidth
                placeholder="Last Name"
                sx={styles.inputBox}
                variant="outlined"
              />
            </Box>
          </Box>

          <Box sx={styles.rowBox}>
            <Box sx={{ width: "100%" }}>
              <span style={styles.inputTitle}>Email address</span>
              <TextField
                fullWidth
                placeholder="Email address"
                sx={styles.inputBox}
                variant="outlined"
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              <span style={styles.inputTitle}>State</span>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth sx={styles.selectStyles}>
                  <Select
                    value={state}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em style={{color:"gray"}}>State</em>
                    </MenuItem>
                    <MenuItem value={10}>Andhra Pradesh</MenuItem>
                    <MenuItem value={20}>Telangana</MenuItem>
                    <MenuItem value={30}>Kerala</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>

          <Box sx={styles.rowBox}>
            <Box sx={{ width: "100%" }}>
              <span style={styles.inputTitle}>City</span>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth sx={styles.selectStyles}>
                  <Select
                    value={city}
                    onChange={handleChangeCity}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em style={{color:"gray"}}>City</em>
                    </MenuItem>
                    <MenuItem value={10}>Visakhapatnam</MenuItem>
                    <MenuItem value={20}>Vijayawada</MenuItem>
                    <MenuItem value={30}>Hyderabad</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box sx={{ width: "100%" }}>
              <span style={styles.inputTitle}>Pin Code</span>
              <TextField
                fullWidth
                placeholder="Pin Code"
                sx={styles.inputBox}
                variant="outlined"
              />
            </Box>
          </Box>
        </Box>

        {/* Cart Summary */}
      </Box>
    </Box>
  );
};

export default CheckOut;
