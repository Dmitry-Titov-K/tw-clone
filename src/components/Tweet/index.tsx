import {
  Avatar,
  Badge,
  createStyles,
  Grid,
  IconButton,
  Paper,
  Typography,
  withStyles,
} from "@material-ui/core";
import ChatIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import classNames from "classnames";
import React from "react";
import { HomeStyles } from "../../styles/HomeStyle";

const StyledBadge = withStyles(() =>
  createStyles({
    badge: {
      right: -17,
      top: 11,
      border: `none`,
      padding: "0 4px",
    },
  })
)(Badge);

interface ITweetProps {
  text: string;
  user: {
    username: string;
    fullname: string;
    avatarUrl: string;
  };
  classes: ReturnType<typeof HomeStyles>;
}

export const Tweet: React.FC<ITweetProps> = ({
  classes,
  user,
  text,
}: ITweetProps): React.ReactElement => {
  return (
    <div>
      <Paper
        variant="outlined"
        className={classNames(
          classes.tweet,
          classes.tweetHeaderContent
        )}
      >
        <Grid container>
          <Grid item xs={1}>
            <Avatar />
          </Grid>
          <Grid item xs={11}>
            <Grid item container>
              <Typography
                className={classes.tweetTitle}
              >
                <b>{user.fullname}</b>
              </Typography>
              <Typography
                className={
                  (classes.tweetTitle,
                  classes.tweetTitleSubtitle)
                }
              >
                <span>@{user.username}</span>
                <span>7m</span>
              </Typography>
            </Grid>
            <Grid>
              <Typography
                className={classes.tweetTitle}
              >
                {text}
              </Typography>
              <Grid
                item
                xs={11}
                container
                className={
                  classes.tweetButtonSection
                }
                justify="space-between"
              >
                <span
                  className={
                    classes.tweetButtonComment
                  }
                >
                  <IconButton>
                    <ChatIcon fontSize="small" />
                  </IconButton>
                </span>
                <span
                  className={
                    classes.tweetButtonRetweet
                  }
                >
                  <IconButton>
                    <RepeatOutlinedIcon fontSize="small" />
                  </IconButton>
                </span>
                <span
                  className={
                    classes.tweetButtonLike
                  }
                >
                  <IconButton>
                    <StyledBadge badgeContent={3}>
                      <FavoriteBorderOutlinedIcon fontSize="small" />
                    </StyledBadge>
                  </IconButton>
                </span>
                <span
                  className={
                    classes.tweetButtonComment
                  }
                >
                  <IconButton>
                    <StyledBadge badgeContent={2}>
                      <ShareOutlinedIcon fontSize="small" />
                    </StyledBadge>
                  </IconButton>
                </span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
