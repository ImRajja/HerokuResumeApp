// import React from "react";
// // import ReactDOM from "react-dom";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App";

// // ReactDOM.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// //   document.getElementById("root")
// // );
// const container = document.getElementById("app");
// const root = createRoot(container);
// root.render(<App />);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
