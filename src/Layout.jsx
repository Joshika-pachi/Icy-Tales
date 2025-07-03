import React from "react";
import { Outlet } from "react-router-dom";
import NavLayout from "./Common_Components/NavLayout";      
import Footer from "./Common_Components/Footer"; 

const Layout = () => {
  return (
    <>
      <NavLayout />     
      
      <Outlet />        
      
      <Footer />  
    </>
  );
};

export default Layout;
