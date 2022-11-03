import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from '@mui/material/IconButton';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// styles
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

// internal component
import LeaderPlayers from "./LeaderPlayers";

// date type
import dayjs, { Dayjs } from 'dayjs';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

// const [value, setValue] = React.useState<Dayjs | null>(
//     dayjs('2014-08-18T21:11:54')
//   );

//   const handleChange = (newValue) => {
//     setValue(newValue);
//   };
export default function Games() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Typography gutterBottom variant="h5" component="h2">
          This should be Games page
        </Typography>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={2}>

            {/* NBA Game date select card */}
            {/* <Grid item xs={12} >
                <Card sx={{ display: "flex" }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="DateTimePicker"
                        />
                     </LocalizationProvider>
                </Card>
            </Grid> */}
            {/* NBA Game info card */}
            {cards.map((card) => (
              <Grid item key={card} xs={12} >
                <Card sx={{ display: "flex" }}>

                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="https://source.unsplash.com/random"
                    alt="Live from space album cover"
                  />
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5" align="center">
                        121 : 111
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                        align="center"
                      >
                        Wells Fargo Center, Philadelphia, PA
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
                        <SportsBasketballIcon sx={{ height: 38, width: 38 }} />
                      </IconButton>
                      <Button size="small">Learn More</Button>
                    </Box>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image="https://source.unsplash.com/random"
                    alt="Live from space album cover"
                    alignItems="right"
                  />
                  <LeaderPlayers />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
