import React from "react";
import "./resume.css";
import Projects from "./Projects";
import Education from "./Education";
import Work from "./Work";
import Certificates from "./Certificates";
import References from "./References";
import Languages from "./Languages";
import Skills from "./Skills";
import DynamicForm from "../../DynamicForm";
import {
  IoMailOutline,
  IoPhonePortraitOutline,
  IoLocationOutline,
} from "react-icons/io5";
import imageToBase64 from "image-to-base64/browser";
import { Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import Profiles from "./Profiles";
import { Upload } from "../Upload/Upload";

export default function Templates({
  resumeIn,
  editItem,
  user,
  removeItem,
  addItem,
  setItem,
}) {
  const changeTextOnChange = (formikProps, fieldConfig, event) => {
    console.log("event.target.value");
    console.log(event.target.value);
    console.log("event.target");
    console.log(event.target);
    console.log("formikProps inside change text");
    console.log(formikProps);

    const customType = fieldConfig.customType;
    const uid = formikProps.values.uid;

    const tempData = resume[customType];

    if (uid) {
      tempData.forEach((element) => {
        if (Object.keys(element)[0] === uid) {
          element[uid] = formikProps.values;
        }
      });
    } else {
      if (fieldConfig.name === "location.address") {
        tempData["location"]["address"] = event.target.value;
      } else {
        tempData[fieldConfig.name] = event.target.value;
      }

      if (fieldConfig.name === "imageUrl") {
        imageToBase64(event.target.value)
          .then((response) => {
            console.log("got response...");
            tempData.image = `data:image/png;base64,${response}`;
          })
          .catch((error) => {
            console.log(error);
          });
        // }
      }
    }

    setResume((prev) => {
      const outValue = { ...prev };
      outValue[customType] = tempData;
      return outValue;
    });
  };

  const btnIsSubmitting = (formikProps, fieldConfig, event) => {
    // console.log("formikProps----////");
    // console.log(formikProps);

    // return formikProps.isValid && formikProps.dirty;
    return true;
  };

  const schema = {
    basics: {
      id: "basics",
      label: "Basics",
      type: "container",
      renderer: "form",
      elements: {
        name: {
          name: "name",
          label: "Name",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["required"], ["min", 3]],
          onChange: changeTextOnChange,
          customType: "basics",
        },
        imageUrl: {
          name: "imageUrl",
          label: "Image",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"]],
          onChange: changeTextOnChange,
          customType: "basics",
        },
        label: {
          name: "label",
          label: "Label",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["required"], ["min", 3]],
          onChange: changeTextOnChange,
          customType: "basics",
        },
        email: {
          name: "email",
          label: "Email",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["required"], ["min", 3]],
          onChange: changeTextOnChange,
          customType: "basics",
        },
        phone: {
          name: "phone",
          label: "Phone",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["required"], ["min", 3]],
          onChange: changeTextOnChange,
          customType: "basics",
        },
        summary: {
          name: "summary",
          label: "Summary",
          type: "field",
          renderer: "textarea",
          fieldType: "textArea",
          validation: [["string"], ["required"], ["min", 10]],
          onChange: changeTextOnChange,
          customType: "basics",
        },
        location: {
          type: "container",
          renderer: "fieldset",
          title: " Location",
          collapsible: false,
          cardClass: "card mb-3",
          prefixNameToElement: true,
          name: "location",
          elements: {
            address: {
              name: "address",
              label: "Address",
              type: "field",
              renderer: "text",
              fieldType: "text",
              validation: [["string"], ["min", 3]],
              onChange: changeTextOnChange,
              customType: "basics",
            },
          },
        },
        save: {
          type: "field",
          renderer: "button",
          content: "Save",
          fieldClass: "btn-success float-right mt-3",
          buttonType: "submit",
          customType: "basics",
          // disabled: "{!(formik.isValid && formik.dirty)}",
          // disabled: btnIsSubmitting,
        },
      },
    },
    profiles: {
      id: "profiles",
      label: "Profiles",
      type: "container",
      renderer: "form",
      elements: {
        network: {
          name: "network",
          label: "Network",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["required"], ["min", 3]],
          onChange: changeTextOnChange,
          customType: "profiles",
        },
        username: {
          name: "username",
          label: "Username",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["required"], ["min", 3]],
          onChange: changeTextOnChange,
          customType: "profiles",
        },
        url: {
          name: "url",
          label: "URL",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["required"], ["min", 3]],
          onChange: changeTextOnChange,
          customType: "profiles",
        },
        save: {
          type: "field",
          renderer: "button",
          content: "Save",
          fieldClass: "btn-success float-right mt-3",
          buttonType: "submit",
          customType: "profiles",
          // disabled: btnIsSubmitting,
        },
      },
    },
    education: {
      id: "education",
      label: "Education",
      type: "container",
      renderer: "form",
      elements: {
        institution: {
          name: "institution",
          label: "Institution",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["required"], ["min", 3]],
          onChange: changeTextOnChange,
          customType: "education",
        },
        area: {
          name: "area",
          label: "Area",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["min", 2]],
          onChange: changeTextOnChange,
          customType: "education",
        },
        studyType: {
          name: "studyType",
          label: "Study Type",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["min", 2]],
          onChange: changeTextOnChange,
          customType: "education",
        },
        startDate: {
          name: "startDate",
          label: "Start Date",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["min", 2]],
          onChange: changeTextOnChange,
          customType: "education",
        },
        endDate: {
          name: "endDate",
          label: "End Date",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["min", 2]],
          onChange: changeTextOnChange,
          customType: "education",
        },
        score: {
          name: "score",
          label: "Score",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["min", 2]],
          onChange: changeTextOnChange,
          customType: "education",
        },
        save: {
          type: "field",
          renderer: "button",
          content: "Save",
          fieldClass: "btn-success float-right mt-3",
          buttonType: "submit",
          customType: "education",
          // disabled: btnIsSubmitting,
        },
      },
    },
    languages: {
      id: "languages",
      label: "Languages",
      type: "container",
      renderer: "form",
      elements: {
        language: {
          name: "language",
          label: "language",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["required"], ["min", 3]],
          onChange: changeTextOnChange,
          customType: "languages",
        },
        fluency: {
          name: "fluency",
          label: "Fluency",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["min", 2]],
          onChange: changeTextOnChange,
          customType: "languages",
        },
        save: {
          type: "field",
          renderer: "button",
          content: "Save",
          fieldClass: "btn-success float-right mt-3",
          buttonType: "submit",
          customType: "languages",
          // disabled: btnIsSubmitting,
        },
      },
    },
    work: {
      id: "work",
      label: "Work",
      type: "container",
      renderer: "form",
      elements: {
        name: {
          name: "name",
          label: "Org Name",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["required"], ["min", 3]],
          onChange: changeTextOnChange,
          customType: "work",
        },
        position: {
          name: "position",
          label: "Position",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["required"], ["min", 3]],
          onChange: changeTextOnChange,
          customType: "work",
        },
        startDate: {
          name: "startDate",
          label: "Start Date",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["min", 2]],
          onChange: changeTextOnChange,
          customType: "work",
        },
        endDate: {
          name: "endDate",
          label: "End Date",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["min", 2]],
          onChange: changeTextOnChange,
          customType: "work",
        },
        summary: {
          name: "summary",
          label: "Summary",
          type: "field",
          renderer: "textarea",
          fieldType: "textArea",
          validation: [["string"], ["required"], ["min", 10]],
          onChange: changeTextOnChange,
          customType: "work",
        },
        url: {
          name: "url",
          label: "URL",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["min", 8]],
          onChange: changeTextOnChange,
          customType: "work",
        },
        location: {
          name: "location",
          label: "Location",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["min", 2]],
          onChange: changeTextOnChange,
          customType: "work",
        },
        save: {
          type: "field",
          renderer: "button",
          content: "Save",
          fieldClass: "btn-success float-right mt-3",
          buttonType: "submit",
          customType: "work",
        },
      },
    },
    projects: {
      id: "projects",
      label: "Projects",
      type: "container",
      renderer: "form",
      elements: {
        name: {
          name: "name",
          label: "Project Name",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["required"], ["min", 3]],
          onChange: changeTextOnChange,
          customType: "projects",
        },
        startDate: {
          name: "startDate",
          label: "Start Date",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["min", 2]],
          onChange: changeTextOnChange,
          customType: "projects",
        },
        endDate: {
          name: "endDate",
          label: "End Date",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["min", 2]],
          onChange: changeTextOnChange,
          customType: "wprojectsrk",
        },
        summary: {
          name: "summary",
          label: "Summary",
          type: "field",
          renderer: "textarea",
          fieldType: "textArea",
          validation: [["string"], ["required"], ["min", 10]],
          onChange: changeTextOnChange,
          customType: "projects",
        },
        url: {
          name: "url",
          label: "URL",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["min", 8]],
          onChange: changeTextOnChange,
          customType: "projects",
        },
        save: {
          type: "field",
          renderer: "button",
          content: "Save",
          fieldClass: "btn-success float-right mt-3",
          buttonType: "submit",
          customType: "projects",
        },
      },
    },
    certificates: {
      id: "certificates",
      label: "Certificates",
      type: "container",
      renderer: "form",
      elements: {
        name: {
          name: "name",
          label: "Award Name",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["required"], ["min", 3]],
          onChange: changeTextOnChange,
          customType: "certificates",
        },
        position: {
          name: "issuer",
          label: "Issuer",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["required"], ["min", 3]],
          onChange: changeTextOnChange,
          customType: "certificates",
        },
        startDate: {
          name: "startDate",
          label: "Start Date",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["min", 2]],
          onChange: changeTextOnChange,
          customType: "certificates",
        },
        endDate: {
          name: "endDate",
          label: "End Date",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["min", 2]],
          onChange: changeTextOnChange,
          customType: "certificates",
        },
        url: {
          name: "url",
          label: "URL",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["min", 8]],
          onChange: changeTextOnChange,
          customType: "certificates",
        },
        save: {
          type: "field",
          renderer: "button",
          content: "Save",
          fieldClass: "btn-success float-right mt-3",
          buttonType: "submit",
          customType: "certificates",
        },
      },
    },
    references: {
      id: "references",
      label: "References",
      type: "container",
      renderer: "form",
      elements: {
        name: {
          name: "name",
          label: "Name",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["required"], ["min", 3]],
          onChange: changeTextOnChange,
          customType: "references",
        },
        reference: {
          name: "reference",
          label: "Reference",
          type: "field",
          renderer: "textarea",
          fieldType: "textArea",
          validation: [["string"], ["required"], ["min", 10]],
          onChange: changeTextOnChange,
          customType: "references",
        },
        save: {
          type: "field",
          renderer: "button",
          content: "Save",
          fieldClass: "btn-success float-right mt-3",
          buttonType: "submit",
          customType: "references",
        },
      },
    },
    skills: {
      id: "skills",
      label: "Skills",
      type: "container",
      renderer: "form",
      elements: {
        name: {
          name: "name",
          label: "Skill Name",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"], ["required"], ["min", 1]],
          onChange: changeTextOnChange,
          customType: "skills",
        },
        level: {
          name: "level",
          label: "Level",
          type: "field",
          renderer: "text",
          fieldType: "text",
          validation: [["string"]],
          onChange: changeTextOnChange,
          customType: "skills",
        },
        save: {
          type: "field",
          renderer: "button",
          content: "Save",
          fieldClass: "btn-success float-right mt-3",
          buttonType: "submit",
          customType: "skills",
        },
      },
    },
  };
  const [resume, setResume] = useState(resumeIn);

  const save = (values, formikProps) => {
    console.log("values----->");
    console.log(values);
    console.log(JSON.stringify(values));

    const _id = resume._id;
    const temp = resume;
    delete resume["_id"];

    editItem(_id, temp, user);
    formikProps.setSubmitting(false);
  };

  function handleDeleteBtnClick() {
    removeItem(resume._id, user);
    setResume(null);
    // <Redirect to="/login" />;
    // <Upload />;
  }

  const [schemaObject, setSchemaObject] = useState({
    onSubmit: save.bind(this),
    initialValues: {},
    schema: {},
  });

  const handleSectionClick = (sectionName, iKey) => {
    if (iKey) {
      setSchemaObject((prev) => {
        console.log("im now setting schema ooooooooooo----ooobject");
        const outValue = { ...prev };

        let elements = resume[`${sectionName}`];
        if (sectionName === "profiles") {
          elements = resume["basics"]["profiles"];
        }

        elements.forEach((element) => {
          if (Object.keys(element)[0] === iKey) {
            outValue["initialValues"] = element[Object.keys(element)[0]];
          }
        });

        outValue["schema"] = schema[`${sectionName}`];
        return outValue;
      });
    } else {
      console.log(sectionName);

      setSchemaObject((prev) => {
        console.log("im now setting schema oooooooooo*****oooobject");
        const outValue = { ...prev };
        outValue["schema"] = schema[`${sectionName}`];
        outValue["initialValues"] = resume[`${sectionName}`];
        return outValue;
      });
    }
  };

  function handleBasicSectionClick(index) {
    console.log(" inside handleBasicSectionClick");

    handleSectionClick("basics");
  }

  return (
    <>
      {resume ? (
        <div style={{ display: "flex" }}>
          <div style={{ width: "420px" }}>
            <Button
              color="error"
              variant="contained"
              onClick={handleDeleteBtnClick}
            >
              Delete Resume
            </Button>
            <DynamicForm schemaObject={schemaObject} />
          </div>
          <main className="l-main bd-container">
            {/* <!-- All elements within this div, is generated in PDF --> */}
            <div className="resume" id="area-cv">
              <div className="resume__left">
                {/* <!-- HOME --> */}
                <section
                  className="home"
                  id="home"
                  onClick={handleBasicSectionClick}
                >
                  <div className="home_containter section bd-grid">
                    <div className="home_data bd-grid">
                      {resume.basics.image && (
                        <img
                          src={resume.basics.image}
                          alt=""
                          className="home_img center"
                        />
                      )}
                      <h1 className="home_title">{resume.basics.name}</h1>
                      <h3 className="home_profession">{resume.basics.label}</h3>
                    </div>
                    <div className="home_address bd-grid">
                      {resume.basics.location.address && (
                        <span className="home_information">
                          <IoLocationOutline />
                          <i className="bx bx-map"> &nbsp; </i>
                          {resume.basics.location.address}
                        </span>
                      )}
                      {resume.basics.email && (
                        <span className="home_information">
                          <IoMailOutline />
                          <i className="bx bx-envelope"> &nbsp; </i>
                          {resume.basics.email}
                        </span>
                      )}
                      {resume.basics.phone && (
                        <span className="home_information">
                          <IoPhonePortraitOutline />
                          <i className="bx bx-phone"> &nbsp; </i>
                          {resume.basics.phone}
                        </span>
                      )}
                    </div>
                  </div>
                </section>

                {/* <!-- SOCIAL --> */}
                {resume.basics.profiles && (
                  <Profiles
                    profiles={resume.basics.profiles}
                    handleSectionClick={handleSectionClick}
                  />
                )}
                {/* <!-- PROFILE --> */}
                {resume.basics.summary && (
                  <section
                    className="profile section"
                    id="profile"
                    onClick={handleBasicSectionClick}
                  >
                    <h2 className="section-title">Profile</h2>
                    <p
                      className="profile_description"
                      style={{ whiteSpace: "pre-wrap" }}
                    >
                      {resume.basics.summary}
                    </p>
                  </section>
                )}

                {/* <!-- EDUCATION --> */}
                {resume.education && (
                  <Education
                    education={resume.education}
                    handleSectionClick={handleSectionClick}
                  />
                )}
                {/* <!-- LANGUAGES --> */}
                {resume.languages && (
                  <Languages
                    languages={resume.languages}
                    handleSectionClick={handleSectionClick}
                  />
                )}
                {/* <!-- SKILLS  --> */}
                {resume.skills && (
                  <Skills
                    skills={resume.skills}
                    handleSectionClick={handleSectionClick}
                  />
                )}
              </div>
              <div className="resume__right">
                {/* <!-- EXPERIENCE --> */}
                {resume.work && (
                  <Work
                    work={resume.work}
                    handleSectionClick={handleSectionClick}
                  />
                )}

                {/* <!-- PROJECTS --> */}
                {resume.projects && (
                  <Projects
                    projects={resume.projects}
                    handleSectionClick={handleSectionClick}
                  />
                )}

                {/* <!-- CERTIFICATES --> */}
                {resume.certificates && (
                  <Certificates
                    certificates={resume.certificates}
                    handleSectionClick={handleSectionClick}
                  />
                )}
                {/* <!-- REFERENCES --> */}
                {resume.references && (
                  <References
                    references={resume.references}
                    handleSectionClick={handleSectionClick}
                  />
                )}

                {/* <!-- INTERESTS --> */}

                {/* <section className="interests section">
              <h2 className="section-title">Interests</h2>
              <div className="interests_container bd-grid">
                <div className="interests_content">
                  <i className="bx bx-code-alt interests_icon"></i>
                  <span className="interests_name">Coding</span>
                </div>
                <div className="interests_content">
                  <i className="bx bxs-coffee-togo interests_icon"></i>
                  <span className="interests_name">Coffee</span>
                </div>
                <div className="interests_content">
                  <i className="bx bxs-plane-alt interests_icon"></i>
                  <span className="interests_name">Traveling</span>
                </div>
                <div className="interests_content">
                  <i className="bx bxs-camera interests_icon"></i>
                  <span className="interests_name">Photography</span>
                </div>
              </div>
            </section> */}
              </div>
            </div>
          </main>
        </div>
      ) : (
        <Upload addItem={addItem} user={user} setItem={setItem} />
      )}
    </>
  );
}
