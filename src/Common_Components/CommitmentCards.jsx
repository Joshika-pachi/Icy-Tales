import React from 'react'
import { Box } from '@mui/material'
import { alignItems, border, display, flexDirection, fontFamily, fontSize, fontWeight, height, justifyContent, lineHeight, padding, textAlign, width } from '@mui/system';
import { ColorPalette } from '../Assets/Colors';

const styles={
    mainBox:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        height:'200px',
        width:'200px',
        border:'2px solid #646464',
       
    },
    title:{
        fontFamily:'Archivo',
        fontWeight:700,
        fontSize:'22px',
        lineHeight:'22px',
        marginTop:'10px'
    },
    tagline:{
        fontFamily:'Archivo',
        fontWeight:300,
        fontSize:"18px",
        lineHeight:'22px',
        textAlign:'center',
        marginTop:'10px',
        color:'#646464',
        paddingLeft:'10px',
        paddingRight:'10px'
        
    },
    iconContainer: {
  width: "70px",
  height: "70px",
  borderRadius: "50%", 
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
},


};

// const CommitmentCards = ({icon, title, tag, boxbg}) => {
//   return (
//     <Box>
//         <Box sx={styles.mainBox}>
//             <Box sx={{...styles.iconContainer, background:boxbg}}>{icon}</Box>
//             <Box sx={styles.title}>{title}</Box>
//             <Box sx={styles.tagline}>{tag}</Box>

//         </Box>
      
//     </Box>
//   )
// }

const CommitmentCards = ({ icon, title, tag, boxbg }) => {
  return (
    <Box>
      <Box sx={{ ...styles.mainBox }}>
        <Box sx={{ ...styles.iconContainer, background: boxbg }}>
          {icon}
        </Box>
        <Box sx={styles.title}>{title}</Box>
        <Box sx={styles.tagline}>{tag}</Box>
      </Box>
    </Box>
  );
};


export default CommitmentCards
