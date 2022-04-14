import React from "react";
import Branch from "./Branch";
import Line from "./Line";

export default function Work({ work }) {
  const leafArray = [
    "name",
    "position",
    "startDate",
    "endDate",
    "summary",
    "url",
    "location",
  ];

  return (
    <>
      {work.map((o) => {
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
