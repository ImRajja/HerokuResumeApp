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
          addItem={addItem}
          setItem={setItem}
        />
      ) : (
        <Upload addItem={addItem} user={user} setItem={setItem} />
      )}
    </Container>
  );
};

export default Home;
