// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import { Box } from '@mui/material';
// import NavLayout from '../../Common_Components/NavLayout';
// import Footer from '../../Common_Components/Footer';

// const HomeLayout = () => {
//   return (
//     <Box>
//         <NavLayout />
//       <Outlet /> 
//       <Footer />
//     </Box>
//   );
// };

// export default HomeLayout;


import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavLayout from "../../Common_Components/NavLayout";
import Footer from "../../Common_Components/Footer";
import CartSync from "../../CartSync";
import Loader from "../../Loader";
import { useDispatch } from "react-redux";
import MultiImageUpload from "../../MultiImageUpload";



const HomeLayout = () => {
  const location = useLocation();
  const dispatch= useDispatch();

  
  const hideComponentsOnPaths = ["/login", "/signup"];

  const shouldHide = hideComponentsOnPaths.includes(location.pathname);

  return (
    <div>
      <CartSync />
      {/* <MultiImageUpload /> */}
     
      {!shouldHide && <NavLayout />}
     

      <Outlet />

      {!shouldHide && <Footer />}
    </div>
  );
};

export default HomeLayout;