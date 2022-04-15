import React, { useState } from "react";
import { Typography, TextField, Button, Grid } from "@material-ui/core";

export function Upload({ addItem, user }) {
  const [files, setFiles] = useState("");

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      let jsonContent = JSON.parse(e.target.result);
      delete jsonContent["$schema"];
      jsonContent.basics.image = user.result.imageUrl;

      // console.log("before", e.target.result);
      // console.log("after", JSON.stringify(jsonContent));
      // setFiles(JSON.stringify(jsonContent));
      setFiles(jsonContent);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!files[0]) {
    //   alert("Upload your json resume");
    //   alert(files);
    //   return;
    // }
    // addItem({ resume: JSON.stringify(files[0]) });
    addItem(files, user);
  };

  return (
    <>
      <h1>Upload your json resume</h1>

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
      </>
      {"uploaded file content -- " + files}
    </>
  );
}
