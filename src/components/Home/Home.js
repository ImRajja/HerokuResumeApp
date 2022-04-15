import React, { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";

import useStyles from "./styles";
import { createItem, fetchItems } from "../../api/index";
import { Upload } from "../Upload/Upload";
import Resume from "../Resume/Resume";
import Templates from "../Templates/Templates";
// import ejs from "ejs";
// let ejs = require("ejs");

const Home = ({ user }) => {
  console.log("user----inside hometop--st");
  console.log(user.result.email);
  console.log("user----inside hometop--end");

  const classes = useStyles();

  const [item, setItem] = useState([]);

  const getItems = async (user) => {
    const itemsFromServer = await fetchItems(user);
    setItem(itemsFromServer.data);
  };

  useEffect(() => {
    getItems(user);
  }, []);

  const addItem = async (item, user) => {
    console.log("user----inside home");
    console.log(user);
    await createItem(item, user);
    const itemsFromServer = await fetchItems(user);
    setItem(itemsFromServer.data);
  };

  // let html = ejs.render("<%= basics.name; %>", { basics: item[0].basics });

  return (
    <Container className={classes.homeContainer} maxWidth={false}>
      {item.length > 0 ? (
        // <Resume resume={item[0]} />
        <Templates resume={item[0]} />
      ) : (
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.noTodos}
        >
          <Grid item>
            <Typography variant="h5">
              This feels empty.
              <Upload addItem={addItem} user={user} />
            </Typography>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Home;
