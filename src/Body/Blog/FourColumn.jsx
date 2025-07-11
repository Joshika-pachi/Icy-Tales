import React, { useState } from 'react';
import PagesHeader from '../../Common_Components/PagesHeader';
import { Box, Button } from '@mui/material';
import { ColorPalette } from '../../Assets/Colors';
import BlogCard from '../../Common_Components/BlogCard';
import blogData from '../../Data/BlogData';
import { padding } from '@mui/system';

const styles = {
  mainBox: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '30px',
    padding: '40px 0',
  },
  cardBox: {
    width: '22%', 
    flexShrink: 0,
  },
 
};

const FourColumn = () => {

  return (
    <Box>
      <PagesHeader title="Four Column" path="Four Column" />

      <Box sx={styles.mainBox}>
        {blogData.map((blog, index) => (
          <Box key={index} sx={styles.cardBox}>
            <BlogCard blogs={blog} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FourColumn;
