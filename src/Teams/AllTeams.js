/*
    display the cards of all 30 teams
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
// import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Autocomplete from '@material-ui/lab/Autocomplete';
// import ReactApexChart from 'apexcharts'
import ReactApexChart from "react-apexcharts";
import axios from 'axios';

// internal component
import RadarChart from "./Radar";
// import HighlightCardDemo from "./CustomCard";
import CustomCard from "./CustomCard";
import {useStyles} from "./CustomCard";

// date type
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();
const color = "white";


export default function AllTeams() {
  const dateInit = dayjs();
  const [value, setValue] = useState(dateInit);
  const handleChange = (newValue) => {
  setValue(newValue);
  };
  const styles1 = useStyles({ color: '#fc7944' });
  const styles2 = useStyles({ color: '#5357ce' });

  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://localhost:5011/api/teams`,
      );
      setTeams(result.data);
    };
    fetchData();
  }, []);
  console.log(teams[0]) // teams contains the data of all the teams in form of array

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
      
        <Typography gutterBottom variant="h5" component="h2">
                      All Teams
         </Typography>
        <Container sx={{ py: 8 }} maxWidth="md">
          
        {/* <HighlightCardDemo /> */}
        
        {/* <div><Button type="primary">
          <Link to="/team1">到team1</Link>
        </Button></div> */}
          {/* End hero unit */}
          <Grid container spacing={4}>
            
          {/*this should be text*/}
            {teams.map((card) => (
            
            <Grid item>
            <Link style={{ textDecoration:'none'}}
            to={`/team/${card.Team_ID}`}>
              <CustomCard
                styles={styles1}
                brand={card.Team_Arena}
                date={'11.09.2022'}
                cover={
                    card.Team_Image
                }
                logo={card.Team_Logo}
                title={card.Team_Name}
              />
              {/* <Button type="primary">
                <Link to={`/team/${card.Team_ID}`}>到teamID</Link>
              </Button> */}
            </Link>
            </Grid>
            
            ))}
          </Grid>
          
        </Container>
      </main>
    </ThemeProvider>
  );
}