import * as React from "react";
import Box from "@mui/material/Box";

// internal components
import Header from "./Header/Header";
import StickyFooter from "./Footer/Footer";
import TabPanel from "./Tabs/TabPanel";
import Login from './Login/Login';
import Signup from "./Login/Signup";
import RadarChart from "./Teams/Radar_func";
// Router
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  // user login status
  const [status, setStatus] = React.useState(false);
  const [name, setName] = React.useState("");
  return (
    <div>
        <Router>
      <Header title="NBA STATS" status={status} name={name}/>
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
          <Route path="/login" element={<Login setStatus={setStatus} setName={setName}/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/team/:teamId" element={<RadarChart />} />

        </Routes>
          {/* <Navigate to="/" /> */}
        <StickyFooter />
      </Box>
      </Router>
    </div>
  );
}
