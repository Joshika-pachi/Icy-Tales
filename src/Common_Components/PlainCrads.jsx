// import React from 'react'
// import { Box } from "@mui/material";
// import { ColorPalette } from '../Assets/Colors';

// const PlainCrads = ({img}) => {
//   return (
//     <Box>
//       <Box >
//         <img
//           src={img} alt='ice cream' style={{height:'150px', width:'150px', borderRadius:'10px', objectFit: "contain", boxShadow:''}}></img>
//       </Box>
//     </Box>
//   )
// }

// export default PlainCrads

import React from 'react';
import { Box } from "@mui/material";
import { ColorPalette } from '../Assets/Colors'; // make sure path is correct

const PlainCrads = ({ img }) => {
  return (
    <Box>
      <img
        src={img}
        alt="ice cream"
        style={{
          height: '240px',
          width: '180px',
          objectFit: 'cover',
          borderRadius:'15px', 
          marginRight:'40px'
        }}
      />
    </Box>
  );
};

export default PlainCrads;
