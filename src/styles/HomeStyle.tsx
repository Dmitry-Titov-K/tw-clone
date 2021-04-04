import { makeStyles } from "@material-ui/core/styles";

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
  tweetLoader: {
    marginTop: 50,
    textAlign: "center",
  },
  tweetButtonSection: {
    paddingTop: 10,
  },
}));
