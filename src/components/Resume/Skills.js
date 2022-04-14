import React from "react";
import Branch from "./Branch";
import Line from "./Line";
import List from "./List";
import Title from "./Title";

export default function Skills({ skills }) {
  const leafArray = ["name", "level"];

  return (
    <>
      {skills.map((o) => {
        return (
          <>
            <Branch leafArray={leafArray} data={o} />
            {o.keywords.length > 0 ? <Title title={"Keywords"} /> : ""}
            <List list={o.keywords} />
            <Line />
          </>
        );
      })}
    </>
  );
}
