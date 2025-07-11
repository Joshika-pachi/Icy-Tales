import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../Redux/Reducer";
import { ColorPalette } from "../Assets/Colors";
import { ImCross } from "react-icons/im";
import Button from "../Common_Components/Button";
import { MdSecurity } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { TiMinus } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import PagesHeader from "./PagesHeader";

const styles = {
  container: {
    display: "flex",
    gap: "40px",
    padding: "40px",
    fontFamily: "Archivo",
  },
  cartTable: {
    flex: 2.5,
    boxShadow: "0 0 15px rgba(0,0,0,0.2)",
    padding: "30px",
    borderRadius: "20px",
    backgroundColor: "#fff",
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: "0 20px",
  },
  tableHead: {
    fontWeight: 600,
    textAlign: "left",
    borderBottom: "5px solid #646464",
    paddingBottom: "10px",
  },
  productRow: {
    verticalAlign: "top",
    borderBottom: "1px solid #f2f2f2",
  },
  productInfo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  productImage: {
    width: "60px",
    height: "60px",
    objectFit: "contain",
    borderRadius: "8px",
  },
  quantityBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  },
  continueLink: {
    textDecoration: "none",
    color: "#9C27B0",
    fontSize: "18px",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
  },
  summaryBox: {
    flex: 0.9,
    padding: "20px",
    borderRadius: "20px",
    boxShadow: "0 0 15px rgba(0,0,0,0.2)",
    backgroundColor: "#fff",
    borderTop: "3px solid #683292",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  applyCoupon: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 0",
    width: "100%",
    borderTop: "1px solid #E5E5E5",
    borderBottom: "1px solid #E5E5E5",
    margin: "20px 0",
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  applyButton: {
    padding: "6px 20px",
    borderRadius: "20px",
    backgroundColor: "#683292",
    color: "#fff",
    border: "none",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    marginLeft: "12px",
  },
  note: {
    fontSize: "14px",
    color: "#787878",
    marginTop: "10px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
};

const CartPage = () => {
  const navigate=useNavigate();
  const cartItems = useSelector((state) => state.products.cart);
  console.log(cartItems)
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 20;
  const total = subtotal + shipping;

  return (
    <Box>
      <PagesHeader title={"Shopping Cart"} path={"Shopping Cart"} />
    <Box sx={styles.container}>
      {/* Cart Items */}
      <Box sx={styles.cartTable}>
        <Box
          sx={{
            fontSize: 24,
            fontWeight: 550,
            mb: 2,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>Shopping Cart</Box>
          <Box>({cartItems.length} Items)</Box>
        </Box>

        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHead}>
              <th>Product Details</th>
              <th style={{ textAlign: "center" }}>Price</th>
              <th style={{ textAlign: "center" }}>Quantity</th>
              <th style={{ textAlign: "center" }}>Total</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} style={styles.productRow}>
                <td>
                  <Box sx={styles.productInfo}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={styles.productImage}
                    />
                    <Box sx={{ fontWeight: 600 }}>{item.name}</Box>
                  </Box>
                </td>
                <td
                  style={{
                    textAlign: "center",
                    color: ColorPalette.pink,
                    fontWeight: 500,
                    fontSize: "18px",
                  }}
                >
                  ${item.price.toFixed(2)}
                </td>
                <td style={{ textAlign: "center" }}>
                  <Box sx={styles.quantityBox}>
                    {/* <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button> */}
                    <Box onClick={() => dispatch(incrementQuantity(item.id))} sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                      <FaPlus />
                    </Box>
                    {item.quantity}
                    <Box onClick={() => dispatch(decrementQuantity(item.id))} sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                      <TiMinus />
                    </Box>
                  </Box>
                </td>
                <td style={{ textAlign: "center" }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td style={{ textAlign: "center" }}>
                  <Box
                    sx={{
                      border: "1px solid #646464",
                      borderRadius: "50%",
                      padding: "6px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: ColorPalette.pink,
                    }}
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    <ImCross />
                  </Box>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Box mt={2}>
          <Link to="/" style={styles.continueLink}>
            <FaArrowLeft /> Continue Shopping
          </Link>
        </Box>
      </Box>

      {/* Summary Box */}
      <Box sx={styles.summaryBox}>
        <Box sx={{ fontSize: "20px", fontWeight: 700, mb: 1 }}>
          Order Summary
        </Box>

        <Box sx={styles.applyCoupon}>
          <Box sx={{ fontSize: "16px", fontWeight: 550 }}>Apply Coupons</Box>
          <button style={styles.applyButton}>Apply</button>
        </Box>

        <Box sx={{ width: "100%", fontSize: "18px", fontWeight: 600, mb: 2 }}>
          Product Details:
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "16px",
            mb: 1,
          }}
        >
          <Box sx={{ color: "#787878", fontWeight: 550 }}>Sub Total</Box>
          <Box>${subtotal.toFixed(2)}</Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "16px",
            mb: 2,
          }}
        >
          <Box sx={{ color: "#787878", fontWeight: 550 }}>Shipping</Box>
          <Box>${shipping.toFixed(2)}</Box>
        </Box>

        <Box sx={{ width: "100%", borderTop: "1px solid #eee", my: 2 }} />

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            fontWeight: 700,
            fontSize: "16px",
            color: "#FF5A8D",
          }}
        >
          <Box sx={{ color: "#0F0200" }}>Grand Total</Box>
          <Box>${total.toFixed(2)}</Box>
        </Box>

        <Box
          sx={{
            width: "100%",
            mt: 3,
            mb: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            text="Proceed to checkout"
            width="75%"
            height={54}
            bcolor={ColorPalette.pink}
            onClick={"/checkout"}
          />
        </Box>

        <Box sx={styles.note}>
          <MdSecurity size={20} />
          Safe and Secure Payments, Easy Returns. 100% Authentic Products
        </Box>
      </Box>
    </Box>
    </Box>
  );
};

export default CartPage;
