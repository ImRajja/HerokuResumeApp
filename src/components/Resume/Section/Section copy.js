import React from "react";
// import Mustache from "mustache";
// import useStyles from "../styles";

export default function Section({ data, title }) {
  let renderingString = "";

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  function properText(text) {
    return text ? text.replace(/\s+/g, "-").toLowerCase() : "";
  }
  function renderKeyValue(data) {
    renderingString += `<li class="list-group-item borderless"><div class="keyvalue ${properText(
      data.key
    )}"><span class="key">${data.key.toUpperCase()}</span><span class="value">${
      data.value
    }</span></div></li>`;
  }

  function renderHeader(data, header) {
    renderingString += `<div class="container p-2 my-2 border"><h3 class="header ${properText(
      data.value
    )} ${properText(header)}" >${toTitleCase(data.value)}</h3>`;
  }

  function renderingOut(data, header) {
    renderingString += `<ul class="list-group">`;
    for (const property in data) {
      console.log(typeof data[property]);

      if (typeof data[property] === "object") {
        renderHeader({ value: property, header: header });
        if (data[property].constructor.name == "Array") {
          data[property].forEach((element) => {
            renderingOut(element, property);
          });
        } else {
          renderingOut(data[property], property);
        }
        renderingString += "</div>";
      } else {
        if (data[property]) {
          renderKeyValue({
            key: property,
            value: data[property],
            header: header,
          });
        }
      }
    }
    renderingString += `</ul>`;
  }

  //   console.log(renderingString);
  renderingOut(data, "Basics");

  renderingString =
    `<div class="container p-2 my-2 ${properText(
      title
    )}"><!--h3 class="header display-3">${title}</h3-->` +
    renderingString +
    `</div>`;
  // renderingString =
  //   `<div class="container p-5 my-5 border ${properText(
  //     title
  //   )}"><h3 class="header display-3">${title}</h3>` +
  //   renderingString +
  //   `</div>`;

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: renderingString }} />
    </div>
  );
}
