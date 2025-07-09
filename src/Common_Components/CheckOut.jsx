// import React from "react";
// import { Box } from "@mui/material";
// import {
//   alignItems,
//   color,
//   display,
//   fontFamily,
//   fontSize,
//   fontWeight,
//   justifyContent,
//   lineHeight,
// } from "@mui/system";
// import Button from "./Button";
// import { ColorPalette } from "../Assets/Colors";
// import PagesHeader from "./PagesHeader";
// import DropDown from "../Common_Components/DropDown";
// import RadioGroup from "@mui/material/RadioGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Radio from "@mui/material/Radio";
// import Image from "../Assets/Images/Image";
// import { FaMoneyBillWave } from "react-icons/fa";

// const styles = {
//   rowBox: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "flex-start",
//     gap: "30px",
//     marginBottom: "30px",
//   },
//   title: {
//     color: "#646464",
//     fontWeight: 540,
//     fontFamily: "Archivo",
//     fontSize: "18px",
//     lineHeight: "16px",
//     padding: "9px",
//   },
//   inputBox: {
//     height: "42px",
//     width: "300px",
//     borderRadius: "20px",
//     border: "1px solid #E3E4E5",
//     "&:hover": {
//       borderColor: ColorPalette.pink,
//     },
//   },
// };

// const CheckOut = () => {
//   return (
//     <Box>
//       <PagesHeader title={"CheckOut"} path={"CheckOut"} />
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           padding: "50px",
         
//         }}
//       >
//         <Box
//           sx={{
//             // width: "70%",
//             display: "flex",
//             alignItems: "flex-start",
//             justifyContent: "center",
//             flexDirection: "column",
//             // border: "1px solid #646464",
//              boxShadow: "0 0 15px rgba(0,0,0,0.2)",
//             padding: "20px",
//           }}
//         >
//           <Box
//             sx={{
//               fontFamily: "Archivo",
//               fontWeight: 550,
//               paddingBottom: "10px",
//               fontSize: "20px",
//             }}
//           >
//             Billing Address
//           </Box>
//           <Box sx={styles.rowBox}>
//             <Box>
//               <span style={styles.title}>First Name</span> <br></br>{" "}
//               <Box sx={styles.inputBox}></Box>
//             </Box>
//             <Box>
//               <span style={styles.title}>Last Name</span> <br></br>{" "}
//               <Box sx={styles.inputBox}></Box>
//             </Box>
//           </Box>
//           <Box sx={styles.rowBox}>
//             <Box>
//               <span style={styles.title}>Email address</span> <br></br>{" "}
//               <Box sx={styles.inputBox}></Box>
//             </Box>
//             <Box>
//               <span style={styles.title}>State</span> <br></br>{" "}
//               <Box sx={styles.inputBox}>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "flex-start",
//                     marginLeft: "5%",
//                     marginTop: "2.5%",
//                   }}
//                 >
//                   <DropDown
//                     title="Select State"
//                     options={[
//                       { label: "Home 2", href: "/home2" },
//                       { label: "Home 3", href: "/home3" },
//                     ]}
//                   />
//                 </Box>
//               </Box>
//             </Box>
//           </Box>
//           <Box sx={styles.rowBox}>
//             <Box>
//               <span style={styles.title}>City</span> <br></br>{" "}
//               <Box sx={styles.inputBox}>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "flex-start",
//                     marginLeft: "5%",
//                     marginTop: "2.5%",
//                   }}
//                 >
//                   <DropDown
//                     title="Select City"
//                     options={[
//                       { label: "Home 2", href: "/home2" },
//                       { label: "Home 3", href: "/home3" },
//                     ]}
//                   />
//                 </Box>
//               </Box>
//             </Box>
//             <Box>
//               <span style={styles.title}>First Name</span> <br></br>{" "}
//               <Box sx={styles.inputBox}></Box>
//             </Box>
//           </Box>
//           <Box
//             sx={{
//               fontFamily: "Archivo",
//               fontWeight: 550,
//               paddingBottom: "10px",
//               fontSize: "20px",
//             }}
//           >
//             Payment Method
//           </Box>
//           <Box sx={styles.rowBox}>
//              <Box
//               sx={{
//                 ...styles.inputBox,
//                 width: "630px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 padding: "0 20px",
//               }}
//             >
//               <FormControlLabel
//                 control={<Radio color="primary" />}
//                 label="Credit Card"
//                 sx={{
//                   color: "#333",
//                   fontFamily: "Archivo",
//                   fontSize: "15px",
//                   marginLeft: 0,
//                 }}
//               />
              
