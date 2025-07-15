// import React from "react";
// import { Box } from "@mui/material";
// import { useSelector } from "react-redux";
// import PagesHeader from "./PagesHeader";
// import DropDown from "../Common_Components/DropDown";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Radio from "@mui/material/Radio";
// import Button from "./Button";
// import Image from "../Assets/Images/Image";
// import { FaMoneyBillWave } from "react-icons/fa";
// import { ColorPalette } from "../Assets/Colors";

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
//   summaryBox: {
//     width: "350px",
//     borderRadius: "16px",
//     padding: "20px",
//     fontFamily: "Archivo",
//     backgroundColor: "#fff",
//     boxShadow: "0 0 15px rgba(0,0,0,0.2)",
//   },
// };

// const CheckOut = () => {
//   const cartItems = useSelector((state) => state.products.cart);

//   const total = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <Box>
//       <PagesHeader title={"CheckOut"} path={"CheckOut"} />
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "flex-start",
//           gap: "40px",
//           padding: "50px",
//         }}
//       >
//         {/* Form */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             boxShadow: "0 0 15px rgba(0,0,0,0.2)",
//             padding: "20px",
//             borderRadius:'20px'
//           }}
//         >
//           <Box sx={{ fontWeight: 550, fontSize: "20px", marginBottom: 2 }}>
//             Billing Address
//           </Box>

//           <Box sx={styles.rowBox}>
//             <Box>
//               <span style={styles.title}>First Name</span>
//               <Box sx={styles.inputBox}></Box>
//             </Box>
//             <Box>
//               <span style={styles.title}>Last Name</span>
//               <Box sx={styles.inputBox}></Box>
//             </Box>
//           </Box>

//           <Box sx={styles.rowBox}>
//             <Box>
//               <span style={styles.title}>Email address</span>
//               <Box sx={styles.inputBox}></Box>
//             </Box>
//             <Box>
//               <span style={styles.title}>State</span>
//               <Box sx={styles.inputBox}>
//                 <Box sx={{ margin: "8px 16px" }}>
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
//               <span style={styles.title}>City</span>
//               <Box sx={styles.inputBox}>
//                 <Box sx={{ margin: "8px 16px" }}>
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
//               <span style={styles.title}>Pin Code</span>
//               <Box sx={styles.inputBox}></Box>
//             </Box>
//           </Box>

//           {/* Payment Method */}
//           <Box sx={{ fontWeight: 550, fontSize: "20px", marginBottom: 1 }}>
//             Payment Method
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
//                 label="Credit Card"
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
//               />
//               <Box>
//                 <FaMoneyBillWave size={20} />
//               </Box>
//             </Box>
//           </Box>

       
//           <Box sx={{ textAlign: "center", width: "100%" }}>
//             <FormControlLabel
//               control={<Radio color="primary" />}
//               label={
//                 <span>
//                   I agree to the{" "}
//                   <a href="/privacy" style={{ color: ColorPalette.pink }}>
//                     privacy policy
//                   </a>
//                 </span>
//               }
//             />
//           </Box>

//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               width: "100%",
//               marginTop: "20px",
//             }}
//           >
//             <Button
//               text={"Place Order Now"}
//               width={"95%"}
//               height={52}
//               bcolor={ColorPalette.pink}
//               onClick={"#"}
//             />
//           </Box>
//         </Box>

//         {/* Right Cart Summary */}
//         <Box sx={styles.summaryBox}>
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               fontWeight: 700,
//               borderBottom: "1px solid #eee",
//               paddingBottom: "10px",
//               marginBottom: "15px",
//               fontSize: "16px",
               
//             }}
//           >
//             <Box>Items</Box>
//             <Box>Price</Box>
//           </Box>

//           {cartItems.map((item, index) => (
//             <Box key={index} sx={{ marginBottom: "18px" }}>
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   fontWeight: 700,
//                 }}
//               >
//                 <Box>
//                   {item.quantity} x {item.name}
//                 </Box>
//                 <Box>${(item.price * item.quantity).toFixed(2)}</Box>
//               </Box>
//                 {/* <Box sx={{ fontSize: "14px", color: "#787878", marginTop: "4px" }}>
//                     {item.description}
//                 </Box> */}
//               <Box
//                 sx={{ borderBottom: "1px solid #eee", marginTop: "12px" }}
//               />
//             </Box>
//           ))}

