import React from "react";

export default function Leaf({ k, v }) {
  return (
    <li className="list-group-item borderless" key={k}>
      <div className="keyvalue">
        <span className="key">{k}</span>
        <span className="value">{v}</span>
      </div>
    </li>
  );
}
