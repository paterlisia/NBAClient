import * as React from 'react';
import Box from '@mui/material/Box';

// internal components
import Header from './Header/Header';
import StickyFooter from './Footer/Footer';
import TabPanel from './Tabs/TabPanel';

export default function App() {
  return (
    <div >
    <Header title="NBA STATS"/>
      <Box sx={{ my: 4 }}>
      <TabPanel />
      <StickyFooter />
      </Box>
    </div>
  );
}
