// import React from "react";
// import { Box } from "@mui/material";
// import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

// const styles = {
//   gridContainer: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "center",   
//     gap: "20px",               
//     margin: "30px auto",        
//     width: "1000px",            
//     alignItems: "center",
//   },
//   productCard: {
//     width: "300px",             
//     boxShadow: "0 0 20px rgba(255, 60, 172, 0.2)",
//     borderRadius: "10px",
//     textAlign: "center",
//     padding: "15px",
//     backgroundColor: "#fff",
//   },
//   productImg: {
//     width: "220px",            
//     height: "220px",
//     objectFit: "cover",
//     borderRadius: "50%",        
//     margin: "0 auto 10px",
//     display: "block",
//   },
//   title: {
//     margin: "5px 0",
//     color: "#333",
//     fontFamily: "Archivo",
//     fontWeight: 700,
//     textAlign: "center",
//     fontSize: "20px",
//   },
//   role: {
//     fontSize: "16px",
//     color: "#888",
//     marginBottom: "15px",
//     fontWeight: 500,
//   },
// };

// const TeamGrid = ({ data = [] }) => {
//   return (
//     <Box sx={styles.gridContainer}>
//       {data.map((item) => (
//         <Box key={item.id} sx={styles.productCard}>
//           <img src={item.avatar} alt={item.name} style={styles.productImg} />
//           <h3 style={styles.title}>{item.name}</h3>
//           <p style={styles.role}>{item.role}</p>

//           <Box sx={{ display: "flex", justifyContent: "center", gap: "15px" }}>
//             <FaFacebook size={24} style={{ color: "#F83D8E" }} />
//             <FaInstagram size={24} style={{ color: "#F83D8E" }} />
//             <FaYoutube size={26} style={{ color: "#F83D8E" }} />
//           </Box>
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default TeamGrid;


import React from "react";
import { Box, Grid } from "@mui/material";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const styles = {
  productCard: {
    boxShadow: "0 0 20px rgba(255, 60, 172, 0.2)",
    borderRadius: "10px",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#fff",
    height: "100%", // ensures consistent card height
  },
  productImg: {
    width: "180px",
    height: "180px",
    objectFit: "cover",
    borderRadius: "50%",
    margin: "0 auto 15px",
    display: "block",
  },
  title: {
    margin: "5px 0",
    color: "#333",
    fontFamily: "Archivo",
    fontWeight: 700,
    fontSize: "20px",
  },
  role: {
    fontSize: "16px",
    color: "#888",
    marginBottom: "15px",
    fontWeight: 500,
  },
};

const TeamGrid = ({ data = [] }) => {
  return (
    <Box sx={{ flexGrow: 1, px: { xs: 2, sm: 4, md: 8 }, mt: 4 }}>
      <Grid container spacing={3} justifyContent="center">
        {data.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Box sx={styles.productCard}>
              <img src={item.avatar} alt={item.name} style={styles.productImg} />
              <h3 style={styles.title}>{item.name}</h3>
              <p style={styles.role}>{item.role}</p>
              <Box sx={{ display: "flex", justifyContent: "center", gap: "15px" }}>
                <FaFacebook size={24} style={{ color: "#F83D8E" }} />
                <FaInstagram size={24} style={{ color: "#F83D8E" }} />
                <FaYoutube size={26} style={{ color: "#F83D8E" }} />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamGrid;
