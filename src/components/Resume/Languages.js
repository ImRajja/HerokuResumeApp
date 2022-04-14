import React from "react";
import Branch from "./Branch";
import Line from "./Line";

export default function Languages({ languages }) {
  const leafArray = ["language", "fluency"];

  return (
    <>
      {languages.map((o) => {
        return (
          <>
            <Branch leafArray={leafArray} data={o} />
            <Line />
          </>
        );
      })}
    </>
  );
}
