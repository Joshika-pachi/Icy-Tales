import React from "react";
import CategoryFilter from "../../../Common_Components/CategoryFilter";
import ProductList from "../../../Common_Components/FilteredProducts";
import PriceFilter from "../../../Common_Components/PriceFilter";
import { ColorPalette } from "../../../Assets/Colors";

const IceCreamPage = () => {
  return (
    <div style={{
      display: "flex",
      padding: "40px",
      fontFamily: "sans-serif",
      backgroundColor: ColorPalette.gradient,
    }}>
      {/* Sidebar */}
      <aside style={{
        width: "250px",
        backgroundColor: "#fff",
        borderRadius: "20px",
        padding: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        marginRight: "40px",
        height: "fit-content"
      }}>
        <CategoryFilter />
        <PriceFilter />
        {/* You will later add Price and Sort Filter here */}
      </aside>

      {/* Product Cards Area */}
      <main style={{ flex: 1 }}>
        <ProductList />
      </main>
    </div>
  );
};

export default IceCreamPage;

