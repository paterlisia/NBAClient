import React from 'react';
import { useEffect, useState } from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';
import CustomCard from "./CustomCard";
import {useStyles} from "./CustomCard";
import Grid from '@mui/material/Grid';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllTeams from "./AllTeams";
import {Typography, Divider} from '@material-ui/core'

const m = new Map();


export default function NBAAutoComplete() {
    m.set('Atlanta Hawks', "ATL")
    m.set('Brooklyn Nets', "BKN")
    m.set('Boston Celtics', "BOS")
    m.set('Charlotte Hornets', "CHA")
    m.set('Chicago Bulls', "CHI")
    m.set('Cleveland Cavaliers', "CLE")
    m.set('Dallas Mavericks', "DAL")
    m.set('Denver Nuggets', "DEN")
    m.set('Detroit Pistons', "DET");
    m.set('Golden State Warriors', "GSW");
    m.set('Houston Rockets', "HOU");
    m.set('Indiana Pacers', "IND");
    m.set('Los Angeles Clippers', "LAC");
    m.set('Los Angeles Lakers', "LAL");
    m.set('Memphis Grizzlies', "MEM");
    m.set('Miami Heat', "MIA");
    m.set('Milwaukee Bucks', "MIL");
    m.set('Minnesota Timberwolves', "MIN");
    m.set('New Orleans Pelicans', "NOP");
    m.set('New York Knicks', "NYK");
    m.set('Oklahoma City Thunder', "OKC");
    m.set('Orlando Magic', "ORL");
    m.set('Philadelphia 76ers', "PHI");
    m.set('Phoenix Suns', "PHX");
    m.set('Portland Trail Blazers', "POR");
    m.set('Sacramento Kings', "SAC");
    m.set('San Antonio Spurs', "SAS");
    m.set('Toronto Raptors', "TOR");
    m.set('Utah Jazz', "UTA");
    m.set('Washington Wizards', "WAS");
    const NBAOptions = 
    ['Atlanta Hawks', 'Brooklyn Nets', 'Boston Celtics', 'Charlotte Hornets',
    'Chicago Bulls', 'Cleveland Cavaliers', 'Dallas Mavericks', 'Denver Nuggets', 'Detroit Pistons',
    'Golden State Warriors', 'Houston Rockets', 'Indiana Pacers', 'Los Angeles Clippers', 'Los Angeles Lakers',
    'Memphis Grizzlies', 'Miami Heat', 'Milwaukee Bucks', 'Minnesota Timberwolves', 'New Orleans Pelicans',
    'New York Knicks', 'Oklahoma City Thunder', 'Orlando Magic', 'Philadelphia 76ers', 'Phoenix Suns', 'Portland Trail Blazers',
    'Sacramento Kings', 'San Antonio Spurs', 'Toronto Raptors', 'Utah Jazz', 'Washington Wizards'];
    
    

    const styles1 = useStyles({ color: '#fc7944' });

    const [selectedTeam, setSelectedTeam] = useState(null);
    console.log(selectedTeam);

    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            let team_url = "http://3.91.6.91:5011/api/teams/" + m.get(selectedTeam)
            console.log(team_url)
            const result = await axios(
                team_url,
            );
            setData(result.data);
        };
        fetchData();
    }, [selectedTeam]);
    console.log(data);

    return (
        <div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options = {NBAOptions}
          sx={{ width: 300 }}
          value={selectedTeam}
          onChange={(_event, newTeam) => { setSelectedTeam(newTeam); }}
          renderInput={(params) => <TextField {...params} label="Team" />}
        />
        <div>
                {
                    data!=null?(
                        <div>
                            <Grid item>
                                <Link style={{ textDecoration:'none'}}
                                to={`/team/${data.Team_ID}`}>
                                <CustomCard
                                    styles={styles1}
                                    brand={data.Team_Arena}
                                    date={'11.09.2022'}
                                    cover={
                                        data.Team_Image
                                    }
                                    logo={data.Team_Logo}
                                    title={data.Team_Name}
                                />
                                </Link>
                            </Grid>
                        </div>
                    ):null
                }
            </div>
            <AllTeams />
        </div>
    )
}