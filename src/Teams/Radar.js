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
let team_Url = ""



class RadarChart extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: 'Series 1',
        data: [2.4, 3.2, 2.8, 0.9, 1.5, 1.4, 2],
      }],
      options: {
        chart: {
          height: 350,
          type: 'radar',
        },
        title: {
          text: 'Basic Radar Chart'
        },
        xaxis: {
          categories: ['January', 'February', 'March', 'April', 'May', 'June', 'fuck']
        }
      },
    
    
    };
  }
  

  render() {
    return (
      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="radar" height={350} />
        <Button type="primary">
          <Link to="/team1">到team1 </Link>
        </Button>
      </div>
      
    );
  }
}


export default RadarChart;
