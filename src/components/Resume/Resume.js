import React from "react";
import Section from "./Section/Section";

import "./styles.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Basics from "./Basics";
import Work from "./Work";
import Education from "./Education";
import Award from "./Awards";
import Certificates from "./Certificates";
import Publications from "./Publications";
import Skills from "./Skills";
import Languages from "./Languages";
import Projects from "./Projects";
import Volunteer from "./Volunteer";
import References from "./References";

export default function Resume({ resume }) {
  const sections = [
    "basics",
    "work",
    "volunteer",
    "education",
    "awards",
    "certificates",
    "publications",
    "skills",
    "languages",
    // "interests",
    "projects",
    "references",
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

        <TabPanel>
          <div className="panel-content">
            <Basics basics={resume.basics} />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <Work work={resume.work} />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <Volunteer volunteer={resume.volunteer} />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <Education education={resume.education} />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <Award awards={resume.awards} />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <Certificates certificates={resume.certificates} />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <Publications publications={resume.publications} />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <Skills skills={resume.skills} />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <Languages languages={resume.languages} />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <Projects projects={resume.projects} />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <References references={resume.references} />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
