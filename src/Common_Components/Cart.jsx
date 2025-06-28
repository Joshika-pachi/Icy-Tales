import React from "react";
import { FiShoppingBag } from "react-icons/fi";

const CartIcon = ({ count = 0, onClick }) => {
  return (
    <div style={{ position: "relative", }} onClick={onClick}>
      <FiShoppingBag size={23}  />
      {count > 0 && (
        <span style={{
          position: "absolute",
          top: "-8px",
          right: "-8px",
          background: "#F83D8E",
          color: "white",
          fontSize: "12px",
          fontWeight: "bold",
          borderRadius: "50%",
          padding: "2px 6px",
        }}>
          {count}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
