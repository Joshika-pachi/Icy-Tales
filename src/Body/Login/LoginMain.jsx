// import React, { useState } from "react";
// import { Box, Typography, TextField, Button, Link as MuiLink } from "@mui/material";
// import { FcGoogle } from "react-icons/fc";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import loginImage from "./login-image.jpg";
// import { ColorPalette } from "../../Assets/Colors";
// import Images from "../../Assets/Images/Image";
// import { Col } from "react-bootstrap";

// function LoginMain() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const storedUser = JSON.parse(localStorage.getItem("signupUser"));

//     if (storedUser && storedUser.email === email && storedUser.password === password) {
//       setMessage("Login successful!");
//     } else {
//       setMessage("Invalid email or password");
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         background: ColorPalette.gradient,
//         padding: 2,
//         fontFamily:"Archivo"
//       }}
//     >
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           width: { xs: "100%", sm: "90%", md: "800px" },
//           maxWidth: "1000px",
//           boxShadow: 4,
//           borderRadius: 2,
//           overflow: "hidden",
//           backgroundColor: "white",
//         }}
//       >
//         {/* Image Side */}
//         <Box
//           sx={{
//             flex: 1,
//             backgroundImage: `url(${Images.Home2Comp3Image})`,
//             backgroundSize: "cover",
//             backgroundRepeat: "no-repeat",
//             backgroundPosition: "center",
//             display: { xs: "none", md: "block" },
//           }}
//         />

//         {/* Form Side */}
//         <Box
//           component="form"
//           onSubmit={handleLogin}
//           sx={{
//             flex: 1,
//             p: 4,
//             display: "flex",
//             flexDirection: "column",
//             gap: 2,
//           }}
//         >
//           <Typography variant="h4" align="center" fontWeight={600} color={ColorPalette.pink} fontFamily="Archivo">
//             LOGIN
//           </Typography>
//           <hr />

//           <Box>
//             <Typography fontWeight="bold" color="#646464">Email:</Typography>
//             <TextField
//               fullWidth
//               size="small"
//               type="email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </Box>

//           <Box>
//             <Typography fontWeight="bold" color="#646464">Password:</Typography>
//             <TextField
//               fullWidth
//               size="small"
//               type="password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               sx={{color:ColorPalette.tagline}}
//             />
//           </Box>

//           {message && (
//             <Typography
//               sx={{
//                 color: message.includes("success") ? "green" : "red",
//                 textAlign: "center",
//               }}
//             >
//               {message}
//             </Typography>
//           )}

//           <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, bgcolor: ColorPalette.pink, color: "white" }}>
//             Login
//           </Button>

//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               mt: 2,
//               fontSize: "14px",
//             }}
//           >
//             <MuiLink href="#" underline="hover" color="#646464" fontSize="16px" fontWeight="600">
//               Forgot Password?
//             </MuiLink>
//             <MuiLink component={Link} to="/signup" underline="hover" color="#646464" fontSize="16px" fontWeight="600">
//               Signup
//             </MuiLink>
//           </Box>

//           <hr />

//           <Typography  align="center" sx={{color:ColorPalette.pink, fontWeight:"550"}}>
//             Or Login With:
//           </Typography>

//           <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
//             <MuiLink
//               href="https://accounts.google.com/signin"
//               target="_blank"
//               rel="noopener noreferrer"
//               sx={iconButtonStyle}
//             >
//               <FcGoogle size={23} />
//             </MuiLink>

//             <MuiLink
//               href="https://github.com/Joshika-pachi"
//               target="_blank"
//               rel="noopener noreferrer"
//               sx={iconButtonStyle}
//             >
//               <FaGithub size={23} />
//             </MuiLink>

//             <MuiLink
//               href="https://www.linkedin.com/in/joshika-pachi-0b1b2a1b6/"
//               target="_blank"
//               rel="noopener noreferrer"
//               sx={iconButtonStyle}
//             >
//               <FaLinkedin size={23} color="#0A66C2" />
//             </MuiLink>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// const iconButtonStyle = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   width: "48px",
//   height: "48px",
//   borderRadius: "8px",
//   border: "1px solid #ccc",
//   cursor: "pointer",
// };

// export default LoginMain;

import React, { useState } from 'react';
import {
  Box, Button, TextField, Typography, Checkbox, FormControlLabel
} from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