//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               fontWeight: 700,
//               marginTop: "20px",
//               fontSize: "16px",
//             }}
//           >
//             <Box>Grand Total</Box>
//             <Box sx={{ color: "#FF5A8D" }}>${total.toFixed(2)}</Box>
//           </Box>
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
  container: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "center",
    alignItems: "flex-start",
    gap: { xs: "30px", md: "40px" },
    padding: { xs: "20px", md: "50px" },
  },
  formBox: {
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 0 15px rgba(0,0,0,0.2)",
    padding: "20px",
    borderRadius: "20px",
    width: { xs: "100%", md: "65%" },
  },
  rowBox: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "center",
    alignItems: "flex-start",
    gap: { xs: "15px", sm: "30px" },
    marginBottom: "30px",
  },
  inputTitle: {
    color: "#646464",
    fontWeight: 540,
    fontFamily: "Archivo",
    fontSize: "18px",
    lineHeight: "16px",
    padding: "9px 9px 0 0",
  },
  inputBox: {
    height: "42px",
    width: { xs: "100%", sm: "300px" },
    borderRadius: "20px",
    border: "1px solid #E3E4E5",
    "&:hover": {
      borderColor: ColorPalette.pink,
    },
  },
  wideInputBox: {
    height: "42px",
    width: "100%",
    borderRadius: "20px",
    border: "1px solid #E3E4E5",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    "&:hover": {
      borderColor: ColorPalette.pink,
    },
  },
  summaryBox: {
    width: { xs: "100%", md: "350px" },
    borderRadius: "16px",
    padding: "20px",
    fontFamily: "Archivo",
    backgroundColor: "#fff",
    boxShadow: "0 0 15px rgba(0,0,0,0.2)",
  },
  summaryHeader: {
    display: "flex",
    justifyContent: "space-between",
    fontWeight: 700,
    borderBottom: "1px solid #eee",
    paddingBottom: "10px",
    marginBottom: "15px",
    fontSize: "16px",
  },
  summaryRow: {
    display: "flex",
    justifyContent: "space-between",
    fontWeight: 700,
    marginTop: "20px",
    fontSize: "16px",
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
      <Box sx={styles.container}>
        <Box sx={styles.summaryBox}>
          <Box sx={styles.summaryHeader}>
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
              <Box
                sx={{ borderBottom: "1px solid #eee", marginTop: "12px" }}
              />
            </Box>
          ))}

          <Box sx={styles.summaryRow}>
            <Box>Grand Total</Box>
            <Box sx={{ color: "#FF5A8D" }}>${total.toFixed(2)}</Box>
          </Box>
        </Box>
        {/* Billing Form */}
        <Box sx={styles.formBox}>
          <Box sx={{ fontWeight: 550, fontSize: "20px", marginBottom: 2 }}>
            Billing Address
          </Box>

          <Box sx={styles.rowBox}>
            <Box sx={{ width: "100%" }}>
              <span style={styles.inputTitle}>First Name</span>
              <Box sx={styles.inputBox}></Box>
            </Box>
            <Box sx={{ width: "100%" }}>
              <span style={styles.inputTitle}>Last Name</span>
              <Box sx={styles.inputBox}></Box>
            </Box>
          </Box>

          <Box sx={styles.rowBox}>
            <Box sx={{ width: "100%" }}>
              <span style={styles.inputTitle}>Email address</span>
              <Box sx={styles.inputBox}></Box>
            </Box>
            <Box sx={{ width: "100%" }}>
              <span style={styles.inputTitle}>State</span>
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
            <Box sx={{ width: "100%" }}>
              <span style={styles.inputTitle}>City</span>
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
            <Box sx={{ width: "100%" }}>
              <span style={styles.inputTitle}>Pin Code</span>
              <Box sx={styles.inputBox}></Box>
            </Box>
          </Box>

          <Box sx={{ fontWeight: 550, fontSize: "20px", marginBottom: 1 }}>
            Payment Method
          </Box>

          <Box sx={styles.rowBox}>
            <Box sx={styles.wideInputBox}>
              <FormControlLabel
                control={<Radio color="primary" />}
                label="Credit Card"
              />
              <img
                src={Image.paymentCards}
                alt="Cards"
                style={{ height: "26px", objectFit: "contain" }}
              />
            </Box>
          </Box>

          <Box sx={styles.rowBox}>
            <Box sx={styles.wideInputBox}>
              <FormControlLabel
                control={<Radio color="primary" />}
                label="Cash On Delivery"
              />
              <FaMoneyBillWave size={20} />
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

        {/* Cart Summary */}
        
      </Box>
    </Box>
  );
};

export default CheckOut;
