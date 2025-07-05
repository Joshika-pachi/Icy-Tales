// import { useState } from "react";

// export default function AccordionCard({ question, answer }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div style={{ border: "1px solid #ddd", borderRadius: 8, marginBottom: 10 }}>
//       <button
//         onClick={() => setOpen(!open)}
//         style={{
//           width: "100%",
//           textAlign: "left",
//           padding: "12px 16px",
//           fontSize: 16,
//           backgroundColor: "#f9f9f9",
//           border: "none",
//           borderRadius: "8px 8px 0 0",
//           cursor: "pointer",
//         }}
//       >
//         {question}
//       </button>
//       {open && (
//         <div style={{ padding: "12px 16px", backgroundColor: "#fff" }}>
//           {answer}
//         </div>
//       )}
//     </div>
//   );
// }


import { useState } from "react";

export default function AccordionCard({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: 12,
        marginBottom: 20,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)", // subtle shadow like your example
        overflow: "hidden",
        maxWidth: 600, // limits width like a neat card
        transition: "all 0.3s ease",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          textAlign: "left",
          padding: "16px 20px",
          fontSize: 18,
          fontFamily: "Archivo",
          fontWeight: 500,
          color: "#000",
          backgroundColor: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        {question}
      </button>
      {open && (
        <div
          style={{
            padding: "16px 20px",
            backgroundColor: "#f9f9f9",
            fontFamily: "Archivo",
            fontSize: 16,
            color: "#333",
            borderTop: "1px solid #e0e0e0",
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
}
