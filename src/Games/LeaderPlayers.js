import * as React from "react";
import Box from '@mui/material/Box';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function LeaderPlayers(props) {
    const {
        player
      } = props;
  return (
    <Box sx={{ width: "100%", maxWidth: 200, bgcolor: "background.paper" }}>
        <br/>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt={player[0].mvp.name}
              src="/static/images/avatar/1.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary={player[0].mvp.name}
            secondary={
              <React.Fragment>
                {player[0].name} | {player[0].mvp.pts}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={player[1].mvp.name} src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={player[1].mvp.name}
            secondary={
              <React.Fragment>
                {player[1].name} | {player[1].mvp.pts}
              </React.Fragment>
            }
          />
        </ListItem>
    </Box>
  );
}