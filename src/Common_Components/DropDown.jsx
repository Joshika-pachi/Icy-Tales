// import React from 'react';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// const Dropdown = ({ title, options = [],  }) => {
//   return (
//     <NavDropdown
//       title={title}
//       menuVariant="dark"
//       id={`nav-dropdown-${title.toLowerCase()}`}
//       style={{ fontSize: '16px', fontWeight: '500', color: '#333333' }}
//     >
//       {options.map((item, index) => {
//         return (
//           <NavDropdown.Item href={item.href} key={index}>
//             {item.label}
//           </NavDropdown.Item>
//         );
//       })}
//     </NavDropdown>
//   );
// };

// export default Dropdown;


import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

const DropDown = ({ title, options = [] }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path); // Use React Router to navigate
  };

  return (
    <NavDropdown
      title={title}
      menuVariant="dark"
      id={`nav-dropdown-${title.toLowerCase()}`}
      style={{ fontSize: '16px', fontWeight: '500', color: '#333333' }}
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