// Your assets
// import loginIce from '../../Assets/Images/loginIce.png';
// import circle1 from '../../Assets/Decoratives/circle1.png';
// import triangle1 from '../../Assets/Decoratives/triangle1.png';
import Images from '../../Assets/Images/Image';

function LoginMain() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('signupUser'));

    if (!email || !password) {
      setMessage('Please fill in all fields');
      return;
    }
    if (storedUser?.email === email && storedUser?.password === password) {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid email or password');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: '"Poppins", sans-serif',
        position: 'relative',
        px: 2,
      }}
    >

      {/* Decorative Images */}
      <Box
        component="img"
        src={Images.SideCircles}
        alt="circle"
        sx={{
          position: 'absolute',
          top: '10%',
          left: '80px',
          width: '40px',
          zIndex: 1,
          scale:"1.5"
        }}
      />
      <Box
        component="img"
        src={Images.SideTraingle}
        alt="triangle"
        sx={{
          position: 'absolute',
          top: '45%',
          right: '10%',
          width: '30px',
          zIndex: 1,
          scale:"1.5"
        }}
      />

      {/* Main container */}
      <Box
        sx={{
          maxWidth: '1000px',
          width: '100%',
          display: 'flex',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.1)',
          flexDirection: { xs: 'column', md: 'row' },
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Left Image Box with gradient */}
        <Box
          sx={{
            flex: 1,
            background: 'linear-gradient(to bottom right, #fdf0f3, #eefaff)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
          }}
        >
          <Box
            component="img"
            src={Images.loginIce}
            alt="ice cream"
            sx={{
              width: '120%',
              maxHeight: '500px',
              transform: 'rotate(35deg) scale(1.2)',
              objectFit: 'contain',
            }}
          />
        </Box>

        {/* Right Form Box */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            flex: 1,
            p: { xs: 4, sm: 6 },
            background: 'linear-gradient(to bottom right, #fdf0f3, #eefaff)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 2,
            position: 'relative',
          }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            fontFamily="'Berkshire Swash', cursive"
            sx={{ fontSize: '36px' }}
          >
            Welcome <span style={{ color: '#f72585' }}>Back</span>
          </Typography>

          <Typography textAlign="center" fontSize="14px" color="#666" sx={{ mb: 2 }}>
            Welcome back! Please enter your details
          </Typography>

          {/* Email */}
          <Box>
            <Typography sx={{ mb: 0.5, fontWeight: 500, fontSize: '14px' }}>Email</Typography>
            <TextField
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              variant="outlined"
              placeholder="Enter your email"
              sx={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '10px',
                },
              }}
            />
          </Box>

          {/* Password */}
          <Box>
            <Typography sx={{ mb: 0.5, fontWeight: 500, fontSize: '14px' }}>Password</Typography>
            <TextField
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              variant="outlined"
              placeholder="********"
              sx={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '10px',
                },
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Remember me"
              sx={{ fontSize: '14px' }}
            />
            <Link to="#" style={{ fontSize: '14px', color: '#555' }}>
              Forgot password
            </Link>
          </Box>

          {message && (
            <Typography color={message.includes('success') ? 'green' : 'error'} textAlign="center">
              {message}
            </Typography>
          )}

          <Button
            type="submit"
            fullWidth
            sx={{
              mt: 1,
              backgroundColor: '#7209b7',
              color: 'white',
              fontWeight: 600,
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              '&:hover': { backgroundColor: '#560bad' },
              py: 1.4,
              fontSize: '16px',
              textTransform: 'none',
            }}
          >
            Sign In
          </Button>

          {/* Google Sign In - Gray Border */}
          <Button
            fullWidth
            startIcon={<FcGoogle />}
            variant="outlined"
            sx={{
              mt: 1,
              backgroundColor: '#fff',
              color: '#646464',
              borderColor: '#646464',
              borderRadius: '12px',
              fontWeight: 500,
              textTransform: 'none',
              '&:hover': {
                borderColor: '#646464',
                backgroundColor: '#f1f1f1',
              },
            }}
          >
            Sign in with Google
          </Button>

          <Typography textAlign="center" fontSize="14px" mt={1}>
            Don’t have an account?{' '}
            <Link to="/signup" style={{ color: '#f72585', fontWeight: '500' }}>
              Sign up for free!
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default LoginMain;
