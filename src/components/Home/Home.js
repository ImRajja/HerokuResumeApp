import React, { useState, useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";

import useStyles from "./styles";
import {
  fetchItems,
  createItem,
  updateItem,
  deleteItem,
} from "../../api/index";
import { Upload } from "../Upload/Upload";
import Resume from "../Resume/Resume";
import Templates from "../Templates/Templates";
// import ejs from "ejs";
// let ejs = require("ejs");

const Home = ({ user }) => {


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

    await createItem(item, user);
    const itemsFromServer = await fetchItems(user);
    setItem(itemsFromServer.data);
  };

  const editItem = async (id, item, user) => {
    await updateItem(id, item, user);
    const itemsFromServer = await fetchItems(user);
    setItem(itemsFromServer.data);
  };

  const removeItem = async (id, user) => {
    await deleteItem(id, user);
    const itemsFromServer = await fetchItems(user);
    setItem(itemsFromServer.data);
  };
  return (
    <Container className={classes.homeContainer} maxWidth={false}>
      {item.length > 0 ? (
        // <Resume resume={item[0]} />
        <Templates
          resumeIn={item[0]}
          editItem={editItem}
          user={user}
          removeItem={removeItem}
        />
      ) : (
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.noTodos}
          style={{ backgroundColor: "white" }}
        >
          <Grid item>
            <Typography variant="h5">
              <ul>
                <li>
                  <h1>Export json resume from LinkedIn</h1>
                </li>
                <ol>
                  <li>
                    Install chrome extension{" "}
                    <a
                      href="https://chrome.google.com/webstore/detail/json-resume-exporter/caobgmmcpklomkcckaenhjlokpmfbdec"
                      target="_blank"
                    >
                      JSON Resume Exporter
                    </a>{" "}
                  </li>
                  <li>Login to LinkedIn</li>
                  <li>Go to your profile</li>
                  <li>Export json resume using installed chrome extension</li>

                  <li>Import</li>
                </ol>
                <li>
                  <h1>Import your json resume</h1>
                </li>
                <li>
                  <Upload addItem={addItem} user={user} />
                </li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Home;
