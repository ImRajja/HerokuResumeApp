import React from "react";
import { Grid, Typography } from "@material-ui/core";

import useStyles from "./styles";

const NotSignedIn = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Grid item>
        <Typography variant="h5">Please sign in first.</Typography>
      </Grid>
    </Grid>
  );
};

export default NotSignedIn;
