import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
    marginTop: "30px",
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom: "20px",
  },
}));
