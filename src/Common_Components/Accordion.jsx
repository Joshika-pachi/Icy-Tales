// import React from "react";
// import {
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// const Accordion = ({ question, answer }) => {
//   return (
//     <Accordion
//       sx={{
//         marginBottom: 2,
//         borderRadius: 2,
//         boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//         "&:before": { display: "none" },
//       }}
//     >
//       <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//         <Typography
//           sx={{
//             fontWeight: "bold",
//             fontSize: "18px",
//             fontFamily: "Archivo",
//           }}
//         >
//           {question}
//         </Typography>
//       </AccordionSummary>
//       <AccordionDetails>
//         <Typography
//           sx={{
//             fontSize: "16px",
//             fontFamily: "Archivo",
//             color: "#555",
//           }}
//         >
//           {answer}
//         </Typography>
//       </AccordionDetails>
//     </Accordion>
//   );
// };

// export default Accordions;

import React, { useState } from "react";
import {
  Box,
  Typography,
  Divider,
  Paper,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const faqs = [
  {
    question: "Who is Harshitha?",
    answer: "Funky Monkey",
  },
  {
    question: "Who is Mokshitha?",
    answer: "Honky Donkey",
  },
  {
    question: "Who is Varshini?",
    answer: "Perky Turkey",
  },
];

export default function AccordionExpandDefault() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <Box
      sx={{
        height: 250,
        border: "2px solid #ccc",
        borderRadius: 3,
        display: "flex",
        justifyContent: selectedIndex === null ? "center" : "flex-start",
        alignItems: selectedIndex === null ? "center" : "stretch",
        transition: "all 0.3s ease",
        backgroundColor: "#f0f0f0",
      }}
    >
      {/* Question List */}
      <Box
        sx={{
          width: selectedIndex === null ? "100%" : "35%",
          p: 2,
          borderRight: selectedIndex !== null ? "1px solid #ddd" : "none",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: selectedIndex === null ? "center" : "flex-start",
          transition: "width 0.3s ease",
        }}
      >
        {faqs.map((faq, index) => (
          <Paper
            key={index}
            elevation={selectedIndex === index ? 6 : 2}
            sx={{
              width: selectedIndex === null ? "60%" : "100%",
              cursor: "pointer",
              p: 2,
              bgcolor: selectedIndex === index ? "#d0ebff" : "#d9e3f0",
              "&:hover": {
                bgcolor: "#bbdefb",
              },
              transition: "all 0.3s ease",
            }}
            onClick={() => setSelectedIndex(index)}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="body1" fontWeight="bold" color="black">
                {faq.question}
              </Typography>
              <ArrowForwardIosIcon
                fontSize="small"
                sx={{
                  ml: 1,
                  transition: "transform 0.3s ease",
                  transform:
                    selectedIndex === index ? "rotate(90deg)" : "rotate(0deg)",
                  color: selectedIndex === index ? "#1976d2" : "#555",
                }}
              />
            </Box>
          </Paper>
        ))}
      </Box>

      {/* Answer Side */}
      {selectedIndex !== null && (
        <Box sx={{ width: "65%", p: 4 }}>
          <Typography variant="h5" fontWeight="bold" mb={1}>
            {faqs[selectedIndex].question}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body1" color="text.secondary">
            {faqs[selectedIndex].answer}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
