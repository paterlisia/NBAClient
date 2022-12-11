import React, { Component } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import Accordions from "./Accord";

class StatsTable extends Component {
  state = {};
  render() {
    return (
      <Grid item xs={12}>
        <Accordions />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>SEASON</StyledTableCell>
                <StyledTableCell align="right">TEAM</StyledTableCell>
                <StyledTableCell align="right">MIN</StyledTableCell>
                <StyledTableCell align="right">PTS</StyledTableCell>
                <StyledTableCell align="right">FGM</StyledTableCell>
                <StyledTableCell align="right">FGA</StyledTableCell>
                <StyledTableCell align="right">FG_PCT</StyledTableCell>
                <StyledTableCell align="right">FG3M</StyledTableCell>
                <StyledTableCell align="right">FG3A</StyledTableCell>
                <StyledTableCell align="right">FG3_PCT</StyledTableCell>
                <StyledTableCell align="right">FTM</StyledTableCell>
                <StyledTableCell align="right">FTA</StyledTableCell>
                <StyledTableCell align="right">FT_PCT</StyledTableCell>
                <StyledTableCell align="right">OREB</StyledTableCell>
                <StyledTableCell align="right">DREB</StyledTableCell>
                <StyledTableCell align="right">AST</StyledTableCell>
                <StyledTableCell align="right">STL</StyledTableCell>
                <StyledTableCell align="right">BLK</StyledTableCell>
                <StyledTableCell align="right">TOs</StyledTableCell>
                <StyledTableCell align="right">PF</StyledTableCell>
                <StyledTableCell align="right">PLUS_MINUS</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.value.map((item) => (
                <StyledTableRow key={item.SEASON}>
                  <StyledTableCell component="th" scope="row">
                    {item.SEASON}
                  </StyledTableCell>
                  <StyledTableCell align="right">{item.TEAM}</StyledTableCell>
                  <StyledTableCell align="right">{item.MIN}</StyledTableCell>
                  <StyledTableCell align="right">{item.PTS}</StyledTableCell>
                  <StyledTableCell align="right">{item.FGM}</StyledTableCell>
                  <StyledTableCell align="right">{item.FGA}</StyledTableCell>
                  <StyledTableCell align="right">{item.FG_PCT}</StyledTableCell>
                  <StyledTableCell align="right">{item.FG3M}</StyledTableCell>
                  <StyledTableCell align="right">{item.FG3A}</StyledTableCell>
                  <StyledTableCell align="right">
                    {item.FG3_PCT}
                  </StyledTableCell>
                  <StyledTableCell align="right">{item.FTM}</StyledTableCell>
                  <StyledTableCell align="right">{item.FTA}</StyledTableCell>
                  <StyledTableCell align="right">{item.FT_PCT}</StyledTableCell>
                  <StyledTableCell align="right">{item.OREB}</StyledTableCell>
                  <StyledTableCell align="right">{item.DREB}</StyledTableCell>
                  <StyledTableCell align="right">{item.AST}</StyledTableCell>
                  <StyledTableCell align="right">{item.STL}</StyledTableCell>
                  <StyledTableCell align="right">{item.BLK}</StyledTableCell>
                  <StyledTableCell align="right">{item.TOs}</StyledTableCell>
                  <StyledTableCell align="right">{item.PF}</StyledTableCell>
                  <StyledTableCell align="right">
                    {item.PLUS_MINUS}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    );
  }
}

export default StatsTable;
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
