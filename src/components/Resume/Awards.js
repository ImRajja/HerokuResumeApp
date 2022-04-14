import React from "react";
import Branch from "./Branch";
import Line from "./Line";

export default function Award({ awards }) {
  const leafArray = ["title", "date", "awarder", "summary"];

  return (
    <>
      {awards.map((o) => {
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
