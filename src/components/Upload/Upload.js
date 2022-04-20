import React, { useState } from "react";
import { Typography, TextField, Button, Grid } from "@material-ui/core";
import imageToBase64 from "image-to-base64/browser";
import ShortUniqueId from "short-unique-id";

export function Upload({ addItem, user }) {
  const [files, setFiles] = useState("");

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      let jsonContent = JSON.parse(e.target.result);
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

      imageToBase64(user.result.imageUrl) // Path to the image
        .then((response) => {
          newObj.basics.image = `data:image/png;base64,${response}`;
        })
        .catch((error) => {
          console.log(error); // Logs an error if there was one
        });

      newObj.basics.imageUrl = user.result.imageUrl;

      const profiles = newObj.basics.profiles;

      if (profiles.length > 0) {
        const arrayInside = [];
        profiles.forEach((e) => {
          const temp = {};
          e["uid"] = e.network;
          temp[e.network] = e;
          arrayInside.push(temp);
        });

        newObj.basics.profiles = arrayInside;
      }

      setFiles(newObj);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(files, user);
  };

  return (
    <>
      <br />
      <>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Grid container alignItems="flex-end" spacing={2}>
            <Grid item xs={10}>
              <input type="file" onChange={handleChange} />
            </Grid>
            <Grid item xs={2}>
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
        {/* <Grid item xs={58}>
          {JSON.stringify(files)}
        </Grid> */}
      </>
    </>
  );
}
