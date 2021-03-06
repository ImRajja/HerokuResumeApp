// import React, { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Paper, Container } from "@material-ui/core";

import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header/Header";
import NotSignedIn from "./components/NotSignedIn/NotSignedIn";
import useStyles from "./styles";

function App() {
  const classes = useStyles();

  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("profile"))
  );

  return (
    <BrowserRouter>
      <Header user={user} setUser={setUser} />

      {/* <Container className={classes.root} maxWidth="ld"> */}
      {/* <Container> */}
      {/* <Paper className={classes.paper}> */}
      <Routes>
        {user ? (
          <Route path="/" exact element={<Home user={user} />} />
        ) : (
          // <Route path="/" exact element={<NotSignedIn />} />
          <Route path="/" exact element={<Auth />} />
        )}
        <Route path="/auth" exact element={<Auth />} />
      </Routes>
      {/* </Paper> */}
      {/* </Container> */}
    </BrowserRouter>
  );
}

export default App;
