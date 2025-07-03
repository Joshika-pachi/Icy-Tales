import React from "react";
import {Box} from "@mui/material"
import Home1Main from "./Body/Home/Home1/Home1Main"
import Footer from "./Common_Components/Footer"
import NavLayout from "./Common_Components/NavLayout"
import Home2Main from "./Body/Home/Home2/Home2Main"
import Home3Main from "./Body/Home/Home3/Home3Main"
import MainApp from "./MainApp";


function App(){
    return(
        <Box>
            {/* <NavLayout />
            <Home2Main />
            <Footer /> */}
            <MainApp />
        </Box>

    );
};

export default App;