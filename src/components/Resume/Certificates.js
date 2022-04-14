import React from "react";
import Branch from "./Branch";
import Line from "./Line";

export default function Certificates({ certificates }) {
  const leafArray = ["name", "issuer", "startDate", "endDate", "url"];

  return (
    <>
      {certificates.map((o) => {
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
