import {
  Container,
  Grid,
  InputAdornment,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import CropOriginalOutlinedIcon from "@material-ui/icons/CropOriginalOutlined";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { SideBarMenu } from "../components/SideBarMenu";
import { Tweet } from "../components/Tweet";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export const HomeStyles = makeStyles(() => ({
  rightSideDivider: {
    backgroundColor: "rgba(148,148,148,0.3)",
    width: "100%",
  },
  rightSideList: {
    "&:hover": {
      backgroundColor: "rgba(39,39,39,1)",
    },
  },
  rightSideTrands: {
    cursor: "pointer",
    marginTop: 30,
    backgroundColor: "rgba(22,23,28,1)",
    borderRadius: 15,
    "& p": {
      padding: "0px 10px",
    },
    "& h6": {
      padding: "0px 10px",
    },
  },
  sideBarMenuWrapper: {
    position: "fixed",
    top: 0,
  },
  sideBarMenuButton: {
    width: "90%",
  },
  tweet: {
    cursor: "pointer",
    "&:hover": {
      background: "rgba(31, 31, 31, 1);",
    },
  },
  tweetWrapper: {
    height: "100%",
    borderRadius: 0,
    borderTop: 0,
    borderBottom: 0,
    borderColor: "rgba(255,255,255,0.20)",
  },
  tweetHeader: {
    position: "sticky",
    top: 0,
    zIndex: 2,
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderRadius: 0,
    borderColor: "rgba(255,255,255,0.20)",
    padding: "10px 15px",
  },
  tweetHeaderContent: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderRadius: 0,
    borderColor: "rgba(255,255,255,0.20)",
    padding: "10px 15px",
  },
  searchInput: {
    paddingTop: 5,
    "& :last-child": {
      color: "rgb(110, 118, 125)",
    },
    "& .Mui-focused": {
      backgroundColor: "transparent",
      "& :last-child": {
        color: "rgba(29,161,242,1.00)",
      },
    },
  },
  addFormProgress: {
    position: "relative",
    right: 20,
    top: 5,
  },
  addFormProgressTitle: {
    position: "relative",
    left: " -60px",
    top: "31px",
    fontSize: "14px",
  },
  addFormDivider: {
    height: "60%",
    backgroundColor: "rgba(148,148,148,0.3)",
  },
  addFormAvatar: {
    padding: "10px 15px",
  },
  addFormTweetButton: {
    fontSize: 14,
    height: "40px",
  },
  addFormTextArea: {
    padding: "15px 10px",
    color: "white",
    resize: "none",
    width: "100%",
    border: 0,
    outline: "none",
    backgroundColor: "transparent",
    fontFamily: "inherit",
    fontSize: 20,
  },
  addFormDivided: {
    height: "12px",
    width: "100%",
    background: "rgba(15, 15, 15, 1);",
    borderTop: "1px solid rgb(47, 51, 54);",
    borderBottom: '1px solid rgb(47, 51, 54);"',
  },
  linkStyle: {
    "&:hover": {
      color: "#2196F3",
    },
  },
  homeIcon: {
    fontSize: 32,
  },
  homeButtons: {
    padding: "20px 0px",
  },
  homeIconSize: {
    color: "white",
    "&:hover": {
      backgroundColor:
        "rgba(171, 166, 242, 0.1);",
      color: "#2196F3",
      "& :last-child": {
        color: "#2196F3",
      },
    },

    "& .MuiButton-iconSizeMedium ": {
      "& :first-child": { fontSize: 30 },
    },
  },
  rightSection: {
    position: "sticky",
    top: 0,
    padding: "0px 20px",
  },
  tweetTitle: {
    padding: "0px 10px",
  },
  tweetTitleSubtitle: {
    color: "rgb(110, 118, 125)",
  },
  tweetButtonComment: {
    "& .MuiIconButton-root": {
      color: "rgba(110, 118, 125, 1);",
    },
    "& :hover": {
      color: "rgba(29,161,242,1)",
    },
    "& .MuiIconButton-root:hover": {
      backgroundColor: "rgba(29,161,242,0.1)",
    },
  },
  tweetButtonRetweet: {
    "& .MuiIconButton-root": {
      color: "rgba(110, 118, 125, 1);",
    },
    "& :hover": {
      color: "rgba(80, 255, 10, 1);",
    },
    "& .MuiIconButton-root:hover": {
      backgroundColor: "rgba(80, 255, 10, 0.1)",
    },
  },
  tweetButtonLike: {
    "& .MuiIconButton-root": {
      color: "rgba(110, 118, 125, 1);",
    },

    "& .MuiIconButton-root:hover  ": {
      backgroundColor: "rgba(207, 33, 128, 0.1);",
      color: "rgba(207, 33, 128, 1);",
    },
  },
  tweetButtonSection: {
    paddingTop: 10,
  },
}));

