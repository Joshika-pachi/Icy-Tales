import React, { useEffect, useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { FaStar, FaArrowRight } from 'react-icons/fa';
import { ProductData } from '../Data/CarouselData'

import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Carouselpage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(ProductData);
  }, []);

  const productTemplate = (product) => {
    return (
      <div
        className="carousel-item text-center"
        style={{
            width: '300px', 
          padding: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          borderRadius: '10px',
          backgroundColor: '#fff'
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '10px'
          }}
        />
        <h4 style={{ marginTop: '10px', fontSize: '1.1rem' }}>{product.name}</h4>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px', marginTop: '5px' }}>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} color="#f6c000" size={14} />
          ))}
          <span style={{ fontSize: '0.9rem', color: '#444' }}>( {product.rating}/5 )</span>
        </div>

        <p style={{ fontWeight: 'bold', color: '#a835a8', fontSize: '1.1rem', marginTop: '6px' }}>
          ${product.price.toFixed(2)}
        </p>

        <button
          style={{
            backgroundColor: '#f5369c',
            color: 'white',
            border: 'none',
            borderRadius: '30px',
            padding: '10px 20px',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginTop: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          Add to Cart <FaArrowRight />
        </button>
      </div>
    );
  };

  return (
    <>
      <style>
        {`
          .carousel-item-gap {
            margin-right: 20px;
          }
          .p-carousel-items .p-carousel-item:last-child {
            margin-right: 0;
          }
        `}
      </style>

      <div className="card mx-auto" style={{ margin: '30px auto', maxWidth: '1200px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Ice Cream Flavors</h2>
        <Carousel
          value={products}
          numVisible={3}
          numScroll={1}
          itemTemplate={productTemplate}
          autoplayInterval={4000}
          circular
          showIndicators
          showNavigators
          itemClassName="carousel-item-gap"
          responsiveOptions={[
            {
              breakpoint: '1024px',
              numVisible: 2,
              numScroll: 1
            },
            {
              breakpoint: '600px',
              numVisible: 1,
              numScroll: 1
            }
          ]}
        />
      </div>
    </>
  );
};

export default Carouselpage;