//               <Box>
//                 <img
//                   src={Image.paymentCards}
//                   alt="Cards"
//                   style={{ height: "26px", objectFit: "contain" }}
//                 />
//               </Box>
//             </Box>
//           </Box>
//           <Box sx={styles.rowBox}>
//             <Box
//               sx={{
//                 ...styles.inputBox,
//                 width: "630px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 padding: "0 20px",
//               }}
//             >
//               <FormControlLabel
//                 control={<Radio color="primary" />}
//                 label="Cash On Delivery"
//                 sx={{
//                   color: "#333",
//                   fontFamily: "Archivo",
//                   fontSize: "15px",
//                   marginLeft: 0,
//                 }}
//               />
//               <Box>
//                 <FaMoneyBillWave size={20} />
//               </Box>
//             </Box>
//           </Box>

//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               width: "100%",
//             }}
//           >
//             <FormControlLabel
//               control={<Radio color="primary" />}
//               label={
//                 <span>
//                   I agree to the{" "}
//                   <a
//                     href="/privacy"
//                     target="_blank"
//                     style={{ color: ColorPalette.pink }}
//                   >
//                     privacy policy
//                   </a>
//                 </span>
//               }
//               sx={{
//                 color: "#333",
//                 fontFamily: "Arial, sans-serif",
//                 fontSize: "14px",
//                 textAlign: "center",
//               }}
//             />
//           </Box>
//           <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', width:'100%', marginTop:'2%'}}>
//           <Button text={"Place Order Now"} width={"95%"} height={52} bcolor={ColorPalette.pink} onClick={"#"}></Button></Box>
//         </Box>

        
//       </Box>
//     </Box>
//   );
// };

// export default CheckOut;

import React from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import PagesHeader from "./PagesHeader";
import DropDown from "../Common_Components/DropDown";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Button from "./Button";
import Image from "../Assets/Images/Image";
import { FaMoneyBillWave } from "react-icons/fa";
import { ColorPalette } from "../Assets/Colors";

const styles = {
  rowBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "30px",
    marginBottom: "30px",
  },
  title: {
    color: "#646464",
    fontWeight: 540,
    fontFamily: "Archivo",
    fontSize: "18px",
    lineHeight: "16px",
    padding: "9px",
  },
  inputBox: {
    height: "42px",
    width: "300px",
    borderRadius: "20px",
    border: "1px solid #E3E4E5",
    "&:hover": {
      borderColor: ColorPalette.pink,
    },
  },
  summaryBox: {
    width: "350px",
    borderRadius: "16px",
    padding: "20px",
    fontFamily: "Archivo",
    backgroundColor: "#fff",
    boxShadow: "0 0 15px rgba(0,0,0,0.2)",
  },
};

