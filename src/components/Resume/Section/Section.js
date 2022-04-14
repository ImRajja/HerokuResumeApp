import React from "react";
import Leaf from "../Leaf";

// import Mustache from "mustache";
// import useStyles from "../styles";
//   <div>{JSON.stringify(data)}</div>

export default function Section({ data }) {
  // renderChildren = (data) => {
  //   for (const property in data) {
  //     console.log(typeof data[property]);

  //     if (typeof data[property] === "object") {
  //       console.log("====property========");
  //       console.log(property);
  //       return property;
  //     } else if (data[property].constructor.name == "Array") {
  //       console.log("====Array========");
  //       data[property].forEach((element) => {
  //         console.log(element);
  //         return element;
  //       });
  //     } else {
  //       console.log("====keyvalue========");
  //       console.log(data[property], property);
  //       return data[property];
  //     }
  //   }
  // };

  // function _renderObject() {
  //   console.log("here");
  //   return Object.entries(data).map(([key, value], i) => {
  //     console.log(i);
  //     return (
  //       value !== "object" && <Leaf data={value} />
  //       <div key={key}>
  //         key is: {key} ; value is: {value}
  //       </div>
  //     );
  //   });
  // }

  // const articlesJsx = Object.values(data).map((item, index) => (
  //   // <div key={index}>{JSON.stringify(item)}</div>
  //   <Leaf key={index} data={item} />
  // ));

  const element = () => {
    for (const key in data) {
      <Leaf key={key} keyin={key} value={data[key]} />;
    }
  };

  //         for (const key in data) {
  //           if (Object.hasOwnProperty.call(data, key)) {
  //             <Leaf keyin={key} value={data[key]} />;
  //           }
  // }

  return (
    <>
      {Object.entries(data).map((key, value) => (
        <Leaf keyin={key} value={value} />
      ))}
    </>
  );
}
