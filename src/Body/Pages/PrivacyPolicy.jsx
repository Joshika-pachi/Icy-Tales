import React from 'react';
import { Box } from '@mui/material';
import PagesHeader from "../../Common_Components/PagesHeader";
import { padding } from '@mui/system';

const styles = {
  mainBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '60%',
    margin: '0 auto',
    paddingTop:'30px',
    paddingBottom:'30px'
  },
  question: {
    color: '#212529',
    fontFamily: 'Archivo',
    fontSize: '22px',
    fontWeight: 700, 
    lineHeight: '28px',
    margin: '20px 0 5px 0',
  },
  answer: {
    color: '#646464',
    fontFamily: 'Archivo',
    fontSize: '17px',
    fontWeight: 400,
    lineHeight: '26px',
    marginBottom: '10px',
  },
};

const pp = [
  {
    question: "1. Information We Collect:",
    answer:
      "We collect personal information such as your name, email address, and payment details when you create an account or make a purchase. We also collect usage data such as IP address, browser type, and pages visited.",
  },
  {
    question: "2. How We Use Your Information:",
    answer:
      "We use your personal information to provide and improve our services. Your information may also be used for communication purposes, such as sending newsletters or updates.",
  },
  {
    question: "3. Information Sharing:",
    answer:
      "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent. We may share your information with trusted third-party service providers who assist us in operating our website.",
  },
  {
    question: "4. Security:",
    answer:
      "We implement security measures to protect your personal information against unauthorized access or alteration. However, no method of transmission over the Internet or electronic storage is 100% secure.",
  },
  {
    question: "5. Your Choices:",
    answer:
      "You have the right to access, update, or delete your personal information at any time. You can opt out of receiving promotional emails by following the instructions provided in the email. By using our website, you consent to the terms of this Privacy Policy. If you have any questions or concerns, please contact us.",
  },
];

const PrivacyPolicy = () => {
  return (
    <Box >
      <PagesHeader title="Privacy Policy" path="Privacy Policy" />
      <Box sx={styles.mainBox}>
        <Box sx={{...styles.question, fontSize:'30px'}}>Privacy Policy :</Box>
        <Box sx={styles.answer}>Protecting your privacy is important to us. This Privacy Policy outlines how we collect, use, and disclose personal information when you use our website.</Box>
        {pp.map((item, index) => (
          <Box key={index}>
            <Box sx={styles.question}>{item.question}</Box>
            <Box sx={styles.answer}>{item.answer}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PrivacyPolicy;

