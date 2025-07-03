// import React from "react";
// import Home1Main from "./Body/Home/Home1/Home1Main"
// import Home2Main from "./Body/Home/Home2/Home2Main"
// import Home3Main from "./Body/Home/Home3/Home3Main"
// import { BrowserRouter, Route, Routes } from "react-router-dom";


// export default function Routing(){
//     return(
//         <Routes>
//       <Route path="/" element={<Home1Main />} />
//       <Route path="/home2" element={<Home2Main />} />
//       <Route path="/home3" element={<Home3Main />} />
//     </Routes>
        

//     );
// }

import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./Body/Home/HomeLayout"; 
import Home1 from "./Body/Home/Home1/Home1Main";
import Home2 from "./Body/Home/Home2/Home2Main";
import Home3 from "./Body/Home/Home3/Home3Main";
import AboutMain from "./Body/AboutUs/AboutMain";

const routing = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,  // 👈 Main layout
    children: [
      {
        index: true,           // 👈 This makes Home1 render at "/"
        element: <Home1 />,
      },
      {
        path: "home2",
        element: <Home2 />,
      },
      {
        path: "home3",
        element: <Home3 />,
      },
      {
        path: "about",        
        element: <AboutMain />,
      },
    ],
  },
]);

export default routing;
