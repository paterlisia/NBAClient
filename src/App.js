import * as React from "react";
import Box from "@mui/material/Box";

// internal components
import Header from "./Header/Header";
import StickyFooter from "./Footer/Footer";
import TabPanel from "./Tabs/TabPanel";
import Login from './Login/Login';

// Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <div>
        <Router>
      <Header title="NBA STATS" />
      <Box sx={{ my: 4 }}>
        {/* <TabPanel /> */}
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" element={<TabPanel />} />
            
          {/* This route is for about component 
          with exact path "/login", in component 
          props we passes the imported component*/}
          <Route path="/login" element={<Login />} />
          
        </Routes>
          {/* <Navigate to="/" /> */}
        <StickyFooter />
      </Box>
      </Router>
    </div>
  );
}
