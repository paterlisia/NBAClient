import React, { Component } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();
// const useStyles = makeStyles((theme) => ({
//   divider: {
//     // Theme Color, or use css color in quote
//     background: theme.palette.divider,
//   },
// }));
class Board extends Component {
  state = { height: 0, weight: 0, age: 0, birthdate: 0 };

  // 挂载
  Item = styled(Paper)(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? "#1A2027" : this.props.color,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: "white",
  }));
  componentDidMount() {
    // 方式一：
    /**
     * 1.使用this.setState进行更新数据进行给count赋值
     * 2.在回调中可以得到赋值后最新的值，因为setState是异步的
     */
    let date = new Date(this.props.player.BIRTHDATE);
    let month = date.toLocaleDateString("en-US", { month: "long" });
    date = date.toDateString().split(" ");

    let height = this.props.player.HEIGHT.split("-");
    let feet = height[0];
    let inches = height[1];
    let cm = (
      (parseFloat(feet) * 30.48 + parseFloat(inches) * 2.54) /
      100
    ).toFixed(2);

    let lb = this.props.player.WEIGHT;
    let kg = (parseFloat(lb) * 0.4535924).toFixed(0);
    this.setState(
      {
        height: feet + "'" + inches + '"' + ` (${cm}m)`,
        weight: lb + "lb" + ` (${kg}kg)`,
        age: new Date().getFullYear() - date[3],
        birthdate: month + " " + date[2] + ", " + date[3],
      }
      // () => {
      //   console.log(this.state.age, this.state.birthdate, "start"); //1
      // }
    );
    // console.log(this.state.count, "end"); //0
    // 方式二：
    // this.setState(
    //   (prevState, prevProps) => ({
    //     count: prevState.count + 1
    //   }),
    //   () => {
    //     console.log(this.state.count, 'start');  //1
    //   }
    // );
    // console.log(this.state.count, 'end');  //0
  }
  render() {
    return (
      <Box sx={{ flexGrow: 1, p: 0 }}>
        <Grid
          container
          spacing={0}
          bgcolor={this.props.color}
          sx={{
            "--Grid-borderWidth": "2px",
            borderTop: "var(--Grid-borderWidth) solid",
            borderLeft: "var(--Grid-borderWidth) solid",
            borderColor: "#ffffff",
            "& > div": {
              borderRight: "var(--Grid-borderWidth) solid",
              borderBottom: "var(--Grid-borderWidth) solid",
              borderColor: "#ffffff",
            },
          }}
        >
          <Grid
            {...{ xs: 12, sm: 12, md: 12, lg: 4 }}
            minHeight={80}
            xs
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Stack
              direction="row"
              divider={
                <Divider
                  orientation="vertical"
                  sx={{
                    borderRightWidth: 1.5,
                    backgroundColor: "white",
                  }}
                  flexItem
                />
              }
              spacing={2}
            >
              <this.Item elevation={0}>PPG</this.Item>
              <this.Item elevation={0}>RPG</this.Item>
              <this.Item elevation={0}>APG</this.Item>
              <this.Item elevation={0}>PIE</this.Item>
            </Stack>
          </Grid>
          <Grid
            {...{ xs: 12, sm: 6, md: 3, lg: 2 }}
            minHeight={160}
            xs
            // display="flex"
            // justifyContent="center"
            // alignItems="center"
          >
            <Stack
              direction={{ xs: "column" }}
              marginTop={"7.5%"}
              divider={
                <Divider
                  component="li"
                  sx={{
                    borderBottomWidth: 1.5,
                    backgroundColor: "white",
                  }}
                />
              }
              spacing={{ xs: 1 }}
            >
              <this.Item elevation={0}>
                HEIGHT
                <br />
                {this.state.height}
              </this.Item>
              <this.Item elevation={0}>
                AGE
                <br />
                {this.state.age} years
              </this.Item>
            </Stack>
          </Grid>
          <Grid
            {...{ xs: 12, sm: 6, md: 3, lg: 2 }}
            minHeight={160}
            xs
            // display="flex"
            // justifyContent="center"
            // alignItems="center"
          >
            {" "}
            <Stack
              direction={{ xs: "column" }}
              marginTop={"7.5%"}
              divider={
                <Divider
                  component="li"
                  light={true}
                  sx={{
                    borderBottomWidth: 1.5,
                    backgroundColor: "white",
                  }}
                />
              }
              spacing={{ xs: 1 }}
            >
              <this.Item elevation={0}>
                WEIGHT
                <br />
                {this.state.weight}
              </this.Item>
              <this.Item elevation={0}>
                BIRTHDATE
                <br />
                {this.state.birthdate}
              </this.Item>
            </Stack>
          </Grid>
          <Grid
            {...{ xs: 12, sm: 6, md: 3, lg: 2 }}
            minHeight={160}
            xs
            // display="flex"
            // justifyContent="center"
            // alignItems="center"
          >
            {" "}
            <Stack
              direction={{ xs: "column" }}
              marginTop={"7.5%"}
              divider={
                <Divider
                  component="li"
                  light={true}
                  sx={{
                    borderBottomWidth: 1.5,
                    backgroundColor: "white",
                  }}
                />
              }
              spacing={{ xs: 1 }}
            >
              <this.Item elevation={0}>
                COUNTRY
                <br />
                {this.props.player.COUNTRY}
              </this.Item>
              <this.Item elevation={0}>
                DRAFT
                <br />
                {this.props.player.DRAFT_YEAR === "Undrafted"
                  ? "None"
                  : this.props.player.DRAFT_YEAR +
                    " R" +
                    this.props.player.DRAFT_ROUND +
                    " Pick " +
                    this.props.player.DRAFT_NUMBER}
              </this.Item>
            </Stack>
          </Grid>

          <Grid
            {...{ xs: 12, sm: 6, md: 3, lg: 2 }}
            minHeight={160}
            xs
            // display="flex"
            // justifyContent="center"
            // alignItems="center"
          >
            {" "}
            <Stack
              direction={{ xs: "column" }}
              marginTop={"7.5%"}
              divider={
                <Divider
                  component="li"
                  light={true}
                  sx={{
                    borderBottomWidth: 1.5,
                    backgroundColor: "white",
                  }}
                />
              }
              spacing={{ xs: 1 }}
            >
              <this.Item elevation={0}>
                LAST ATTENDED
                <br />
                {this.props.player.SCHOOL}
              </this.Item>
              <this.Item elevation={0}>
                EXPERIENCE
                <br />
                {this.props.player.EXPERIENCE === "None"
                  ? "None"
                  : this.props.player.EXPERIENCE + " Years"}
              </this.Item>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default Board;
