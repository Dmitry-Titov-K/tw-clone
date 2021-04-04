import { makeStyles } from "@material-ui/core/styles";
export const ModalStyles = makeStyles(() => ({
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
  modalPadding: {
    padding: 0,
  },
}));
