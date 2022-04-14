import React from "react";

export default function List({ list }) {
  return list.map((l) => {
    return <li className="list-group-item">{l}</li>;
  });
}
