import React from "react";
import Branch from "./Branch";
import Line from "./Line";

export default function Projects({ projects }) {
  const leafArray = ["name", "startDate", "endDate", "summary", "url"];

  return (
    <>
      {projects.map((o) => {
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
