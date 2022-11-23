import React, { Component } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Divider from "@mui/material/Divider";

import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

class Board extends Component {
  state = { age: 0, birthdate: 0 };

  // 挂载
  componentDidMount() {
    // 方式一：
    /**
     * 1.使用this.setState进行更新数据进行给count赋值
     * 2.在回调中可以得到赋值后最新的值，因为setState是异步的
     */
    let date = new Date(this.props.player.BIRTHDATE);
    let month = date.toLocaleDateString("en-US", { month: "long" });
    date = date.toDateString().split(" ");
    this.setState(
      {
        age: new Date().getFullYear() - date[3],
        birthdate: month + " " + date[2] + ", " + date[3],
      },
      () => {
        console.log(this.state.age, this.state.birthdate, "start"); //1
      }
    );
    console.log(this.state.count, "end"); //0
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
          sx={{
            "--Grid-borderWidth": "2px",
            borderTop: "var(--Grid-borderWidth) solid",
            borderLeft: "var(--Grid-borderWidth) solid",
            borderColor: "divider",
            "& > div": {
              borderRight: "var(--Grid-borderWidth) solid",
              borderBottom: "var(--Grid-borderWidth) solid",
              borderColor: "divider",
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
            {/* <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "fit-content",

                borderRadius: 1,
                bgcolor: "background.paper",
                color: "text.secondary",
                "& svg": {
                  m: 1.5,
                },
                "& hr": {
                  mx: 0.5,
                },
              }}
            >
              <p>PPG</p>
              <p>20.0</p>
              <Divider orientation="vertical" flexItem />
              RPG
              <Divider orientation="vertical" flexItem />
              APG
              <Divider orientation="vertical" flexItem />
              PIE
            </Box> */}
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Item elevation={0}>PPG</Item>
              <Item elevation={0}>RPG</Item>
              <Item elevation={0}>APG</Item>
              <Item elevation={0}>PIE</Item>
            </Stack>
          </Grid>
          <Grid
            {...{ xs: 12, sm: 6, md: 3, lg: 2 }}
            minHeight={160}
            xs
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Stack
              direction={{ xs: "column" }}
              divider={<Divider component="li" />}
              spacing={{ xs: 1 }}
            >
              <Item elevation={0}>
                HEIGHT
                <br />
                {this.props.player.HEIGHT}
              </Item>
              <Item elevation={0}>
                AGE
                <br />
                {this.state.age}
              </Item>
            </Stack>
          </Grid>
          <Grid
            {...{ xs: 12, sm: 6, md: 3, lg: 2 }}
            minHeight={160}
            xs
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {" "}
            <Stack
              direction={{ xs: "column" }}
              divider={<Divider component="li" />}
              spacing={{ xs: 1 }}
            >
              <Item elevation={0}>
                WEIGHT
                <br />
                {this.props.player.WEIGHT}
              </Item>
              <Item elevation={0}>
                BIRTHDATE
                <br />
                {this.state.birthdate}
              </Item>
            </Stack>
          </Grid>
          <Grid
            {...{ xs: 12, sm: 6, md: 3, lg: 2 }}
            minHeight={160}
            xs
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {" "}
            <Stack
              direction={{ xs: "column" }}
              divider={<Divider component="li" />}
              spacing={{ xs: 1 }}
            >
              <Item elevation={0}>
                COUNTRY
                <br />
                {this.props.player.COUNTRY}
              </Item>
              <Item elevation={0}>
                SCHOOL
                <br />
                {this.props.player.SCHOOL}
              </Item>
            </Stack>
          </Grid>

          <Grid
            {...{ xs: 12, sm: 6, md: 3, lg: 2 }}
            minHeight={160}
            xs
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {" "}
            <Stack
              direction={{ xs: "column" }}
              divider={<Divider component="li" />}
              spacing={{ xs: 1 }}
            >
              <Item elevation={0}>
                LAST ATTENDED
                <br />
                {this.props.player.COUNTRY}
              </Item>
              <Item elevation={0}>
                EXPERIENCE
                <br />
                {this.props.player.COUNTRY}
              </Item>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default Board;
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
