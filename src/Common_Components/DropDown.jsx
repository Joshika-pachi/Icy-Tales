import { fontFamily, fontSize, fontWeight } from '@mui/system';
import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

const DropDown = ({ title, options = [] }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path); 
  };

  const styles={
     textStyling:{
      fontFamily:'Archivo',
      fontWeight:500,
      color: '#333333',
      fontSize:'18px'

    },
  };

  return (
    <NavDropdown
      title={title}
      menuVariant="light"
      id={`nav-dropdown-${title.toLowerCase()}`}
      style={styles.textStyling}
    >
      {options.map((item, index) => (
        <NavDropdown.Item
          key={index}
          onClick={() => handleNavigation(item.href)}
        >
          {item.label}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  );
};

export default DropDown;
