import React, { useEffect } from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

// styles
import { createTheme, ThemeProvider } from "@mui/material/styles";

// internal component
import LeaderPlayers from "./LeaderPlayers";

// date type
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// service
import GamesService from "../service/GamesService";

const theme = createTheme();
const color = "white";

export default function Games() {
  const dateInit = dayjs();
  const [value, setValue] = useState(dateInit);
  const [gamesList, setGamesList] = useState({});
  const [url, setUrl] = useState("");

  const service = new GamesService();
  useEffect(() => {
    // send get reqeust as today initally
    var myDate = dayjs().format("YYYYMMDD");
    const rsp = service.getGamesByDate(myDate);
    rsp
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          setGamesList(response.data);
        } else {
          console.log(response.status);
        }
      })
      .catch((error) => {
        console.log(error);
        setGamesList([]);
      });
  }, []);
  const handleChange = (dateDayjs) => {
    setValue(dateDayjs);
    // convert date to timestamp
    var date = dateDayjs.format("YYYY-MM-DD");
    var myDate = dateDayjs.format("YYYYMMDD");
    setUrl("https://www.nba.com/games?date=" + date);
    // send get reqeust
    const rsp = service.getGamesByDate(myDate);
    rsp
      .then((response) => {
        setGamesList(response.data);
      })
      .catch((error) => {
        console.log(error);
        setGamesList([]);
      });
  };

  // click on learn more events
  // const handleLearnMore = () => {
  //   // convert date to timestamp
  //   var date = value.format("YYYY-MM-DD");
  //   window.open("https://www.nba.com/games?date=" + date, '_blank');
  // }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {/* NBA Game date select card */}
          <Grid item xs={12}>
            <Card
              sx={{ display: "flex" }}
              style={{ backgroundColor: "black", opacity: 0.9 }}
            >
              <CardContent sx={{ flex: " 0 auto", width: "40%" }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    renderInput={(params) => {
                      return (
                        <TextField
                          {...params}
                          sx={{
                            svg: { color },
                            input: { color },
                            label: { color },
                            "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                borderColor: "white",
                              },
                              "&:hover fieldset": {
                                borderColor: "blue",
                              },
                            },
                          }}
                        />
                      );
                    }}
                    label="Pick a date"
                    value={value}
                    onChange={(newValue) => {
                      handleChange(newValue);
                    }}
                  />
                </LocalizationProvider>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {/* <IconButton aria-label="play/pause">
                        <SportsBasketballIcon sx={{ height: 38, width: 38 }} />
                      </IconButton> */}
                <Typography
                  component="div"
                  variant="h6"
                  align="center"
                  color="white"
                >
                  The game results on {value.format("YYYY-MM-DD")}
                </Typography>
              </Box>
            </Card>
          </Grid>
          {/* NBA Game info card */}
          {gamesList.length === 0 ? (
            <Typography gutterBottom variant="h5" component="h2">
              There is no game today
            </Typography>
          ) : (
            Object.keys(gamesList).map((key) => {
              return (
                <Grid item key={gamesList[key]} xs={12}>
                  <Card sx={{ display: "flex" }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 230, height: 230 }}
                      image={gamesList[key].teams[0].logo}
                      alt="Live from space album cover"
                    />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent
                        sx={{ flex: "1 0 auto" }}
                        style={{ width: "100%" }}
                      >
                        <Typography component="div" variant="h6" align="center">
                          {gamesList[key].teams[0].name} VS{" "}
                          {gamesList[key].teams[1].name}
                        </Typography>
                        <Typography component="div" variant="h6" align="center">
                          {gamesList[key].teams[0].score} :{" "}
                          {gamesList[key].teams[1].score}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="inherit"
                          component="div"
                          align="center"
                        >
                          {gamesList[key].place}
                        </Typography>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          pl: 1,
                          pb: 1,
                        }}
                      >
                        <IconButton aria-label="play/pause">
                          <SportsBasketballIcon
                            sx={{ height: 38, width: 38 }}
                          />
                        </IconButton>
                        <Button size="small" href={url}>Learn More</Button>
                      </Box>
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{ width: 230, height: 230 }}
                      image={gamesList[key].teams[1].logo}
                      alt="Live from space album cover"
                      alignItems="right"
                    />
                    <LeaderPlayers player={gamesList[key].teams} />
                  </Card>
                </Grid>
              );
            })
          )}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
