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
import BlogCarousel from '../../Common_Components/Blogcarousel';

export default function LabTabs() {
  const [tabIndex, setTabIndex] = React.useState("0");
  const advices = BlogData.filter(item => item.category === "Advices");
  const announcements = BlogData.filter(item => item.category === "Announcements");
  const news = BlogData.filter(item => item.category === "News");
  const consultation = BlogData.filter(item => item.category === "Consultation");
  const development = BlogData.filter(item => item.category === "Development");
  console.log(advices)

  return (
    <Box sx={{ width: '100%', }}>
      <PagesHeader title={"Blog"} path={"Blog"} />
      <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', paddingTop:'5%'}}>
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
              <Tab label="Consultation" value="4" sx={{  borderRadius:'25px', color: tabIndex === "4" ? ColorPalette.white : "inherit",background: tabIndex === "4" ? ColorPalette.pink : "inherit", }} />
              <Tab label="Development" value="5" sx={{  borderRadius:'25px', color: tabIndex === "5" ? ColorPalette.white : "inherit",background: tabIndex === "5" ? ColorPalette.pink : "inherit", }} />
            </TabList>
          </Box>
          <TabPanel value="0">
            <Box sx={{ display:'flex', flexDirection:'row', flexWrap:'nowrap', alignItems:'center', justifyContent:'center', }}>
               <BlogCarousel data={BlogData}  cardNumber={3} cardWidth={"25%"}/>
               </Box>
          </TabPanel>
          <TabPanel value="1">
            <Box sx={{ display:'flex', flexDirection:'row', flexWrap:'nowrap', alignItems:'center', justifyContent:'center', }}>
               <BlogCarousel data={advices}  cardNumber={3} cardWidth={"25%"}/>
               </Box>
          </TabPanel>
          <TabPanel value="2">
            <Box sx={{ display:'flex', flexDirection:'row', flexWrap:'nowrap', alignItems:'center', justifyContent:'center', }}>
               <BlogCarousel data={announcements}   cardNumber={3} cardWidth={"25%"}/>
               </Box>
          </TabPanel>
          <TabPanel value="3">
            <Box sx={{ display:'flex', flexDirection:'row', flexWrap:'nowrap', alignItems:'center', justifyContent:'center', }}>
               <BlogCarousel data={news}  cardNumber={3} cardWidth={"25%"}/>
               </Box>
          </TabPanel>
          <TabPanel value="4">
          <Box sx={{ display:'flex', flexDirection:'row', flexWrap:'nowrap', alignItems:'center', justifyContent:'center', }}>
               <BlogCarousel data={consultation} cardNumber={3} cardWidth={"25%"} />
               </Box>
          </TabPanel>
          <TabPanel value="5">
            <Box sx={{ display:'flex', flexDirection:'row', flexWrap:'nowrap', alignItems:'center', justifyContent:'center', }}>
               <BlogCarousel data={development}  cardNumber={3} cardWidth={"25%"} />
               </Box>
          </TabPanel>
        </TabContext>
    </Box>
    </Box>
  );
}
