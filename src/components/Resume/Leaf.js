import React from "react";
function properText(text) {
  return text ? text.replace(/\s+/g, "-").toLowerCase() : "";
}

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
