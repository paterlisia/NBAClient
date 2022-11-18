import * as React from "react";
import {
  Typography,
  Grid,
  Container,
  Link,
  Box,
  Divider,
} from "@material-ui/core";

// internal components
import Members from "./Members";
import Members2 from "./Members2";

// css
import { useStyles } from "./styles.js";

function Copyright() {
  return (
    <Typography variant="body2" color="inherit" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/paterlisia/NBAClient">
        NBA Stats
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  const classes = useStyles();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box
        className={classes.footer}
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <h1>NBA Stats</h1>
            <h3>
              A website collects detailed information from players, teams and
              games.
            </h3>
          </Grid>
          <Grid item xs={12}>
            <h1>Contact us:</h1>
            <Members />
          </Grid>
          <Grid item xs={12}>
            <Members2 />
          </Grid>
        </Grid>
        <Copyright />
      </Box>
    </Box>
  );
}
