import React, { useState } from "react";
import TwitterIcon from "@material-ui/icons/Twitter";

import Button from "@material-ui/core/Button";

import {
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

import backgroundIcon from "../assets/img/bg.png";
import {
  ModalRegister,
  ModalSingIn,
} from "../components";

export const useStylesSignIn = makeStyles(
  (theme) => ({
    root: {
      "& .MuiTextField-root": {
        marginBottom: theme.spacing(4),
      },
    },
    loginSideButton: {
      maxWidth: "380px",
      width: "100%",
      marginBottom: 20,
    },
    loginSide: {
      height: "100%",
      backgroundColor: "black",
      overflow: "hidden",
    },
    loginSideTwitterIcon: {
      fontSize: 45,
    },
    loginSideWrapper: {
      padding: 35,
      position: "relative",
      width: "100%",
      minWidth: "437px",
      maxWidth: "760px",
      height: "100%",
    },
    loginSideTitle: {
      fontWeight: 700,
      marginBottom: 45,
      marginTop: 30,
    },
    loginSideSubTitle: {
      marginBottom: 40,
    },
    dialogDateBlockSpace: {
      paddingRight: theme.spacing(2),
    },
    dialogDateBlock: {
      display: "flex",
    },
    dialogButtonMargin: {
      marginBottom: theme.spacing(4),
    },
    dialogTitleWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      marginBottom: theme.spacing(2),
    },
    dialogTitleButton: {
      height: 30,
    },
    dialogTitleIcon: {
      top: 10,
      left: "50%",
      transform: "translateX(-50%)",
      fontSize: 32,
      position: "absolute",
    },
    wrapper: {
      height: "100vh",
    },
    blueSide: {
      width: "100%",
      height: "100vh",
      background: `url(${backgroundIcon}) no-repeat center center`,

      backgroundSize: "cover",
      backgroundColor: "#1DA1F2",
    },
    blueSideWrapper: {
      width: "100%",
      height: "100%",
    },
    blueSideIcon: {
      position: "relative",
      color: "white",
      width: "100%",
      height: "100%",
      maxWidth: "65%",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    },
  })
);

export const Singin = () => {
  const classes = useStylesSignIn();
  const [
    visibleModal,
    setVisibleModal,
  ] = useState<"singIn" | "singUp">();

  const handleOpenSingIn = (): void => {
    setVisibleModal("singIn");
  };
  const handleOpenSingUp = (): void => {
    setVisibleModal("singUp");
  };
  const handleClose = (): void => {
    setVisibleModal(undefined);
  };
  return (
    <>
      <Grid
        container
        alignItems="center"
        className={classes.wrapper}
        direction="row-reverse"
      >
        <Grid
          item
          md={9}
          lg={7}
          className={classes.loginSide}
          container
        >
          <Grid
            item
            container
            alignItems="flex-start"
            justify="center"
            direction="column"
            wrap="nowrap"
            className={classes.loginSideWrapper}
          >
            <Grid item>
              <TwitterIcon
                color="secondary"
                className={
                  classes.loginSideTwitterIcon
                }
              />
            </Grid>
            <Grid item>
              <Typography
                className={classes.loginSideTitle}
                variant="h2"
                color="secondary"
              >
                В курсе происходящего
              </Typography>
              <Typography
                variant="h4"
                color="secondary"
                gutterBottom
                className={
                  classes.loginSideSubTitle
                }
              >
                Присоединяйтесь к Твиттеру прямо
                сейчас!
              </Typography>
              <Grid>
                <Button
                  className={
                    classes.loginSideButton
                  }
                  variant="contained"
                  color="primary"
                  onClick={handleOpenSingIn}
                >
                  <b>Зарегестрироваться</b>
                </Button>
              </Grid>
              <Grid>
                <Button
                  className={
                    classes.loginSideButton
                  }
                  variant="outlined"
                  color="primary"
                  onClick={handleOpenSingUp}
                >
                  Войти
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          md={3}
          lg={5}
          justify="center"
          alignItems="center"
          className={classes.blueSide}
        >
          <Grid
            item
            className={classes.blueSideWrapper}
          >
            <TwitterIcon
              className={classes.blueSideIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      <ModalRegister
        title="Зарегестрируйте аккаунт"
        classes={classes}
        onClose={handleClose}
        visible={visibleModal === "singIn"}
      ></ModalRegister>
      <ModalSingIn
        classes={classes}
        visible={visibleModal === "singUp"}
        onClose={handleClose}
      />
    </>
  );
};
