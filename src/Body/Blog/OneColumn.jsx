import React from 'react';
import PagesHeader from '../../Common_Components/PagesHeader';
import { Box } from '@mui/material';
import { ColorPalette } from '../../Assets/Colors';
import BlogCard from '../../Common_Components/BlogCard';
import blogData from '../../Data/BlogData';
import { maxWidth, width } from '@mui/system';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px',
    padding: '40px 0',
  },
  cardWrapper: {
    width: '90%', 
    maxWidth:'40%'
  },
};

const OneColumn = () => {
  return (
    <Box>
      <PagesHeader title="One Column" path="One Column" />
      <Box sx={styles.container}>
        {blogData.map((blog, index) => (
          <Box key={index} sx={styles.cardWrapper}>
            <BlogCard blogs={blog} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default OneColumn;
