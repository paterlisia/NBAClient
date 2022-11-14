/*
    display the cards of all 30 teams
*/

import * as React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link, useLocation, useParams} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from "react";

// import ReactApexChart from 'apexcharts'
import ReactApexChart from "react-apexcharts";


const current = window.location.pathname;
console.log(current)
let arr = current.split('/')
console.log(arr)
let team_url = "http://localhost:5011/api/teams/" + arr[2]

export default function RadarChart() {

    const [data, setTeamData] = useState([0,0,0,0,0,0]);
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                team_url,
            );
            setTeamData(result.data);
        };
        fetchData();
    }, []);
    console.log(team_url)
    console.log(data[0]) // teams contains the data of all the teams in form of array


    const series = [
        {
        name: 'Series 1',
        data: [data[0].Team_Fga/94.4, data[0].Team_3pa/41.3, data[0].Team_Fta/24.5, 
        data[0].Team_Pts/115.9, data[0].Team_Win_Percentage/0.683, data[0].Team_Oreb/14.1],
      },
      {
        name: 'Series 2',
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
        <Button type="primary">
          <Link to="/team1">到team1 </Link>
        </Button>
      </div>
    )
}

// class RadarChart extends React.Component {
  
//   constructor(props) {
//     super(props);

//     this.state = {
    
//       series: [{
//         name: 'Series 1',
//         data: [2.4, 3.2, 2.8, 0.9, 1.5, 1.4, 2],
//       }],
//       options: {
//         chart: {
//           height: 350,
//           type: 'radar',
//         },
//         title: {
//           text: 'Basic Radar Chart'
//         },
//         xaxis: {
//           categories: ['January', 'February', 'March', 'April', 'May', 'June', 'fuck']
//         }
//       },
    
    
//     };
//   }
  

//   render() {
//     return (
//       <div id="chart">
//         <ReactApexChart options={this.state.options} series={this.state.series} type="radar" height={350} />
//         <Button type="primary">
//           <Link to="/team1">到team1 </Link>
//         </Button>
//       </div>
      
//     );
//   }
// }


// export default RadarChart;
