import React, { useEffect } from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import Paper from "@mui/material/Paper";

import PlayersService from "../service/PlayersService";
import Portrait from "./components/Portrait";
import StatsTable from "./components/StatsTable";

const theme = createTheme();

export default function Players() {
  const [targetPlayer, setTargetPlayer] = React.useState("");
  const [value, setValue] = React.useState([]);
  const [season, setSeason] = React.useState("regular");
  const [playersList, setPlayersList] = useState({});
  const [statsList, setStatsList] = useState({});

  const service = new PlayersService();
  useEffect(() => {
    const rsp = service.getPlayers();
    rsp
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          setPlayersList(response.data);
          // setTargetPlayer(response.data[0]);
        } else {
          console.log(response.status);
        }
      })
      .catch((error) => {
        console.log(error);
        setPlayersList([]);
      });
  }, []);

  const handleId = (playerId) => {
    const rsp = service.getPlayerById(playerId);
    rsp
      .then((response) => {
        // console.log("handId");

        setStatsList(response.data);
        setValue([]);
      })
      .then(() => {
        handleSeason("regular");
      })
      .then(() => {
        console.log(value);
      })
      .catch((error) => {
        console.log(error);
        setStatsList([]);
      });
  };

  const handleSeason = (newValue) => {
    console.log(newValue);
    setSeason(newValue);
    if (typeof statsList[newValue] !== "undefined") {
      let res = [];
      // console.log("handSeason");

      // console.log(statsList);

      statsList[newValue].map((item) => {
        let temp = [];
        keys.map((key) => {
          temp.push(item[key]);
        });
        res.push(createData(...temp));
      });
      console.log(res);
      setValue(res);
      console.log(statsList[newValue]);
    } else {
      setValue([]);
      console.log(value);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Typography gutterBottom variant="h5" component="h2">
          This should be Players page
        </Typography>

        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Autocomplete
                id="country-select-demo"
                sx={{ width: 300 }}
                // value={value}
                onChange={(event, newTargetPlayer) => {
                  setTargetPlayer(newTargetPlayer);
                  handleId(newTargetPlayer.PLAYER_ID);
                  // handleSeason("regular");
                }}
                options={playersList}
                autoHighlight
                getOptionLabel={(option) =>
                  option.PLAYER_ID +
                  " " +
                  option.FIRST_NAME +
                  " " +
                  option.LAST_NAME
                }
                isOptionEqualToValue={(option, value) =>
                  option.PLAYER_ID === value.PLAYER_ID
                }
                // renderOption={(props, option) => (
                // <Box
                //   component="li"
                //   sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                //   {...props}
                // >
                //   {/* <img
                //     loading="lazy"
                //     width="20"
                //     src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                //     srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                //     alt=""
                //   /> */}
                //   {option.label} ({option.code}) +{option.phone}
                // </Box>
                // )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Choose a player"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                  />
                )}
              />
            </Grid>

            {targetPlayer === "" ? (
              <> </>
            ) : (
              <>
                {" "}
                <Grid item xs={12}>
                  <Portrait
                    key={targetPlayer.PLAYER_ID}
                    player={targetPlayer}
                    stats={statsList}
                  />
                </Grid>
                <Grid item xs={3} md={3}>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel
                      id="select-season"
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      Season Type
                    </InputLabel>

                    <NativeSelect
                      value={season}
                      inputProps={{
                        name: "Season",
                        id: "uncontrolled-native",
                      }}
                      onChange={(event) => {
                        handleSeason(event.target.value);
                      }}
                    >
                      <option value={"preseason"}>Preseason</option>
                      <option value={"regular"}>Regular Season</option>
                      <option value={"playoffs"}>Playoffs</option>
                      <option value={"playin"}>Play In</option>
                    </NativeSelect>
                  </FormControl>
                </Grid>
                <Grid item xs={3} md={3}>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel
                      id="select-Permode"
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      Per Mode
                    </InputLabel>

                    <NativeSelect
                      defaultValue={"pergame"}
                      inputProps={{
                        name: "Permode",
                        id: "uncontrolled-native",
                      }}
                    >
                      <option value={"totals"}>Totals</option>
                      <option value={"pergame"}>Per Game</option>
                      {/* <option value={"playoffs"}>Playoffs</option>
              <option value={"playin"}>Play In</option> */}
                    </NativeSelect>
                  </FormControl>
                </Grid>
                {typeof value[0] === "undefined" ? (
                  <Typography gutterBottom variant="h5" component="h2">
                    There is no stats of the player
                  </Typography>
                ) : (
                  <StatsTable value={value} />
                )}
              </>
            )}
            {/* End hero unit */}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}

function createData(
  SEASON,
  TEAM,
  MIN,
  PTS,
  FGM,
  FGA,
  FG_PCT,
  FG3M,
  FG3A,
  FG3_PCT,
  FTM,
  FTA,
  FT_PCT,
  OREB,
  DREB,
  AST,
  STL,
  BLK,
  TOs,
  PF,
  PLUS_MINUS
) {
  return {
    SEASON,
    TEAM,
    MIN,
    PTS,
    FGM,
    FGA,
    FG_PCT,
    FG3M,
    FG3A,
    FG3_PCT,
    FTM,
    FTA,
    FT_PCT,
    OREB,
    DREB,
    AST,
    STL,
    BLK,
    TOs,
    PF,
    PLUS_MINUS,
  };
}
const keys = [
  "SEASON",
  "ABBREVIATION",
  "MIN",
  "PTS",
  "FGM",
  "FGA",
  "FG_PCT",
  "FG3M",
  "FG3A",
  "FG3_PCT",
  "FTM",
  "FTA",
  "FT_PCT",
  "OREB",
  "DREB",
  "AST",
  "STL",
  "BLK",
  "TOs",
  "PF",
  "PLUS_MINUS",
];
