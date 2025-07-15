import * as React from 'react';
import {
  Box,
  Tab,
  Drawer,
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
  useMediaQuery,
  useTheme,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PagesHeader from '../../Common_Components/PagesHeader';
import { ColorPalette } from '../../Assets/Colors';
import BlogData from "../../Data/BlogData"
import BlogCarousel from '../../Common_Components/Blogcarousel';

export default function LabTabs() {
  const [tabIndex, setTabIndex] = React.useState("0");
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const cardNumber = isSm ? 1 : 3;
  const cardWidth = isSm ? "90%" : "25%";

  const tabs = [
    { label: "All", value: "0", data: BlogData },
    { label: "Advices", value: "1", data: BlogData.filter(item => item.category === "Advices") },
    { label: "Announcements", value: "2", data: BlogData.filter(item => item.category === "Announcements") },
    { label: "News", value: "3", data: BlogData.filter(item => item.category === "News") },
    { label: "Consultation", value: "4", data: BlogData.filter(item => item.category === "Consultation") },
    { label: "Development", value: "5", data: BlogData.filter(item => item.category === "Development") },
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <PagesHeader title={"Blog"} path={"Blog"} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          paddingTop: '5%',
          position: 'relative',
        }}
      >
        <TabContext value={tabIndex}>
          {!isSm && (
            <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center' }}>
              <TabList
                onChange={(e, val) => setTabIndex(val)}
                aria-label="tabs"
                textColor="inherit"
                TabIndicatorProps={{ style: { display: 'none' } }}
              >
                {tabs.map((tab) => (
                  <Tab
                    key={tab.value}
                    label={tab.label}
                    value={tab.value}
                    sx={{
                      borderRadius: '25px',
                      color: tabIndex === tab.value ? ColorPalette.white : "inherit",
                      background: tabIndex === tab.value ? ColorPalette.pink : "inherit",
                      marginX: 1,
                    }}
                  />
                ))}
              </TabList>
            </Box>
          )}

          {/* Small Screen Drawer Button */}
          {isSm && (
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ position: 'absolute', right: 20, top: 0 }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          )}

          <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            <Box sx={{ width: 250, padding: 3 }}>
              <Typography variant="h6" gutterBottom>
                Select Category
              </Typography>
              <RadioGroup
                value={tabIndex}
                onChange={(e) => {
                  setTabIndex(e.target.value);
                  setDrawerOpen(false);
                }}
              >
                {tabs.map((tab) => (
                  <FormControlLabel
                    key={tab.value}
                    value={tab.value}
                    control={<Radio />}
                    label={tab.label}
                  />
                ))}
              </RadioGroup>
            </Box>
          </Drawer>

          {tabs.map((tab) => (
            <TabPanel key={tab.value} value={tab.value}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'nowrap',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <BlogCarousel
                  data={tab.data}
                  cardNumber={cardNumber}
                  cardWidth={cardWidth}
                />
              </Box>
            </TabPanel>
          ))}
        </TabContext>
      </Box>
    </Box>
  );
}
