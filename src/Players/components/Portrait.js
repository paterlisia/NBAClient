import React, { Component } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { getMainColor, getFullName } from "nba-color";

// styles
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Borad from "./Borad";

const theme = createTheme();

theme.typography.h2 = {
  fontSize: "0.6rem",
  "@media (min-width:600px)": {
    fontSize: "0.8rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.1rem",
  },
};

theme.typography.h1 = {
  fontSize: "1.4rem",
  "@media (min-width:600px)": {
    fontSize: "1.8rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.2rem",
  },
};

function LightenDarkenColor(col, amt) {
  var num = parseInt(col === undefined ? 0 : col.split("#")[1], 16);
  var r = (num >> 16) + amt;
  var b = ((num >> 8) & 0x00ff) + amt;
  var g = (num & 0x0000ff) + amt;
  var newColor = g | (b << 8) | (r << 16);
  return "#" + newColor.toString(16);
}

class Portrait extends Component {
  state = {};
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Grid container spacing={0} md={0}>
          {console.log(
            this.props.stats.CURRENT_TEAM === undefined
              ? 0
              : LightenDarkenColor(
                  getMainColor(this.props.stats.CURRENT_TEAM).hex,
                  -10
                ),
            this.props.stats.CURRENT_TEAM === undefined
              ? 0
              : getMainColor(this.props.stats.CURRENT_TEAM).hex
          )}
          <Card
            sx={{
              display: "flex",
              width: 1,
              height: 2 / 3,
              margin: 0,
              padding: 0,
              bgcolor:
                this.props.stats.CURRENT_TEAM === undefined
                  ? "#000000"
                  : LightenDarkenColor(
                      getMainColor(this.props.stats.CURRENT_TEAM).hex,
                      20
                    ),
            }}
          >
            <Grid item xs={4} lg={4} ml={"5%"}>
              <Box pr={"50%"} mt={"5%"}>
                <CardMedia
                  component="img"
                  sx={{ width: 1 / 3, height: 1 / 2 }}
                  image={`https://cdn.nba.com/logos/nba/${this.props.stats.CURRENT_TEAM_ID}/primary/L/logo.svg`}
                  alt="Live from space album cover"
                />
              </Box>

              <CardMedia
                component="img"
                sx={{ ml: "10%", width: 3 / 4 }}
                image={`https://cdn.nba.com/headshots/nba/latest/1040x760/${this.props.player.PLAYER_ID}.png`}
                alt="Live from space album cover"
              />
            </Grid>
            <Grid item xs={4} lg={4}>
              <Typography
                variant="h2"
                ml={"20%"}
                mt={"30%"}
                md={0}
                color="white"
              >
                {this.props.stats.CURRENT_TEAM === undefined
                  ? this.props.stats.CURRENT_TEAM
                  : getFullName(this.props.stats.CURRENT_TEAM)}{" "}
                | #11 |{this.props.player.POSITION}
              </Typography>
              <Typography variant="h1" ml={"20%"} mt={0} color="white">
                {this.props.player.FIRST_NAME}
              </Typography>
              <Typography variant="h1" ml={"20%"} color="white">
                {this.props.player.LAST_NAME}
              </Typography>
            </Grid>
            <Grid item xs={4} lg={4}>
              <Typography mr={"20%"} mt={"35%"} align={"right"} color="white">
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  startIcon={<StarBorderIcon />}
                >
                  FOLLOW
                </Button>
              </Typography>
            </Grid>
          </Card>
        </Grid>
        <Borad
          player={this.props.player}
          color={
            this.props.stats.CURRENT_TEAM === undefined
              ? "#000000"
              : LightenDarkenColor(
                  getMainColor(this.props.stats.CURRENT_TEAM).hex,
                  -5
                )
          }
        />
      </ThemeProvider>
    );
  }
}

export default Portrait;
