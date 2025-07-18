import React, { useState } from 'react';
import {
  Box, Button, TextField, Typography, Checkbox, FormControlLabel
} from '@mui/material';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db} from "../../Firebase"; 
import Images from '../../Assets/Images/Image';
import { useDispatch } from 'react-redux';
import { setCartFromFirebase } from "../../Redux/Reducer";
import { doc, getDoc } from 'firebase/firestore';

function LoginMain() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();


  const dispatch = useDispatch();

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    setMessage('Please fill in all fields');
    return;
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    setMessage('Login successful!');

    navigate('/');
  } catch (error) {
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
          scale: '1.5',
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
          scale: '1.5',
        }}
      />

      
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
              display:{xs:'none', md:"block"}
            }}
          />
        </Box>

       
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
            Login
          </Button>

        
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