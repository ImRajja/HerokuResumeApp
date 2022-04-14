import React from "react";
import Branch from "./Branch";
import Line from "./Line";
import List from "./List";
import Title from "./Title";

export default function Education({ education }) {
  const leafArray = [
    "institution",
    "area",
    "studyType",
    "startDate",
    "endDate",
    "score",
  ];

  return (
    <>
      {education.map((o) => {
        return (
          <>
            <Branch leafArray={leafArray} data={o} />
            {o.courses.length > 0 ? <Title title={"courses"} /> : ""}
            <List list={o.courses} />
            <Line />
          </>
        );
      })}
    </>
  );
}
