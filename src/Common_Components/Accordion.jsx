// import { useState } from "react";

// function AccordionItem({ title, children }) {
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
//           backgroundColor: "#f2f2f2",
//           border: "none",
//           borderRadius: "8px 8px 0 0",
//           cursor: "pointer",
//         }}
//       >
//         {title}
//       </button>
//       {open && (
//         <div style={{ padding: "12px 16px", backgroundColor: "#fff" }}>
//           {children}
//         </div>
//       )}
//     </div>
//   );
// }

// export default function Accordion() {
//   return (
//     <div style={{ maxWidth: 600, margin: "40px auto", fontFamily: "sans-serif" }}>
//       <h1>React 19 Accordion</h1>
//       <AccordionItem title="What is React 19?">
//         React 19 is a major update to React introducing the React Compiler, improved SSR, and more.
//       </AccordionItem>
//       <AccordionItem title="Is this compatible?">
//         Yes! This accordion uses only basic React state/hooks, fully compatible with React 19.
//       </AccordionItem>
//       <AccordionItem title="How can I customize it?">
//         You can edit styles or add animations easily.
//       </AccordionItem>
//     </div>
//   );
// }


import { useState } from "react";

export default function AccordionCard({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 8, marginBottom: 10 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          textAlign: "left",
          padding: "12px 16px",
          fontSize: 16,
          backgroundColor: "#f9f9f9",
          border: "none",
          borderRadius: "8px 8px 0 0",
          cursor: "pointer",
        }}
      >
        {question}
      </button>
      {open && (
        <div style={{ padding: "12px 16px", backgroundColor: "#fff" }}>
          {answer}
        </div>
      )}
    </div>
  );
}
