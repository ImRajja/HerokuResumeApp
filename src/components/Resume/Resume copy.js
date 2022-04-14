import React from "react";
import Section from "./Section/Section";

import "./styles.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Basics from "./Basics";
import Work from "./Work";

export default function Resume({ resume }) {
  const sections = [
    // "basics",
    "work",
    // "volunteer",
    // "education",
    // "certificates",
    // "publications",
    // "skills",
    // "languages",
    // "interests",
    // "references",
    // "projects",
  ];

  return (
    <div>
      <Tabs>
        <TabList>
          {sections.map((section) => (
            <Tab>
              <p>{section.toUpperCase()}</p>
            </Tab>
          ))}
        </TabList>

        {/* <TabPanel>
          <div className="panel-content">
            <Basics basics={resume.basics} />
          </div>
        </TabPanel> */}
        <TabPanel>
          <div className="panel-content">
            <Work work={resume.work} />
          </div>
        </TabPanel>
      </Tabs>
      {/* {sections.map((section) => (
          <TabPanel>
            <div className="panel-content">
              <Section data={resume[section]} title={section} />
            </div>
          </TabPanel>
        ))} */}
      {/* <div class="tabs">
        {sections.map((section) => (
          <div className="tabsection">
            <input type="radio" name="tabs" id={section} />
            <label for={section}>{section}</label>
            <div className="tab">
              <Render data={resume[section]} title={section} />
            </div>
          </div>
        ))}
      </div> */}

      {/* <Render data={resume.basics} title={"basics"} />
      <Render data={resume.work} title={"work"} /> */}
      {/* <Render data={resume.volunteer} title={"volunteer"} />
      <Render data={resume.education} title={"education"} />
      <Render data={resume.certificates} title={"certificates"} />
      <Render data={resume.publications} title={"publications"} />
      <Render data={resume.skills} title={"skills"} />
      <Render data={resume.languages} title={"languages"} />
      <Render data={resume.interests} title={"interests"} />
      <Render data={resume.references} title={"references"} />
      <Render data={resume.projects} title={"projects"} />
      <Render data={resume.meta} title={"meta"} /> */}
    </div>
  );
}
