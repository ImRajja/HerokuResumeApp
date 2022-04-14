import React, { Component, useEffect } from "react";
import EZForm from "../EZForm";
import contactFormFields from "../../examples/contact-form-fields";

export default class Form extends Component {
  constructor(props) {
    super(props);

    //initial state
    this.state = {
      contact: {
        //these must map to the field names
        firstName: "",
        lastName: "",
        phone: "",
        phoneType: -1,
        email: "",
        confirmEmail: "",
        subscribeMe: false,
      },
    };
  }

  handleFormChanged(newFormData) {
    console.log(newFormData);
    this.setState({ contact: newFormData });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.refs.contactForm.validateAll()) {
      // alert("Validation passed");
      // alert(JSON.stringify(this.state.contact));
      // ---------------------------------------->
      fetch(
        "http://localhost:1000/api/mail2rajja@gmail.com/tests/6255a597b838cc6554499493",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            lastName: "world2",
          }),
        }
      )
        .then(function (response) {
          console.log(response);
          return response.end();
        })
        .catch(function (err) {
          console.log(err);
          return err.end();
        });

      // <----------------------------------------
    }
  }

  render() {
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <h1>EZ Form Example</h1>
        <EZForm
          ref="contactForm"
          fields={contactFormFields}
          data={this.state.contact}
          fields={contactFormFields}
          onFormChange={this.handleFormChanged.bind(this)}
        />

        <div className="row">
          <div className="col-sm-12 text-center">
            <input
              type="submit"
              className="btn btn-default"
              value="Submit"
              onClick={this.handleSubmit.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}
