import React from "react";
import Branch from "./Branch";
import Leaf from "./Leaf";
import Title from "./Title";

const profileArray = ["network", "username", "url"];
export default function Basics({ basics }) {
  return (
    <>
      {["name", "label", "image", "email", "phone", "url", "summary"].map(
        (i) => basics[i] && <Leaf k={i} v={basics[i]} />
      )}
      <Title title={"Location"} />
      <Branch leafArray={["countryCode", "address"]} data={basics.location} />

      <Title title={"Profiles"} />
      {basics.profiles.map((o) => {
        return (
          <>
            <Branch leafArray={profileArray} data={o} />
          </>
        );
      })}
    </>
  );
}
