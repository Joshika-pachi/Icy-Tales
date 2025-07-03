import React from "react";
import { Box } from "@mui/material";
import { ColorPalette } from "../../../Assets/Colors";
import Accordion from "../../../Common_Components/Accordion";

const styles = {
  mainBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "50px",
    paddingBottom: "50px",
    background: ColorPalette.gradient,
  },
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontWeight: 500,
    color: "#000",
    fontSize: { xs: "28px", sm: "36px", md: "50px" },
    lineHeight: { xs: "35px", sm: "45px", md: "70px" },
    textAlign: { xs: "center", md: "center" },
  },
  highlight: {
    color: "#FF3CAC",
    fontFamily: "Berkshire Swash",
  },
  tagline: {
    fontFamily: "Archivo",
    fontSize: { xs: "14px", sm: "16px", md: "20px" },
    fontWeight: 300,
    lineHeight: { xs: "22px", sm: "25px", md: "30px" },
    textAlign: { xs: "center", md: "center" },
    marginTop: "10px",
    color: "#646464",
  },
};


  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy on all unused products with original packaging.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship worldwide. Shipping charges may apply based on your location.",
    },
    {
      question: "How do I track my order?",
      answer:
        "You will receive a tracking link via email once your order ships.",
    },
    {
      question: "How can I contact customer service?",
      answer:
        "You can reach our support team at support@example.com or call 1-800-123-4567.",
    },
  ];


const Home3Comp8 = () => {
  return (
    <Box>
      <Box sx={styles.mainBox}>
        <Box>
          <Box sx={styles.headingLine}>
            Frequently Asked <span style={styles.highlight}> Questions</span>
          </Box>
          <Box sx={styles.tagline}>
            Some of the queries you want to know about us.
          </Box>
        </Box>
        <Box><Accordion /></Box>
        
          {/* <Box style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", marginBottom: "30px" }}>FAQs</h2>

            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </Box> */}
      </Box>
    </Box>
  );
};

export default Home3Comp8;
