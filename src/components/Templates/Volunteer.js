import React from "react";
import Branch from "./Branch";
import Line from "./Line";

export default function Volunteer({ volunteer }) {
  const leafArray = [
    "organization",
    "position",
    "startDate",
    "endDate",
    "summary",
    "url",
  ];

  return (
    <>
      {volunteer.map((o) => {
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
