import Avatar from "@material-ui/core/Avatar";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import CropOriginalOutlinedIcon from "@material-ui/icons/CropOriginalOutlined";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Typography from "@material-ui/core/Typography";
import React, { ReactElement } from "react";
import { HomeStyles } from "../../styles/HomeStyle";

interface IAddTweetForm {
  classes: ReturnType<typeof HomeStyles>;
  modal?: boolean;
}

export const AddTweetForm: React.FC<IAddTweetForm> = ({
  classes,
  modal = false,
}: IAddTweetForm): ReactElement => {
  const [text, setText] = React.useState<string>(
    ""
  );

  const MAX_LENGHT: number = 280;
  const textProcentCalc: number =
    (text.length / MAX_LENGHT) * 100;
  const textCounter = MAX_LENGHT - text.length;

  const textHandler = (
    e: React.FormEvent<HTMLTextAreaElement>
  ) => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };

  return (
    <Paper variant="outlined">
      <Grid container>
        <Grid
          item
          md={1}
          className={classes.addFormAvatar}
        >
          <Avatar>H</Avatar>
        </Grid>
        <Grid
          item
          style={{ padding: "5px 10px" }}
          md={11}
        >
          <TextareaAutosize
            onChange={textHandler}
            placeholder="Что происходит?"
            className={classes.addFormTextArea}
            rowsMin={modal ? 5 : 2}
            rowsMax={modal ? 6 : 8}
          />
          <Divider />
          <Grid
            item
            container
            justify="space-between"
            style={{ paddingTop: "7px" }}
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
                    fontSize: "14px",
                  }}
                >
                  {textCounter}
                </Typography>
              </Grid>
              <Grid item>
                <CircularProgress
                  variant="determinate"
                  disableShrink
                  value={
                    text.length >= MAX_LENGHT
                      ? 100
                      : textProcentCalc
                  }
                  style={
                    text.length >= MAX_LENGHT
                      ? { color: "red" }
                      : undefined
                  }
                  thickness={4}
                  size={20}
                />
              </Grid>

              <Divider
                component="span"
                className={classes.addFormDivider}
                orientation="vertical"
                light={true}
              />

              <Grid item>
                <Button
                  disabled={
                    text.length > MAX_LENGHT
                  }
                  className={
                    classes.addFormTweetButton
                  }
                  color="primary"
                  onChange={() => textHandler}
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
  );
};
