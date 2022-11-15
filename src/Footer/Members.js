import * as React from "react";
import {
  Typography,
  ListItemText,
  ListItem,
  Divider,
  List,
  Link,
} from "@material-ui/core";

const flexContainer = {
  display: "flex",
  flexDirection: "row",
  padding: 0,
};

export default function Members() {
  return (
    <List
      style={flexContainer}
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Joanna"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="secondary"
              >
                <Link color="secondary" href="https://github.com/paterlisia">
                  https://github.com/paterlisia
                </Link>
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Yaannnik"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="secondary"
              >
                <Link color="secondary" href="https://github.com/yaannnik">
                  https://github.com/yaannnik
                </Link>
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Jiashu Chen"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="secondary"
              >
                <Link color="secondary" href="https://github.com/Jiashu0326">
                  https://github.com/Jiashu0326
                </Link>
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>

      <br />
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="MiracleLinzzz"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="secondary"
              >
                <Link color="secondary" href="https://github.com/MiracleLinzzz">
                  https://github.com/MiracleLinzzz
                </Link>
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
