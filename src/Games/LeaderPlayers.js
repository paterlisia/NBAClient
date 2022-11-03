import * as React from "react";
import Box from '@mui/material/Box';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function LeaderPlayers() {
  return (
    <Box sx={{ width: "100%", maxWidth: 200, bgcolor: "background.paper" }}>
        <br/>
      <Typography
        component="div"
        color="text.primary"
        align="center"
      >
        GAME LEADERS
      </Typography>
      <br/>
      <Divider />
      <List sx={{ width: "100%", maxWidth: 200, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Kristaps Porzingis"
              src="/static/images/avatar/1.jpg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Kristaps Porzingis"
            secondary={
              <React.Fragment>
                {"WAS | #6 |F-C"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="James Hardon" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="James Hardon"
            secondary={
              <React.Fragment>
                {"PHI | #1 | G"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
}
