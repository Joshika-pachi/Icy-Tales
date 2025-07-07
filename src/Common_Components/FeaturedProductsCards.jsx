import React from 'react';
import { Box} from '@mui/material';
import { ColorPalette } from '../Assets/Colors';

const styles = {
  cardContainer: {
    backgroundColor: ColorPalette.white,
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    fontFamily: 'Archivo',
    display: 'flex',
    padding: '16px',
  },
  image: {
    width: '60px',
    height: '60px',
    objectFit: 'cover',
    borderRadius: '12px',
    marginRight: '16px',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  name: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#646464',
    marginBottom: '8px',
  },
  prices: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  },
  discounted: {
    fontWeight: 'bold',
    color: ColorPalette.pink,
    fontSize: '18px',
  },
  originalPrice: {
    textDecoration: 'line-through',
    color: '#888',
    fontSize: '16px',
  },
};

const FeaturedProductsCards = ({ img = "", name = "", firstPrice = 0, discounted = 0 }) => {
  return (
    <Box sx={styles.cardContainer}>
      <img src={img} alt={name} style={styles.image} />
      <Box sx={styles.right}>
        <Box sx={styles.name}>{name}</Box>
        <Box sx={styles.prices}>
          <Box sx={styles.discounted}>₹{discounted}</Box>
          <Box sx={styles.originalPrice}>₹{firstPrice}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturedProductsCards;
