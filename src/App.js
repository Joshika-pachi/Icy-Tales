import React from 'react';
import { Box } from "@mui/material";
import { ColorPalette } from './Assets/Colors';
import NavLayout from './Common_Components/NavLayout';
import Footer from './Common_Components/Footer';
import Home1Main from './Body/Home/Home1/Home1Main';
import Home2Main from './Body/Home/Home2/Home2Main';
import Home3Main from './Body/Home/Home3/Home3Main';


function App() {
  return (
    <Box sx={{
      minHeight: '100vh',
      background: ColorPalette.gradient,
      paddingTop:'5px',
      overflow:'hidden'
    }}>
      <NavLayout />
      {/* <Home1Main />  */}
      {/* <Home2Main /> */}
      <Home3Main />

      <Footer />
    </Box>
  );
}

export default App;