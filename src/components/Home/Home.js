import React, { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";

import useStyles from "./styles";
import { createItem, fetchItems } from "../../api/index";
import { Upload } from "../Upload/Upload";
import Resume from "../Resume/Resume";
import Templates from "../Templates/Templates";
// import ejs from "ejs";
// let ejs = require("ejs");

const Home = () => {
  const classes = useStyles();

  const [item, setItem] = useState([]);

  const getItems = async () => {
    const itemsFromServer = await fetchItems();
    setItem(itemsFromServer.data);
  };

  useEffect(() => {
    getItems();
  }, []);

  const addItem = async (item) => {
    await createItem(item);
    const itemsFromServer = await fetchItems();
    setItem(itemsFromServer.data);
  };

  // let html = ejs.render("<%= basics.name; %>", { basics: item[0].basics });

  return (
    <Container>
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
              <Upload addItem={addItem} />
            </Typography>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Home;
