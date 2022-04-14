import React from "react";
import Leaf from "./Leaf";

export default function Branch({ leafArray, data }) {
  return (
    <>
      {leafArray.map((i) => data[i] && <Leaf k={i} v={data[i]} />)}
      {/* <hr /> */}
    </>
  );
}
