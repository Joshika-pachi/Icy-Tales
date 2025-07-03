import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import NavLayout from '../../Common_Components/NavLayout';
import Footer from '../../Common_Components/Footer';

const HomeLayout = () => {
  return (
    <Box>
        <NavLayout />
      <Outlet /> 
      <Footer />
    </Box>
  );
};

export default HomeLayout;
