import React, { useState } from "react";
import { Typography, TextField, Button, Grid } from "@material-ui/core";
import imageToBase64 from "image-to-base64/browser";
import ShortUniqueId from "short-unique-id";
import useStyles from "./styles";
import { allFakeResumes } from "./allFakeResumes";

export function Upload({ addItem, user, setItem }) {
  const classes = useStyles();
  const [file, setFile] = useState("");

  // async function getAvatar() {
  //   var toonavatar = require("cartoon-avatar");
  //   const avatarUrl = toonavatar.generate_avatar();

  //   console.log("avatarUrl===========");
  //   console.log(avatarUrl);
  //   let avatarData = "";

  // const { avatarData } = await imageToBase64(avatarUrl)
  //   .then((response) => `data:image/png;base64,${response}`)
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // imageToBase64(avatarUrl)
  //   .then((response) => {
  //     console.log("response insidee....");
  //     console.log(response);
  //     avatarData = `data:image/png;base64,${response}`;
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // -------------

  // const ImagetoDataURL = (url) =>
  //   fetch(url, {
  //     mode: "no-cors",
  //   })
  //     .then((response) => response.blob())
  //     .then((blob) =>
  //       new Promise((resolve, reject) => {
  //         const reader = new FileReader();
  //         reader.onloadend = () => resolve(reader.result);
  //         reader.onerror = reject;
  //         reader.readAsDataURL(blob);
  //       }).catch((err) => {
  //         console.log(err);
  //       })
  //     );

  // ImagetoDataURL(avatarUrl).then((dataUrl) => {
  //   console.log("DataURL:", dataUrl);
  //   avatarData = `data:image/png;base64,${dataUrl}`;
  // });

  //   console.log("avatarData===========");
  //   console.log(avatarData);

  //   // -------------------------
  //   return { avatarUrl: avatarUrl, avatarData: avatarData };
  // }

  function cleanupResume(jsonContent) {
    delete jsonContent["$schema"];

    const uid = new ShortUniqueId({ length: 10 });

    const newObj = {};
    for (const key in jsonContent) {
      if (Object.hasOwnProperty.call(jsonContent, key)) {
        const element = jsonContent[key];
        if (Array.isArray(element)) {
          if (element.length) {
            const arrayInside = [];
            element.forEach((e) => {
              const temp = {};
              const tempUID = uid();
              e["uid"] = tempUID;
              temp[tempUID] = e;
              arrayInside.push(temp);
            });

            newObj[key] = arrayInside;
          } else {
            newObj[key] = element;
          }
        } else {
          newObj[key] = element;
        }
      }
    }

    // handling profiles
    const profiles = newObj.basics.profiles;

    if (profiles && profiles.length > 0) {
      const arrayInside = [];
      profiles.forEach((e) => {
        const temp = {};
        e["uid"] = e.network;
        temp[e.network] = e;
        arrayInside.push(temp);
      });

      newObj.basics.profiles = arrayInside;
    }

    // getAvatar().then((avatarOut) => {
    //   console.log("avatarOut--------");
    //   console.log(avatarOut);
    //   newObj.basics.image = avatarOut.avatarData;
    //   newObj.basics.url = avatarOut.avatarUrl;
    // });
    return newObj;
  }

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      let jsonContent = JSON.parse(e.target.result);

      setFile(cleanupResume(jsonContent));
    };
  };

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(file, user);
    setItem(file);
  };
  const handleRandomSubmit = (e) => {
    e.preventDefault();

    const getData = () => {
      fetch(`/fakeResumes/${allFakeResumes[randomIntFromInterval(0, 337)]}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          data.basics.email = user.result.email;
          data.basics.name = user.result.name;
          let resume = cleanupResume(data);

          addItem(resume, user);
          setItem(resume);
        });
    };
    getData();
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.noTodos}
      style={{ backgroundColor: "white" }}
      spacing={1}
    >
      <Grid item xs={4}>
        <Typography variant="h5">
          <ul>
            <li>
              <h1>Step 1: Export json resume from LinkedIn</h1>
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
            </li>
            <li>
              <h1>Step 2: Import your json resume</h1>

              <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Grid container alignItems="flex-end" spacing={2}>
                  <Grid item xs={8}>
                    <input type="file" onChange={handleChange} />
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      color="primary"
                      variant="contained"
                      size="large"
                      type="submit"
                      fullWidth
                    >
                      Upload
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </li>
          </ul>
        </Typography>
      </Grid>
      <Grid item xs={2} align="center">
        -- Or --
      </Grid>
      <Grid item xs={4} align="center">
        <h1>Start with a random content!</h1>

        <form autoComplete="off" noValidate onSubmit={handleRandomSubmit}>
          <Button
            color="primary"
            variant="contained"
            size="large"
            type="submit"
            // fullWidth
          >
            Start Now!
          </Button>
        </form>
      </Grid>
    </Grid>
  );
}
