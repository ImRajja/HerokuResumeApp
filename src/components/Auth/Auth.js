import React, { useState } from "react";
import "./auth.css";
import { Button, Typography, Grid, Container } from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";

import useStyles from "./styles";
import Icon from "./icon";
import { signIn, signUp } from "../../api/index";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);

  const [isSignup, setIsSignup] = useState(false);

  const [formData, setFormData] = useState(initialState);

  const history = useNavigate();

  const frontSignUp = async () => {
    try {
      const { data } = await signUp(formData);

      localStorage.setItem("profile", JSON.stringify(data));

      history("/");
    } catch (error) {
      console.log(error);
    }
  };

  const frontSignIn = async () => {
    try {
      const { data } = await signIn(formData);

      localStorage.setItem("profile", JSON.stringify(data));

      history("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      frontSignUp();
    } else {
      frontSignIn();
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      localStorage.setItem("profile", JSON.stringify({ result, token }));
      history("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log(error);
  };

  return (
    // <Container component="main" maxWidth="xs" className={classes.main}>
    <>
      <Container
        component="main"
        // maxWidth="xs"
        className={classes.main}
        spacing={2}
      >
        <Grid container spacing={2} justify="flex-start">
          <Grid item sm={6}></Grid>
          <Grid
            container
            sm={6}
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <Typography variant="h1" align={"center"}>
              Make beautiful resumes in few clicks
            </Typography>
            {/* </Grid>
          <Grid item xs={3}> */}
            <GoogleLogin
              // clientId='320266898555-a52r99l7def1ropf21rk7ahuvt297hke.apps.googleusercontent.com'
              // clientId="123884862002-7l28p32pt31v7rnv78vbsghlslihj0e2.apps.googleusercontent.com"
              clientId="123884862002-qn4mhqh91hcfejkqtk2auk8jqtvnqgaf.apps.googleusercontent.com"
              render={(renderProps) => (
                <Button
                  className={classes.googleButton}
                  color="primary"
                  // fullWidth
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  startIcon={<Icon />}
                  variant="contained"
                  size="large"
                >
                  Sign in with Google
                </Button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
          </Grid>
        </Grid>
      </Container>
      <div className="homeImage">
        <img src="./homeResume1.png" />
      </div>
    </>
  );
};

export default Auth;
