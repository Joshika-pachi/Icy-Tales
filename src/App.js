import React from 'react';
import { Box } from "@mui/material";
import { ColorPalette } from './Assets/Colors';
import NavLayout from './Common_Components/NavLayout';
import Footer from './Common_Components/Footer';
import Home1Main from './Body/Home/Home1/Home1Main';


function App() {
  return (
    <Box sx={{
      minHeight: '100vh',
      background: ColorPalette.gradient,
      paddingTop:'20px'
    }}>
      <NavLayout />
      <Home1Main />
      <Footer />
    </Box>
  );
}

export default App;