import {
  blue,
  grey,
} from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: grey[50],
      dark: grey[600],
    },
  },

  props: {
    MuiTypography: {
      color: "secondary",
    },
    MuiLink: {
      underline: "none",
      variant: "h6",
      color: "textPrimary",
    },
    MuiNativeSelect: {
      IconComponent: ExpandMoreIcon,
    },
    MuiButton: {
      disableRipple: true,
    },
    MuiInput: {
      disableUnderline: true,
    },
  },
});

theme.overrides = {
  MuiListItem: {
    gutters: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  MuiMenu: {
    list: {
      color: theme.palette.secondary.main,
    },
  },
  MuiNativeSelect: {
    icon: {
      color: theme.palette.secondary.main,
    },
  },
  MuiDialog: {
    paper: {
      minWidth: "600px",
      borderRadius: 15,
    },
  },
  MuiDivider: {
    root: {
      backgroundColor: "rgba(148,148,148,0.2)",
    },
  },
  MuiTypography: {
    body2: {
      fontWeight: 800,
    },
    h1: {
      color: "white",
      fontWeight: 800,
    },
    h2: {
      color: "white",
      fontWeight: 800,
    },
    h3: {
      color: "white",
      fontWeight: 900,
    },
    h4: {
      color: "white",
      fontWeight: 900,
    },
    h6: {
      color: "white",
      fontWeight: 900,
    },
    subtitle2: {
      color: grey[500],
    },
  },
  MuiPaper: {
    root: {
      borderRadius: 30,
      backgroundColor: "black",
    },
  },
  MuiBackdrop: {
    root: {
      backgroundColor: "rgba(91, 112, 131, 0.4)",
    },
  },
  MuiOutlinedInput: {
    input: {
      padding: "12px 14px",
    },
    root: {
      borderRadius: 30,
      backgroundColor: "rgba(32, 35, 39, 1);",
      padding: 0,
    },
  },
  MuiInput: {
    formControl: {
      marginTop: "0px ! important",
    },
    root: {
      paddingTop: 20,
      marginTop: 0,
      border: `1px solid ${theme.palette.secondary.dark}`,
      borderRadius: 4,
      "&$focused": {
        border: `1px solid ${theme.palette.primary.main}`,
      },
    },
  },
  MuiInputBase: {
    input: {
      paddingLeft: 10,
      color: "white ",
    },
  },
  MuiInputLabel: {
    root: {
      shrink: true,
      color: "rgb(131 131 131)",
    },
    formControl: {
      shrink: true,
      left: 10,
      top: 3,
    },
  },
  MuiFormLabel: {},
  MuiButton: {
    contained: {
      "&$disabled": {
        backgroundColor: blue[800],
        color: "#9e9e9e",
      },
    },
    textPrimary: {
      "&:hover": {
        backgroundColor: "none",
      },
    },
    text: {
      padding: `${theme.spacing(
        0
      )}px ${theme.spacing(2)}px`,
    },
    root: {
      borderRadius: 30,
      textTransform: "none",
      fontSize: 16,
      height: 50,
    },
  },
};
export default theme;
