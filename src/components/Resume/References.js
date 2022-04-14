import React from "react";
import Branch from "./Branch";
import Line from "./Line";

export default function References({ references }) {
  const leafArray = ["name", "reference"];

  return (
    <>
      {references.map((o) => {
        return (
          <>
            <Branch leafArray={leafArray} data={o} />;
            <Line />
          </>
        );
      })}
    </>
  );
}
