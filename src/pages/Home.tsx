import {
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

import React, { useEffect } from "react";

import { SideBarMenu } from "../components/SideBarMenu";
import { Tweet } from "../components/Tweet";
import CircularProgress from "@material-ui/core/CircularProgress";
import { HomeStyles } from "../styles/HomeStyle";
import { AddTweetForm } from "../components/AddTweetForm";
import { RightSideBar } from "../components/RightSideBar";
import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  selectIsTweetsLoading,
  selectTweetsItems,
} from "../store/ducks/tweets/selectors";
import { fetchTweets } from "../store/ducks/tweets/actionCreators";

export const Home = () => {
  const dispatch = useDispatch();
  const classes = HomeStyles();
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(
    selectIsTweetsLoading
  );

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

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
            <AddTweetForm
              classes={classes}
              modal={false}
            />
            <div
              className={classes.addFormDivided}
            ></div>
            {
              //@ts-ignore
              isLoading ? (
                <div
                  className={classes.tweetLoader}
                >
                  <CircularProgress />
                </div>
              ) : (
                tweets.map((tweet) => (
                  <Tweet
                    key={tweet._id}
                    classes={classes}
                    user={tweet.user}
                    text={tweet.text}
                  />
                ))
              )
            }
          </Paper>
        </Grid>
        <Grid
          className={classes.rightSection}
          item
          xs={3}
        >
          <RightSideBar classes={classes} />
        </Grid>
      </Grid>
    </Container>
  );
};
