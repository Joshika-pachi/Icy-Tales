import React from 'react'
import { Box } from '@mui/material'
import ContactUs1 from './ContactUs1'
import ContactUs2 from "./ContactUs2"



const ContactUsMain = () => {
  return (
    <Box>
        {/* First Box  */}
        <Box>
            <ContactUs1 />
        </Box>
        {/* Second Box  */}
        <Box>
          <ContactUs2 />
        </Box>
      
    </Box>
  )
}

export default ContactUsMain
