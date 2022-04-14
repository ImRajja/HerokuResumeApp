import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Paper, Container } from "@material-ui/core";

import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header/Header";
import NotSignedIn from "./components/NotSignedIn/NotSignedIn";
import useStyles from "./styles";

function App() {
  const classes = useStyles();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  // const [noHeader, setNoHeader] = useState(false);
  // setUser({ user: JSON.parse(localStorage.getItem("profile")) });
  // setUser({ user: JSON.parse(localStorage.getItem("profile")) });

  React.useEffect(() => {
    setUser({ user: JSON.parse(localStorage.getItem("profile")) });
  }, [user]);

  return (
    <BrowserRouter>
      <Header user={user} setUser={setUser} />
      {/* <Container className={classes.root} maxWidth="ld"> */}
      {/* <Container> */}
      {/* <Paper className={classes.paper}> */}
      <Routes>
        {user ? (
          <Route path="/" exact element={<Home />} />
        ) : (
          <Route path="/" exact element={<NotSignedIn />} />
        )}
        <Route path="/auth" exact element={<Auth />} />
      </Routes>
      {/* </Paper> */}
      {/* </Container> */}
    </BrowserRouter>
  );
}

export default App;
