// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import PagesHeader from '../../Common_Components/PagesHeader';
// import { ColorPalette } from '../../Assets/Colors';
// import { useState } from 'react';

// export default function LabTabs() {
//   const [value, setValue] = React.useState('1');

//   const [tabIndex, setTabIndex] = useState("1");

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%', typography: 'body1' }}>
//         <PagesHeader title={"Blog"} path={"Blog"} />
//       <TabContext value={tabIndex}>
//         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//           <TabList onChange={(e, val) => setTabIndex(val)} aria-label="lab API tabs example" >
//             {/* <Tab label="Item One" value="1" sx={{borderRadius:'25px', backgroundColor: value==1?ColorPalette.pink: "black", color: value==1?"white": "black"}}/>  */}
//             <Tab label="Description" value="1" sx={{ color: tabIndex === "1" ? ColorPalette.pink : "inherit" }} />
//             <Tab label="Item Two" value="2" />
//             <Tab label="Item Three" value="3" />
//           </TabList>
//         </Box>
//         <TabPanel value="1">Item One</TabPanel>
//         <TabPanel value="2">Item Two</TabPanel>
//         <TabPanel value="3">Item Three</TabPanel>
//       </TabContext>
//     </Box>
//   );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PagesHeader from '../../Common_Components/PagesHeader';
import { ColorPalette } from '../../Assets/Colors';
import BlogData from "../../Data/BlogData"
import BlogCard from '../../Common_Components/BlogCard';

export default function LabTabs() {
  const [tabIndex, setTabIndex] = React.useState("0");
  const advices = BlogData.filter(item => item.category === "Advices");
  const announcements = BlogData.filter(item => item.category === "Announcements");
  const news = BlogData.filter(item => item.category === "News");
  const consultation = BlogData.filter(item => item.category === "Consultation");
  const development = BlogData.filter(item => item.category === "Development");
  console.log(advices)

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <PagesHeader title={"Blog"} path={"Blog"} />
      <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
     <TabContext value={tabIndex}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              onChange={(e, val) => setTabIndex(val)}
              aria-label="product tabs"
              textColor="inherit"
              TabIndicatorProps={{ style: {display: 'none' } }}
            >
              <Tab label="All" value="0" sx={{  borderRadius:'25px', color: tabIndex === "0" ? ColorPalette.white : "inherit",background: tabIndex === "0" ? ColorPalette.pink : "inherit", }} />
              <Tab label="Advices" value="1" sx={{  borderRadius:'25px', color: tabIndex === "1" ? ColorPalette.white : "inherit",background: tabIndex === "1" ? ColorPalette.pink : "inherit", }} />
              <Tab label="Announcements" value="2" sx={{  borderRadius:'25px', color: tabIndex === "2" ? ColorPalette.white : "inherit",background: tabIndex === "2" ? ColorPalette.pink : "inherit", }} />
              <Tab label="News" value="3" sx={{  borderRadius:'25px', color: tabIndex === "3" ? ColorPalette.white : "inherit",background: tabIndex === "3" ? ColorPalette.pink : "inherit", }} />
              <Tab label="Consulation" value="4" sx={{  borderRadius:'25px', color: tabIndex === "4" ? ColorPalette.white : "inherit",background: tabIndex === "4" ? ColorPalette.pink : "inherit", }} />
              <Tab label="Development" value="5" sx={{  borderRadius:'25px', color: tabIndex === "5" ? ColorPalette.white : "inherit",background: tabIndex === "5" ? ColorPalette.pink : "inherit", }} />
            </TabList>
          </Box>
          <TabPanel value="0">
            <BlogCard blogs={advices[0]} />
          </TabPanel>
          <TabPanel value="1">
            Item 2 
          </TabPanel>
          <TabPanel value="2">
            Item 3
          </TabPanel>
          <TabPanel value="3">
          item 4
          </TabPanel>
          <TabPanel value="4">
            item 5
          </TabPanel>
          <TabPanel value="5">
            item 6
          </TabPanel>
        </TabContext>
    </Box>
    </Box>
  );
}
