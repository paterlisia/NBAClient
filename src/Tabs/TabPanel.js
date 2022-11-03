import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// internal components
import Home from '../Home/Home';
import Teams from '../Teams/Teams';
import Players from '../Players/Players';
import Games from '../Games/Games';
// data type ref:
// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper'}}
    >
      <Tabs
        orientation="horizontal"
        variant="scrollable"
        value={value}
        onChange={handleChange}
      >
        <Tab label="Home" {...a11yProps(0)} />
        <Tab label="Players" {...a11yProps(1)} />
        <Tab label="Teams" {...a11yProps(2)} />
        <Tab label="Games" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Players/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Teams />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Games />
      </TabPanel>
    </Box>
  );
}
