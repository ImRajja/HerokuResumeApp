import React from "react";
import Branch from "./Branch";
import Line from "./Line";

export default function Publications({ publications }) {
  const leafArray = ["name", "publisher", "releaseDate", "summary", "url"];

  return (
    <>
      {publications.map((o) => {
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
