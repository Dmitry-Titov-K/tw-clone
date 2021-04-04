import React from "react";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Dialog from "@material-ui/core/Dialog";
import { useStylesSignIn } from "../../pages/Singin";
import DialogContent from "@material-ui/core/DialogContent";

import DialogTitle from "@material-ui/core/DialogTitle";
import TwitterIcon from "@material-ui/icons/Twitter";
import NativeSelect from "@material-ui/core/NativeSelect";
import {
  DialogContentText,
  FormControl,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";

interface IRegisterProps {
  title: string;
  onClose: () => void;

  classes: ReturnType<typeof useStylesSignIn>;
  visible?: boolean;
}
const ModalRegister: React.FC<IRegisterProps> = ({
  title,
  onClose,

  classes,
  visible = false,
}: IRegisterProps): React.ReactElement | null => {
  const [age, setAge] = React.useState<string>(
    ""
  );
  const [
    month,
    setMonth,
  ] = React.useState<unknown>("");
  const [day, setDay] = React.useState<string>(
    ""
  );

  const handleChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setAge(event.target.value as string);
  };
  const handleChangeDay = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setDay(event.target.value as string);
  };
  const handleChangeMonth = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setMonth(event.target.value as string);
  };
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
        <TwitterIcon
          className={classes.dialogTitleIcon}
          color="secondary"
        />
        <div
          className={classes.dialogTitleWrapper}
        >
          <Button
            className={classes.dialogTitleButton}
            variant="contained"
            color="primary"
            disabled
          >
            Далее
          </Button>
        </div>
        <Typography
          variant="h5"
          color="secondary"
        >
          {title}
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
            label="Имя"
            fullWidth
          />
        </FormControl>
        <FormControl variant="standard" fullWidth>
          <TextField
            id="custom-css-standard-input"
            label="Адрес электронной почты"
            fullWidth
          />
        </FormControl>
        <Link
          component="button"
          variant="body1"
          color="primary"
        >
          Использовать телефон
        </Link>
        <Typography
          variant="h6"
          color="secondary"
        >
          Дата рождения
        </Typography>
        <DialogContentText color="textSecondary">
          <Typography variant="subtitle2">
            Эта информация не будет общедоступной.
            Подтвердите свой возраст, даже если
            эта учетная запись предназначена для
            компании, домашнего животного и т. д.
          </Typography>
          <Grid container sm={12} md={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item spacing={2} xs md={6}>
                <FormControl
                  variant="standard"
                  fullWidth
                >
                  <InputLabel
                    shrink={true}
                    id="demo-controlled-open-select-label"
                  >
                    Месяц
                  </InputLabel>
                  <NativeSelect
                    id="demo-controlled-open-select"
                    value={month}
                    onChange={handleChangeMonth}
                    inputProps={{}}
                  >
                    <option
                      aria-label="None"
                      value=""
                    />
                    <option value={10}>
                      Ten
                    </option>
                    <option value={20}>
                      Twenty
                    </option>
                    <option value={30}>
                      Thirty
                    </option>
                  </NativeSelect>
                </FormControl>
              </Grid>
              <Grid item md={3}>
                <FormControl
                  variant="standard"
                  fullWidth
                >
                  <InputLabel
                    shrink={true}
                    id="demo-controlled-open-select-label"
                  >
                    День
                  </InputLabel>
                  <NativeSelect
                    id="demo-controlled-open-select"
                    type="month"
                    value={day}
                    onChange={handleChangeDay}
                  >
                    <option
                      aria-label="None"
                      value=""
                    />
                    <option value={10}>
                      Ten
                    </option>
                    <option value={20}>
                      Twenty
                    </option>
                    <option value={30}>
                      Thirty
                    </option>
                  </NativeSelect>
                </FormControl>
              </Grid>
              <Grid item md={3}>
                <FormControl
                  variant="standard"
                  fullWidth
                >
                  <InputLabel
                    shrink={true}
                    id="demo-controlled-open-select-label"
                  >
                    Год
                  </InputLabel>
                  <NativeSelect
                    id="demo-controlled-open-select"
                    value={age}
                    onChange={handleChange}
                    inputProps={{}}
                  >
                    <option
                      aria-label="None"
                      value=""
                    />
                    <option value={10}>
                      Ten
                    </option>
                    <option value={20}>
                      Twenty
                    </option>
                    <option value={30}>
                      Thirty
                    </option>
                  </NativeSelect>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default ModalRegister;
