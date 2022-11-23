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

class Portrait extends Component {
  state = {};
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Grid container spacing={0} md={0}>
          <Card
            sx={{
              display: "flex",
              width: 1,
              height: 2 / 3,
              margin: 0,
              padding: 0,
              bgcolor: "#006bb6",
            }}
          >
            <Grid item xs={4} lg={4} ml={"5%"}>
              <Box pr={"50%"} mt={"5%"}>
                <CardMedia
                  component="img"
                  sx={{ width: 1 / 3, height: 1 / 2 }}
                  image={`https://cdn.nba.com/logos/nba/${this.props.teamId}/primary/L/logo.svg`}
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
                New York Knicks | #11 | {this.props.player.POSITION}
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
        <Borad player={this.props.player} />
      </ThemeProvider>
    );
  }
}

export default Portrait;
