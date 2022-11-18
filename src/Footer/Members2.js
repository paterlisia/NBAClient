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

export default function Members2() {
  return (
    <List
      style={flexContainer}
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Bluepossibility"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="secondary"
              >
                <Link
                  color="secondary"
                  href="https://github.com/Bluepossibility"
                >
                  https://github.com/Bluepossibility
                </Link>
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Ekko-Hu"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="secondary"
              >
                <Link color="secondary" href="https://github.com/Ekko-Hu">
                  https://github.com/Ekko-Hu
                </Link>
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
