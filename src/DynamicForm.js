import React from "react";
import { Form as Formj } from "@flipbyte/formik-json";

export default function DynamicForm({ schemaObject }) {
  console.log("schemaObject%%%%%%%%%%%%%%%%%");
  console.log(schemaObject.initialValues);
  return (
    <div style={{ position: "sticky", top: "50px" }}>
      {Object.keys(schemaObject.initialValues).length > 0 ? (
        <>
          <h1>{schemaObject.schema.label}</h1>
          <Formj
            initialValues={schemaObject.initialValues}
            onSubmit={schemaObject.onSubmit}
            schema={schemaObject.schema}
            enableReinitialize
          ></Formj>
        </>
      ) : (
        <>
          <p style={{ marginTop: "10px", fontSize: "large" }}>
            To edit, please click on your resume elements.
          </p>
        </>
      )}
    </div>
  );
}