const CheckOut = () => {
  const cartItems = useSelector((state) => state.products.cart);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Box>
      <PagesHeader title={"CheckOut"} path={"CheckOut"} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "40px",
          padding: "50px",
        }}
      >
        {/* Form */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 0 15px rgba(0,0,0,0.2)",
            padding: "20px",
            borderRadius:'20px'
          }}
        >
          <Box sx={{ fontWeight: 550, fontSize: "20px", marginBottom: 2 }}>
            Billing Address
          </Box>

          <Box sx={styles.rowBox}>
            <Box>
              <span style={styles.title}>First Name</span>
              <Box sx={styles.inputBox}></Box>
            </Box>
            <Box>
              <span style={styles.title}>Last Name</span>
              <Box sx={styles.inputBox}></Box>
            </Box>
          </Box>

          <Box sx={styles.rowBox}>
            <Box>
              <span style={styles.title}>Email address</span>
              <Box sx={styles.inputBox}></Box>
            </Box>
            <Box>
              <span style={styles.title}>State</span>
              <Box sx={styles.inputBox}>
                <Box sx={{ margin: "8px 16px" }}>
                  <DropDown
                    title="Select State"
                    options={[
                      { label: "Home 2", href: "/home2" },
                      { label: "Home 3", href: "/home3" },
                    ]}
                  />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={styles.rowBox}>
            <Box>
              <span style={styles.title}>City</span>
              <Box sx={styles.inputBox}>
                <Box sx={{ margin: "8px 16px" }}>
                  <DropDown
                    title="Select City"
                    options={[
                      { label: "Home 2", href: "/home2" },
                      { label: "Home 3", href: "/home3" },
                    ]}
                  />
                </Box>
              </Box>
            </Box>
            <Box>
              <span style={styles.title}>Pin Code</span>
              <Box sx={styles.inputBox}></Box>
            </Box>
          </Box>

          {/* Payment Method */}
          <Box sx={{ fontWeight: 550, fontSize: "20px", marginBottom: 1 }}>
            Payment Method
          </Box>

          <Box sx={styles.rowBox}>
            <Box
              sx={{
                ...styles.inputBox,
                width: "630px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 20px",
              }}
            >
              <FormControlLabel
                control={<Radio color="primary" />}
                label="Credit Card"
              />
              <Box>
                <img
                  src={Image.paymentCards}
                  alt="Cards"
                  style={{ height: "26px", objectFit: "contain" }}
                />
              </Box>
            </Box>
          </Box>

          <Box sx={styles.rowBox}>
            <Box
              sx={{
                ...styles.inputBox,
                width: "630px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 20px",
              }}
            >
              <FormControlLabel
                control={<Radio color="primary" />}
                label="Cash On Delivery"
              />
              <Box>
                <FaMoneyBillWave size={20} />
              </Box>
            </Box>
          </Box>

       
          <Box sx={{ textAlign: "center", width: "100%" }}>
            <FormControlLabel
              control={<Radio color="primary" />}
              label={
                <span>
                  I agree to the{" "}
                  <a href="/privacy" style={{ color: ColorPalette.pink }}>
                    privacy policy
                  </a>
                </span>
              }
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              marginTop: "20px",
            }}
          >
            <Button
              text={"Place Order Now"}
              width={"95%"}
              height={52}
              bcolor={ColorPalette.pink}
              onClick={"#"}
            />
          </Box>
        </Box>

        {/* Right Cart Summary */}
        <Box sx={styles.summaryBox}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              fontWeight: 700,
              borderBottom: "1px solid #eee",
              paddingBottom: "10px",
              marginBottom: "15px",
              fontSize: "16px",
               
            }}
          >
            <Box>Items</Box>
            <Box>Price</Box>
          </Box>

          {cartItems.map((item, index) => (
            <Box key={index} sx={{ marginBottom: "18px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: 700,
                }}
              >
                <Box>
                  {item.quantity} x {item.name}
                </Box>
                <Box>${(item.price * item.quantity).toFixed(2)}</Box>
              </Box>
                {/* <Box sx={{ fontSize: "14px", color: "#787878", marginTop: "4px" }}>
                    {item.description}
                </Box> */}
              <Box
                sx={{ borderBottom: "1px solid #eee", marginTop: "12px" }}
              />
            </Box>
          ))}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              fontWeight: 700,
              marginTop: "20px",
              fontSize: "16px",
            }}
          >
            <Box>Grand Total</Box>
            <Box sx={{ color: "#FF5A8D" }}>${total.toFixed(2)}</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckOut;
