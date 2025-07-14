// import React from 'react'
// import { ColorPalette } from '../Assets/Colors'
// import { Box } from '@mui/material'
// import { alignItems, borderRadius, color, display, flexDirection, fontFamily, fontSize, fontWeight, height, justifyContent, lineHeight, padding, width } from '@mui/system';
// import { Link } from 'react-router-dom';


// const styles={
//     mainBox:{
//         background:ColorPalette.gradient,
//         display:'flex',
//         alignItems:'center',
//         justifyContent:'center',
//         height:'500px',
//         flexDirection:'column',
//         width:'100%'

//     },
//     heading:{
//         fontFamily:'Berkshire Swash',
//         fontWeight:400,
//         lineHeight:'70px',
//         fontSize:'70px',
//         color:'#000'
//     },
//     pathBox:{
//         height:'50px',
//         background:ColorPalette.white,
//         fontFamily:'Archivo',
//         fontWeight:400,
//         fontSize:'18px',
//         display:'flex',
//         alignItems:'center',
//         justifyContent:'center',
//         paddingLeft:'2%',
//         paddingRight:'2%',
//         borderRadius:'10px',
//         marginTop:'20px'
//     }


// };

// const PagesHaeder = ({title, path}) => {
//   return (
//     <Box>
//         <Box sx={styles.mainBox}>
//             <Box sx={styles.heading}>
//                 {title}
//             </Box>
//             <Box sx={styles.pathBox}>
//                 <Link to="/" style={{textDecoration:'none'}}><span style={{color:ColorPalette.pink}}>Home</span></Link>  / {path}
//             </Box>

//         </Box>
      
//     </Box>
//   )
// }

// export default PagesHaeder

import React from 'react';
import { ColorPalette } from '../Assets/Colors';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const styles = {
  mainBox: {
    background: ColorPalette.gradient,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: { xs: '300px', sm: '400px', md: '500px' },
    flexDirection: 'column',
    width: '100%',
    padding: '0 16px', // Small side padding for small screens
    textAlign: 'center',
  },
  heading: {
    fontFamily: 'Berkshire Swash',
    fontWeight: 400,
    lineHeight: { xs: '40px', sm: '55px', md: '70px' },
    fontSize: { xs: '32px', sm: '50px', md: '70px' },
    color: '#000',
  },
  pathBox: {
    height: { xs: '40px', sm: '50px' },
    background: ColorPalette.white,
    fontFamily: 'Archivo',
    fontWeight: 400,
    fontSize: { xs: '14px', sm: '16px', md: '18px' },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '2%',
    paddingRight: '2%',
    borderRadius: '10px',
    marginTop: '20px',
  },
};

const PagesHaeder = ({ title, path }) => {
  return (
    <Box>
      <Box sx={styles.mainBox}>
        <Box sx={styles.heading}>{title}</Box>
        <Box sx={styles.pathBox}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span style={{ color: ColorPalette.pink }}>Home</span>
          </Link>{' '}
          / {path}
        </Box>
      </Box>
    </Box>
  );
};

export default PagesHaeder;
