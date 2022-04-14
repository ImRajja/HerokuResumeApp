import React from "react";

function properText(text) {
  return text ? text.replace(/\s+/g, "-").toLowerCase() : "";
}

export default function List({ list }) {
  console.log("list---");
  console.log(list);
  return list.map((l) => {
    return <li className="list-group-item">{l}</li>;
  });
}
