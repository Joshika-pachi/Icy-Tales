import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../Firebase";
import Images from "../../Assets/Images/Image";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function SignupMain() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google sign-in successful:", user);
    } catch (error) {
      console.error("Google sign-in error:", error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setMessage("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        createdAt: new Date(),
      });

      setMessage("Signup successful!");
      navigate("/");
    } catch (error) {
      console.error("Signup error:", error);
      setMessage(error.message || "Signup failed");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: '"Poppins", sans-serif',
        position: "relative",
        px: 2,
      }}
    >
      <Box
        component="img"
        src={Images.SideCircles}
        alt="circle"
        sx={{
          position: "absolute",
          top: "10%",
          left: "80px",
          width: "40px",
          zIndex: 1,
          scale: "1.5",
        }}
      />
      <Box
        component="img"
        src={Images.SideTraingle}
        alt="triangle"
        sx={{
          position: "absolute",
          top: "45%",
          right: "10%",
          width: "30px",
          zIndex: 1,
          scale: "1.5",
        }}
      />

      <Box
        sx={{
          maxWidth: "1000px",
          width: "100%",
          display: "flex",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.1)",
          flexDirection: { xs: "column", md: "row" },
          position: "relative",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            flex: 1,
            background: "linear-gradient(to bottom right, #fdf0f3, #eefaff)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          <Box
            component="img"
            src={Images.loginIce}
            alt="ice cream"
            sx={{
              width: "120%",
              maxHeight: "500px",
              transform: "rotate(35deg) scale(1.2)",
              objectFit: "contain",
              display: { xs: "none", md: "block" },
            }}
          />
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            flex: 1,
            p: { xs: 4, sm: 6 },
            background: "linear-gradient(to bottom right, #fdf0f3, #eefaff)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
            position: "relative",
          }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            fontFamily="'Berkshire Swash', cursive"
            sx={{ fontSize: "36px" }}
          >
            Create <span style={{ color: "#f72585" }}>Account</span>
          </Typography>

          <Typography
            textAlign="center"
            fontSize="14px"
            color="#666"
            sx={{ mb: 2 }}
          >
            Join us by creating your account
          </Typography>

          <Box>
            <Typography sx={{ mb: 0.5, fontWeight: 500, fontSize: "14px" }}>
              Name
            </Typography>
            <TextField
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              variant="outlined"
              placeholder="Enter your name"
              sx={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                "& .MuiOutlinedInput-root": { borderRadius: "10px" },
              }}
            />
          </Box>

          <Box>
            <Typography sx={{ mb: 0.5, fontWeight: 500, fontSize: "14px" }}>
              Email
            </Typography>
            <TextField
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              variant="outlined"
              placeholder="Enter your email"
              sx={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                "& .MuiOutlinedInput-root": { borderRadius: "10px" },
              }}
            />
          </Box>

          <Box>
            <Typography sx={{ mb: 0.5, fontWeight: 500, fontSize: "14px" }}>
              Password
            </Typography>
            <TextField
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              variant="outlined"
              placeholder="********"
              sx={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                "& .MuiOutlinedInput-root": { borderRadius: "10px" },
              }}
            />
          </Box>

          <Box>
            <Typography sx={{ mb: 0.5, fontWeight: 500, fontSize: "14px" }}>
              Confirm Password
            </Typography>
            <TextField
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              fullWidth
              variant="outlined"
              placeholder="********"
              sx={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                "& .MuiOutlinedInput-root": { borderRadius: "10px" },
              }}
            />
          </Box>

          <FormControlLabel
            control={<Checkbox size="small" />}
            label="I agree to the Terms and Privacy Policy"
            sx={{ fontSize: "14px" }}
          />

          {message && (
            <Typography
              color={message.includes("success") ? "green" : "error"}
              textAlign="center"
            >
              {message}
            </Typography>
          )}

          <Button
            type="submit"
            fullWidth
            sx={{
              mt: 1,
              backgroundColor: "#7209b7",
              color: "white",
              fontWeight: 600,
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              "&:hover": { backgroundColor: "#560bad" },
              py: 1.4,
              fontSize: "16px",
              textTransform: "none",
            }}
          >
            Sign Up
          </Button>

          <Button
            fullWidth
            startIcon={<FcGoogle />}
            variant="outlined"
            sx={{
              mt: 1,
              backgroundColor: "#fff",
              color: "#646464",
              borderColor: "#646464",
              borderRadius: "12px",
              fontWeight: 500,
              textTransform: "none",
              "&:hover": { borderColor: "#646464", backgroundColor: "#f1f1f1" },
            }}
            onClick={handleGoogleSignup}
          >
            Sign up with Google
          </Button>

          <Typography textAlign="center" fontSize="14px" mt={1}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#f72585", fontWeight: "500" }}>
              Log in here
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default SignupMain;
