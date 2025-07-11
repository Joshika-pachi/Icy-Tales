import React from 'react'
import { Box } from '@mui/material'
import { borderRadius, color, display, flexDirection, fontFamily, padding } from '@mui/system'
import { IoPerson } from "react-icons/io5";
import { ColorPalette } from '../Assets/Colors';
import { FaCalendarAlt } from "react-icons/fa";

const styles={
    mainBox:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        background:"#fff",
        color:'black',
        fontFamily:'Archivo',
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
        borderRadius:'20px',
        paddingBottom:'20px'
        
    }
}

const BlogCard = ({blogs}) => {

  return (
    <Box sx={{width:'100%',}}>
        <Box sx={styles.mainBox}>
            <Box><img src={blogs.image} style={{width:'100%',height:'300px', borderRadius:'20px', scale:"1  "}}/></Box>
            <Box sx={{paddingLeft:'20px'}}>
            <Box sx={{display:'flex', alignItems:'flex-start', gap:'25px', padding:'15px 0', width:'100%'}}>
                <Box><IoPerson size={16} style={{color:ColorPalette.pink}}/>{blogs.author}</Box>
                <Box><FaCalendarAlt size={16} style={{color:ColorPalette.pink}}/>{blogs.date}</Box>
            </Box>
            <Box sx={{fontSize:'20px', fontWeight:"600", fontFamily:'Archivo'}}>{blogs.title}</Box>
            <Box sx={{color:'#646464', lineHeight:'20px', fontFamily:'Archivo', marginBottom:'5px', fontSize:'17px', padding:'2% 0'}}>{blogs.description}</Box>
            <Box sx={{fontFamily:'Archivo', color:'#0F0200', fontSize:"16px"}}>Read More</Box>
        </Box>
        </Box>
      
    </Box>
  )
}

export default BlogCard
