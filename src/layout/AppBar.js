import { AppBar } from "react-admin";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/logo.svg";

const useStyles = makeStyles({
  title: {
    flex: 1,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  spacer: {
    flex: 1,
  },
  imageStyle: {
    height: 55,
    width: 200,
  },
  header: {
    background: "#f7f7f7",
    color: "#072d40",
    boxShadow: "0px 2px 10px 2px rgb(0 0 0 / 10%)",
    visibility: "inherit !important",
    transform: "translateY(0px) !important",
  },
});

const CustomAppBar = (props) => {
  const classes = useStyles();
  return (
    <AppBar {...props} elevation={1} className={classes.header}>
      <Typography
        variant="h6"
        color="inherit"
        className={classes.title}
        id="react-admin-title"
      />
      <img src={logo} alt="Logo" className={classes.imageStyle} />

      <span className={classes.spacer} />
    </AppBar>
  );
};

export default CustomAppBar;
