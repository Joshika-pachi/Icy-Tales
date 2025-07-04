import React from "react";
import { Box } from "@mui/material";
import PagesHeader from "../../Common_Components/PagesHeader";
import { padding } from "@mui/system";

const styles = {
  mainBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "60%",
    margin: "0 auto",
    paddingTop: "30px",
    paddingBottom: "30px",
  },
  question: {
    color: "#212529",
    fontFamily: "Archivo",
    fontSize: "22px",
    fontWeight: 700, // make it bold
    lineHeight: "28px",
    margin: "20px 0 5px 0",
  },
  answer: {
    color: "#646464",
    fontFamily: "Archivo",
    fontSize: "17px",
    fontWeight: 400,
    lineHeight: "26px",
    marginBottom: "10px",
  },
};

const pp = [
  {
    question: "1. Use of Website:",
    answer:
      "Your use of our website is subject to these Terms and Conditions. You must be at least 18 years old to use our services.",
  },
  {
    question: "2. User Account:",
    answer:
      "You are responsible for maintaining the confidentiality of your account and password. You agree to provide accurate and complete information when creating an account.",
  },
  {
    question: "3. Intellectual Property:",
    answer:
      "All content on this website, including text, graphics, logos, and images, is the property of [Your Online Education Platform] and protected by copyright laws. You may not reproduce, distribute, or transmit any content without prior written consent.",
  },
  {
    question: "4. Payment and Billing:",
    answer:
      "Payment for our services is required in advance. All fees are non-refundable.",
  },
  {
    question: "5. Termination:",
    answer:
      "We reserve the right to suspend or terminate your account at any time for violation of these Terms and Conditions. Please review our full Terms and Conditions for more detailed information.You have the right to access, update, or delete your personal information at any time. You can opt out of receiving promotional emails by following the instructions provided in the email. By using our website, you consent to the terms of this Privacy Policy. If you have any questions or concerns, please contact us.",
  },
];

const TermsConditions = () => {
  return (
    <Box>
      <PagesHeader title="Terms & Conditions" path="Terms & Conditions" />
      <Box sx={styles.mainBox}>
        <Box sx={{ ...styles.question, fontSize: "30px" }}>
          Terms and Conditions :
        </Box>
        <Box sx={styles.answer}>
          Welcome to [Your Online Education Platform]! Before accessing or using
          our website, please read these Terms and Conditions carefully. By
          accessing or using any part of the site, you agree to be bound by
          these Terms and Conditions.
        </Box>
        {pp.map((item, index) => (
          <Box key={index}>
            <Box sx={styles.question}>{item.question}</Box>
            <Box sx={styles.answer}>{item.answer}</Box>
          </Box>
        ))}
        <Box sx={{...styles.answer, marginTop:'10px', fontWeight:'600'}}>Please review our full Terms and Conditions for more detailed information.</Box>
      </Box>
    </Box>
  );
};

export default TermsConditions;
