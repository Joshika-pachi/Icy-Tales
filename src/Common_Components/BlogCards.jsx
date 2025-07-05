import React from 'react'
import { Box } from '@mui/material'
import { alignItems, display, flexDirection, justifyContent, width } from '@mui/system';

const styles={
    mainBox:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'

    }

};

const BlogCards = ({img, poster, date, title, content}) => {
  return (
    <Box>
        <Box sx={styles.mainBox}>

        </Box>
      
    </Box>
  )
}

export default BlogCards
