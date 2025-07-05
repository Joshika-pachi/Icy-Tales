import { fontFamily } from '@mui/system';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Button = ({text,width, height,bcolor, onClick}) => {

  const navigate = useNavigate();

  const style = {
    backgroundColor:bcolor,
    color: '#fff',
    borderRadius: '30px',
    fontWeight: 'bold',
    height: height,
    width:width,
    border:'none',
    fontFamily:'Archivo'
  };

  const handleClick = () => {
    if (onClick) {
      navigate(onClick); 
    }
  };

  return (
    <button style={style} onClick={handleClick}>
      {text}  <FaArrowRight size={17}/>
    </button>
  );
};

export default Button;
