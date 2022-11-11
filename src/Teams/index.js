/*
    initial the routes of each tab, /team1, /team/<team_ID>, ...
*/
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import {createRoot} from 'react-dom/client';
// import ReactApexChart from 'apexcharts'
import ReactApexChart from "react-apexcharts";
import axios from 'axios';
import Fucks from "./Fucks";
// internal component
import RadarChart from "./Radar";
// import HighlightCardDemo from "./CustomCard";
import HighlightCardDemo from "./carddemo";
import {useStyles} from "./CustomCard";

// date type
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();
const color = "white";
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

export default function Teams() {
  

  return (
    <Router>
    <Routes>
    <Route path="/" exact element={<HighlightCardDemo />} />
    <Route path="/team1" element={<Fucks />} />
    <Route path="/team/:teamId" element={<RadarChart />} />
    
    </Routes>
    </Router>
  );
}