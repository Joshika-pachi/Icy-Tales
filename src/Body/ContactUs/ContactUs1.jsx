import React from "react";
import { Box } from "@mui/material";
import PagesHeader from "../../Common_Components/PagesHeader";
import {
  alignItems,
  display,
  flexDirection,
  justifyContent,
} from "@mui/system";
import { ColorPalette } from "../../Assets/Colors";
import Form from "../../Common_Components/Form"
import ContactInfoCards from "../../Common_Components/ContactInfoCards";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiMoneyCnyCircleLine } from "react-icons/ri";

const styles = {
  mainBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "50px",
    paddingBottom: "50px",
  },
  textBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px",
    flexDirection:{xs:'column', md:'row'}
  },
  headingLine: {
    fontFamily: "Berkshire Swash",
    fontWeight: 400,
    lineHeight: "80px",
    color: "#000",
    fontSize: "48px",
    lineHeight: "70px",
    textAlign: "center",
    marginBottom: "10px",
  },
  highlight: {
    color: "#FF3CAC",
    fontFamily: "Berkshire Swash",
  },
  tagline: {
    fontFamily: "Archivo",
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "30px",
    color: ColorPalette.tagline,
  },
};        

const ContactUs1 = () => {
  return (
    <Box>
      <Box>
        <PagesHeader title={"Contact Us"} path={"Contact Us"} />
      </Box>
      <Box sx={styles.mainBox}>
        <Box sx={styles.headingLine}>
          Get in <span style={styles.highlight}>Touch</span> With Us
        </Box>
        <Box sx={{ ...styles.tagline, textAlign: "center", marginTop: "5px" }}>
          Reach out and connect with us today for any inquiries or assistance!
        </Box>

        <Box sx={styles.textBox}>
          <Box>
             <ContactInfoCards icon={<CiDeliveryTruck size={35} style={{background:ColorPalette.violet, color:'white'}}/>} title={"Our Loaction"} tag={"121 King Street, Melbourne Victoria 3000 Australia"} boxbg={ColorPalette.violet} />
             <ContactInfoCards icon={<CiDeliveryTruck size={35} style={{background:ColorPalette.violet, color:'white'}}/>} title={"Our Loaction"} tag={"121 King Street, Melbourne Victoria 3000 Australia"} boxbg={ColorPalette.violet} />
             <ContactInfoCards icon={<CiDeliveryTruck size={35} style={{background:ColorPalette.violet, color:'white'}}/>} title={"Our Loaction"} tag={"121 King Street, Melbourne Victoria 3000 Australia"} boxbg={ColorPalette.violet} />
            
          </Box>
          <Box sx={{paddingTop:'20px',paddingBottom:'20px'}}>
           <Form />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs1;

