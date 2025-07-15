import React, { useState } from 'react';
import PagesHeader from '../../Common_Components/PagesHeader';
import { Box, Button } from '@mui/material';
import { ColorPalette } from '../../Assets/Colors';
import BlogCard from '../../Common_Components/BlogCard';
import blogData from '../../Data/BlogData';

const styles = {
  mainBox: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '30px',
    padding: "40px 0",
  },
  buttonBox: {
    display: 'flex',
    justifyContent: 'center',
    padding: '15px',
  },
  loadMoreBtn: {
    backgroundColor: ColorPalette.pink,
    borderRadius: '25px',
    padding: '10px 30px',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#e60073',
    },
  },
};

const LoaadMore = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const visibleBlogs = blogData.slice(0, visibleCount);

  return (
    <Box>
      <PagesHeader title="Load More" path="Load More" />

      <Box sx={styles.mainBox}>
        {visibleBlogs.map((blog, index) => (
          <Box
            key={index}
            sx={{
              width: {
                xs: '90%',  
                sm: '48%',   
                md: '30%',   
                 
              },
              flexShrink: 0,
            }}
          >
            <BlogCard blogs={blog} />
          </Box>
        ))}
      </Box>

      {visibleCount < blogData.length && (
        <Box sx={styles.buttonBox}>
          <Button sx={styles.loadMoreBtn} onClick={handleLoadMore}>
            Load More
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default LoaadMore;