export const Home = () => {
  const classes = HomeStyles();
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item sm={1} md={3}>
          <SideBarMenu classes={classes} />
        </Grid>
        <Grid item sm={8} md={6}>
          <Paper
            className={classes.tweetWrapper}
            variant="outlined"
          >
            <Paper
              className={classes.tweetHeader}
              variant="outlined"
            >
              <Typography variant="h6">
                Главная
              </Typography>
            </Paper>
            <Paper variant="outlined">
              <Grid container>
                <Grid
                  item
                  md={1}
                  className={
                    classes.addFormAvatar
                  }
                >
                  <Avatar>H</Avatar>
                </Grid>
                <Grid
                  item
                  style={{ padding: "5px 10px" }}
                  md={11}
                >
                  <TextareaAutosize
                    placeholder="Что происходит?"
                    className={
                      classes.addFormTextArea
                    }
                  />
                  <Grid
                    item
                    container
                    justify="space-between"
                  >
                    <Grid item md={8}>
                      <IconButton color="primary">
                        <CropOriginalOutlinedIcon />
                      </IconButton>
                      <IconButton color="primary">
                        <SentimentSatisfiedOutlinedIcon />
                      </IconButton>
                    </Grid>
                    <Grid
                      item
                      md={4}
                      container
                      alignItems="center"
                      justify="space-between"
                    >
                      <Grid item>
                        <Typography
                          style={{
                            fontSize: "14PX",
                          }}
                        >
                          280
                        </Typography>
                      </Grid>
                      <Grid item>
                        <CircularProgress
                          variant="determinate"
                          disableShrink
                          value={80}
                          thickness={4}
                          size={20}
                        />
                      </Grid>

                      <Divider
                        className={
                          classes.addFormDivider
                        }
                        orientation="vertical"
                        light={true}
                      />

                      <Grid item>
                        <Button
                          className={
                            classes.addFormTweetButton
                          }
                          color="primary"
                          variant="contained"
                        >
                          Тивитнуть
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            <div
              className={classes.addFormDivided}
            ></div>
            <Tweet
              classes={classes}
              user={{
                fullname: "Glafira Zhur",
                username: "GlafiraZhur",
                avatarUrl: "null",
              }}
              text="in conclusion i would like to thank this army for being so openly herself and confident that it put bts at ease - they were able to comfortably laugh and dance along with her. if anyone had to meet bangtan after a year, i’m glad it was this precious army. she really did us proud!"
            />
            <Tweet
              classes={classes}
              user={{
                fullname: "Glafira Zhur",
                username: "GlafiraZhur",
                avatarUrl: "null",
              }}
              text="in conclusion i would like to thank this army for being so openly herself and confident that it put bts at ease - they were able to comfortably laugh and dance along with her. if anyone had to meet bangtan after a year, i’m glad it was this precious army. she really did us proud!"
            />
            <Tweet
              classes={classes}
              user={{
                fullname: "Glafira Zhur",
                username: "GlafiraZhur",
                avatarUrl: "null",
              }}
              text="in conclusion i would like to thank this army for being so openly herself and confident that it put bts at ease - they were able to comfortably laugh and dance along with her. if anyone had to meet bangtan after a year, i’m glad it was this precious army. she really did us proud!"
            />
            <Tweet
              classes={classes}
              user={{
                fullname: "Glafira Zhur",
                username: "GlafiraZhur",
                avatarUrl: "null",
              }}
              text="in conclusion i would like to thank this army for being so openly herself and confident that it put bts at ease - they were able to comfortably laugh and dance along with her. if anyone had to meet bangtan after a year, i’m glad it was this precious army. she really did us proud!"
            />
            <Tweet
              classes={classes}
              user={{
                fullname: "Glafira Zhur",
                username: "GlafiraZhur",
                avatarUrl: "null",
              }}
              text="in conclusion i would like to thank this army for being so openly herself and confident that it put bts at ease - they were able to comfortably laugh and dance along with her. if anyone had to meet bangtan after a year, i’m glad it was this precious army. she really did us proud!"
            />
            <Tweet
              classes={classes}
              user={{
                fullname: "Glafira Zhur",
                username: "GlafiraZhur",
                avatarUrl: "null",
              }}
              text="in conclusion i would like to thank this army for being so openly herself and confident that it put bts at ease - they were able to comfortably laugh and dance along with her. if anyone had to meet bangtan after a year, i’m glad it was this precious army. she really did us proud!"
            />
            <Tweet
              classes={classes}
              user={{
                fullname: "Glafira Zhur",
                username: "GlafiraZhur",
                avatarUrl: "null",
              }}
              text="in conclusion i would like to thank this army for being so openly herself and confident that it put bts at ease - they were able to comfortably laugh and dance along with her. if anyone had to meet bangtan after a year, i’m glad it was this precious army. she really did us proud!"
            />{" "}
            <Tweet
              classes={classes}
              user={{
                fullname: "Glafira Zhur",
                username: "GlafiraZhur",
                avatarUrl: "null",
              }}
              text="in conclusion i would like to thank this army for being so openly herself and confident that it put bts at ease - they were able to comfortably laugh and dance along with her. if anyone had to meet bangtan after a year, i’m glad it was this precious army. she really did us proud!"
            />
          </Paper>
        </Grid>
        <Grid
          className={classes.rightSection}
          item
          xs={3}
        >
          <div
            style={{ position: "sticky", top: 0 }}
          >
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
            <Paper
              className={classes.rightSideTrands}
            >
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
                  className={
                    classes.rightSideDivider
                  }
                />
                <ListItem
                  component="li"
                  className={
                    classes.rightSideList
                  }
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
                  className={
                    classes.rightSideDivider
                  }
                />
                <ListItem
                  component="li"
                  className={
                    classes.rightSideList
                  }
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
                  className={
                    classes.rightSideDivider
                  }
                />
                <ListItem
                  component="li"
                  className={
                    classes.rightSideList
                  }
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
                  className={
                    classes.rightSideDivider
                  }
                />
              </List>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
