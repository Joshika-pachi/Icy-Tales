// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import NavLayout from './Common_Components/NavLayout';
// import Routing from './Routing';
// import Footer from './Common_Components/Footer';

// const MainApp = () => {
//   return (
//     <BrowserRouter>
//       <NavLayout />   
//       <Routing />
//       <Footer />
//     </BrowserRouter>
//   );
// };

// export default MainApp;

import React from 'react';
import { RouterProvider } from 'react-router-dom';
import routing from './Routing';

const MainApp = () => {
  return <RouterProvider router={routing} />;
};

export default MainApp;