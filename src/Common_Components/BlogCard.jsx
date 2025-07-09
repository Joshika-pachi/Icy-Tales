import React from 'react'
import { Box } from '@mui/material'
import { color, display, flexDirection, fontFamily } from '@mui/system'
import { IoPerson } from "react-icons/io5";
import { ColorPalette } from '../Assets/Colors';
import { FaCalendarAlt } from "react-icons/fa";

const styles={
    mainBox:{
        width:'250px',
        display:'flex',
        flexDirection:'column',
        background:"#fff",
        color:'black',
        fontFamily:'Archivo',
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
    }
}

const BlogCard = ({blogs}) => {

  return (
    <Box>
        <Box sx={styles.mainBox}>
            <Box sx={{width:'250px'}}><img src={blogs.image} /></Box>
            <Box sx={{display:'flex', alignItems:'flex-start', gap:'20px', padding:'20px 0', width:'100%'}}>
                <Box><IoPerson size={16} style={{color:ColorPalette.pink}}/>{blogs.author}</Box>
                <Box><FaCalendarAlt size={16} style={{color:ColorPalette.pink}}/>{blogs.date}</Box>
            </Box>
            <Box sx={{fontSize:'20px', fontWeight:"600"}}>{blogs.title}</Box>
            <Box sx={{color:'#646464', lineHeight:'20px'}}>{blogs.description}</Box>
            <Box>Read More</Box>
        </Box>
      
    </Box>
  )
}

export default BlogCard
