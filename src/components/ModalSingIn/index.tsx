import React from "react";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Dialog from "@material-ui/core/Dialog";
import { useStylesSignIn } from "../../pages/Singin";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TwitterIcon from "@material-ui/icons/Twitter";

import {
  FormControl,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";

interface IRegisterProps {
  classes: ReturnType<typeof useStylesSignIn>;
  onClose: () => void;
  visible?: boolean;
}
const ModalSingIn: React.FC<IRegisterProps> = ({
  classes,
  onClose,
  visible = false,
}: IRegisterProps): React.ReactElement | null => {
  if (!visible) {
    return null;
  }
  return (
    <Dialog
      open={visible}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        <TwitterIcon color="secondary" />
        <div
          className={classes.dialogTitleWrapper}
        ></div>
        <Typography
          variant="h4"
          color="secondary"
        >
          Войти в Твиттер
        </Typography>
      </DialogTitle>
      <DialogContent className={classes.root}>
        <FormControl
          className={classes.dialogDateBlockSpace}
          variant="standard"
          fullWidth
        >
          <TextField
            id="custom-css-standard-input"
            label="Номер телефона,адрес электронной почты"
            fullWidth
            autoComplete={"none"}
          />
        </FormControl>
        <FormControl variant="standard" fullWidth>
          <TextField
            id="custom-css-standard-input"
            label="Пароль"
            fullWidth
          />
        </FormControl>
        <FormControl variant="standard" fullWidth>
          <Button
            className={classes.dialogButtonMargin}
            size="medium"
            color="primary"
            variant="contained"
          >
            Войти
          </Button>
        </FormControl>
      </DialogContent>
    </Dialog>
  );
};

export default ModalSingIn;
