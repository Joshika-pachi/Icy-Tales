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
import Team from "./Body/Pages/Team"
import Review from "./Body/Pages/ReviewPage";
import SpecialOffersMain from "./Body/Pages/SpecialOffers/SpecialOffersMain";
import Error from "./Body/Pages/Error"
import ComingSoon from "./Body/Pages/ComingSoon";
import PrivacyPolicy from "./Body/Pages/PrivacyPolicy";
import TermsConditions from "./Body/Pages/TermsConditions"
import ThankYou from "./Body/Pages/ThankYou"
import Faqs from "./Body/Faqs/FaqsMain"
import ContactUs from "./Body/ContactUs/ContactUsMain"
import Shop1 from "./Body/Shop/Shop1Comp";
import Shop2 from "./Body/Shop/Shop2Comp";
import Shop3 from "./Body/Shop/Shop3Comp"
import FullPageCardDetails from "./Common_Components/FullPageDetailCard";
import CartInfo from "./Common_Components/CartInfo"
import CheckOut from "./Common_Components/CheckOut";
import Blog1 from "./Body/Blog/Blog1";
import LoaadMore from "./Body/Blog/LoaadMore";
import OneColumn from "./Body/Blog/OneColumn"
import TwoColumn from "./Body/Blog/TwoColumn";
import ThreeColumn from "./Body/Blog/ThreeColumn";
import FourColumn from "./Body/Blog/FourColumn";
import LoginLayout from "./Body/Login/LoginLayout";
import SignupMain from "./Body/Login/SignupMain";


const routing = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,  
    children: [
      {
        index: true,           
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
      {
        path:"team",
        element: <Team />,

      },
      {
        path:"review",
        element:<Review />
      },
      {
        path:"specialOffers",
        element:<SpecialOffersMain />
      },
      {
        path:"error",
        element:<Error />
      },
      {
        path:"comingSoon",
        element:<ComingSoon />
      },
      {
        path:"privacyPolicy",
        element:<PrivacyPolicy />
      },
      {
        path:"termsConditions",
        element:<TermsConditions />
      },
      {
        path:"thankYou",
        element:<ThankYou />
      },
      {
        path:"faqs",
        element:<Faqs />
      },
      {
        path:"contactUs",
        element:<ContactUs />
      },
      {
        path:"shop1",
        element:<Shop1 />
      },
      {
        path:"shop2",
        element:<Shop2 />
      },
      {
        path:"shop3",
        element:<Shop3 />
      },
      {
        path: "product/:id",
        element:<FullPageCardDetails />
      },
      {
        path:"cart",
        element:<CartInfo />
      },
      {
        path:"checkout",
        element:<CheckOut />
      },
      {
        path:"blog1",
        element:<Blog1 />
      },
      {
        path:"loadMore",
        element:<LoaadMore />
      },
      {
        path:"OneColumn",
        element:<OneColumn />
      },
      {
        path:"TwoColumn",
        element:<TwoColumn />
      },
      {
        path:"ThreeColumn",
        element:<ThreeColumn />
      },
      {
        path:'FourColumn',
        element:<FourColumn />
      },
      {
        path:"login",
        element:<LoginLayout />
      },
      {
        path:"signup",
        element:<SignupMain />
      }
    ],
  },
]);

export default routing;