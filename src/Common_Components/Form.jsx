import React from 'react'
import { Box } from '@mui/material'
import { alignItems, color, display, fontFamily, fontSize, fontWeight, justifyContent, lineHeight } from '@mui/system'
import Button from "./Button"
import { ColorPalette } from '../Assets/Colors'

const styles={
    rowBox:{
        display:'flex',
        justifyContent:'center',
        alignItems:'flex-start',
        gap:'30px',
        marginBottom:'30px'
    },
    title:{
        color:'#646464',
        fontWeight:500,
        fontFamily:'Archivo',
        fontSize:'18px',
        lineHeight:'16px',
        padding:'9px'
    },
    inputBox:{
        height:'42px',
        width:'300px',
        borderRadius:'20px', 
        border:'1px solid #E3E4E5',
         '&:hover': {
      borderColor: ColorPalette.pink, 
    },

    }
}

const Form = () => {
  return (
    <Box>
        <Box sx={styles.rowBox}>
            <Box><span style={styles.title}>First Name</span> <br></br> <Box sx={styles.inputBox}></Box></Box>
            <Box><span style={styles.title}>Last Name</span> <br></br> <Box sx={styles.inputBox}></Box></Box>
        </Box>
        <Box sx={styles.rowBox}>
            <Box><span style={styles.title}>Email address</span> <br></br> <Box sx={styles.inputBox}></Box></Box>
            <Box><span style={styles.title}>Phone</span> <br></br> <Box sx={styles.inputBox}></Box></Box>
        </Box>
        <Box sx={styles.rowBox}>
            <Box><span style={styles.title}>Message</span> <br></br> <Box sx={{...styles.inputBox, height:'150px', alignItems:'flex-start', width:'630px'}}></Box></Box>
        </Box>
        <Button text={"Submit Now"} width={180} height={52} bcolor={ColorPalette.pink} onClick={"#"}></Button>
      
    </Box>
  )
}

export default Form
