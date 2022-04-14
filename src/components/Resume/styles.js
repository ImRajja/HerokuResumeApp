import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  keyvalue: {
    display: "flex",
    flexDirection: "row",
  },

  key: {
    minWidth: "200px",
    textAlign: "right",
  },

  noTodos: {
    minHeight: "67vh",
  },
}));
