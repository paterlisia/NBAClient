/*
    display the cards of all 30 teams
*/

import * as React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link, useLocation, useParams} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from "react";
// import { SpeedDial, SpeedDialItem } from 'react-mui-speeddial';

// import ReactApexChart from 'apexcharts'
import ReactApexChart from "react-apexcharts";


// const current = window.location.pathname;
// console.log('fuck')
// console.log(current)
// let arr = current.split('/')
// console.log(arr)
// let team_url = "http://localhost:5011/api/teams/" + arr[2]

export default function RadarChart() {
    const current = window.location.pathname;
    console.log('fuck')
    console.log(current)
    let arr = current.split('/')
    console.log(arr)
    let team_url = "http://3.91.6.91:5011/api/teams/" + arr[2]

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    const [data, setTeamData] = useState([0,0,0,0,0,0]);
    
    if (data != 0) {
      useEffect(() => {
        const fetchData = async () => {
            console.log(team_url)
            const result = await axios(
                team_url,
            );
            setTeamData(result.data);
        };
        fetchData();
    }, [team_url]);
    }
    
    console.log(data[0]) // teams contains the data of all the teams in form of array


    const series = [
        {
        name: data.Team_Name,
        data: [data.Team_Fga/94.4, data.Team_3pa/41.3, data.Team_Fta/24.5, 
        data.Team_Pts/115.9, data.Team_Win_Percentage/0.683, data.Team_Oreb/14.1],
      },
      {
        name: 'Best',
        data: [1, 1, 1, 1, 1, 1],
      }];
    const options = {
        chart: {
          height: 350,
          type: 'radar',
        },
        title: {
          text: 'Team Chart'
        },
        xaxis: {
          categories: ['Team_Fga', 'Team_3pa', 'Team_Fta', 'Team_Pts', 'Team_Win_Percentage', 'Team_Oreb']
        }
      };
    
    return (
        <div id="chart">
        <ReactApexChart options={options} series={series} type="radar" height={350} />
        
          <Link style={{ textDecoration:'none'}}
          to="/"><Button variant="outlined">go back</Button></Link>
        
        {/* <SpeedDial
          ariaLabel="SpeedDial openIcon example"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial> */}
      </div>
    )
}

