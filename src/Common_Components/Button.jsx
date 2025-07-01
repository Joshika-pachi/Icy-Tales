import { fontFamily } from '@mui/system';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Button = ({text,width, height,bcolor, onClick}) => {
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

  return (
    <button style={style} onClick={onClick}>
      {text}  <FaArrowRight size={17}/>
    </button>
  );
};

export default Button;
