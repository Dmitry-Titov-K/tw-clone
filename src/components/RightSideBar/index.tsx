import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React, { ReactElement } from "react";
import { HomeStyles } from "../../styles/HomeStyle";

interface IRightSideBar {
  classes: ReturnType<typeof HomeStyles>;
}

export const RightSideBar: React.FC<IRightSideBar> = ({
  classes,
}: IRightSideBar): ReactElement => {
  return (
    <div style={{ position: "sticky", top: 0 }}>
      <TextField
        className={classes.searchInput}
        type="search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        placeholder="поиск в Твиттере"
        id="outlined-basic"
        variant="outlined"
      />
      <Paper className={classes.rightSideTrands}>
        <List
          component="nav"
          aria-label="secondary mailbox folders"
        >
          <ListItem style={{ padding: 0 }}>
            <ListItemText>
              <Typography variant="h6">
                Актуальные темы
              </Typography>
            </ListItemText>
          </ListItem>
          <Divider
            className={classes.rightSideDivider}
          />
          <ListItem
            component="li"
            className={classes.rightSideList}
          >
            <ListItemText>
              <Typography variant="body2">
                Актуальные темы
              </Typography>
              <Typography
                variant="subtitle2"
                className={
                  classes.tweetTitleSubtitle
                }
              >
                Твитов: 3 331
              </Typography>
            </ListItemText>
            <ListItemText />
          </ListItem>
          <Divider
            className={classes.rightSideDivider}
          />
          <ListItem
            component="li"
            className={classes.rightSideList}
          >
            <ListItemText>
              <Typography variant="body2">
                Актуальные темы
              </Typography>
              <Typography
                variant="subtitle2"
                className={
                  classes.tweetTitleSubtitle
                }
              >
                Твитов: 3 331
              </Typography>
            </ListItemText>
            <ListItemText />
          </ListItem>
          <Divider
            className={classes.rightSideDivider}
          />
          <ListItem
            component="li"
            className={classes.rightSideList}
          >
            <ListItemText>
              <Typography variant="body2">
                Актуальные темы
              </Typography>
              <Typography
                variant="subtitle2"
                className={
                  classes.tweetTitleSubtitle
                }
              >
                Твитов: 3 331
              </Typography>
            </ListItemText>
            <ListItemText />
          </ListItem>
          <Divider
            className={classes.rightSideDivider}
          />
        </List>
      </Paper>
    </div>
  );
};
