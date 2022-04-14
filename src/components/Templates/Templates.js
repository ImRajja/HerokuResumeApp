import React from "react";
// import ImageDataURI from "image-data-uri";
import "./resume.css";
import Projects from "./Projects";
import Education from "./Education";
import Work from "./Work";
import Certificates from "./Certificates";
import References from "./References";
import Languages from "./Languages";
import Skills from "./Skills";
// import Form from "../Form/Form";
// import rt-temp

export default function Templates({ resume }) {
  //   ImageDataURI.encodeFromURL(
  //     "https://media-exp1.licdn.com/dms/image/C5603AQGvH7Aky_JBQw/profile-displayphoto-shrink_400_400/0/1595419258650?e=1655337600&v=beta&t=HX6eoX1Wh_OlidOMc7KfY6V6gO4DORfXTTlQhrLWLTY"
  //   ).then((res) => console.log(res));

  //   function toDataUrl(url, callback) {
  //     var xhr = new XMLHttpRequest();
  //     xhr.onload = function () {
  //       var reader = new FileReader();
  //       reader.onloadend = function () {
  //         callback(reader.result);
  //       };
  //       reader.readAsDataURL(xhr.response);
  //     };
  //     xhr.open("GET", url);
  //     xhr.responseType = "blob";
  //     xhr.send();
  //   }

  //   const imageData = toDataUrl(resume.basics.image, function (myBase64) {
  //     console.log(myBase64); // myBase64 is the base64 string
  //     return myBase64;
  //   });

  return (
    <>
      {/* <Form /> */}
      <main className="l-main bd-container">
        {/* <!-- All elements within this div, is generated in PDF --> */}
        <div className="resume" id="area-cv">
          <div className="resume__left">
            {/* <!-- HOME --> */}
            <section className="home" id="home">
              <div className="home_containter section bd-grid">
                <div className="home_data bd-grid">
                  <img
                    // src={resume.basics.image}
                    src={
                      resume.imageData ? resume.imageData : resume.basics.image
                    }
                    alt=""
                    className="home_img center"
                  />
                  <h1 className="home_title">{resume.basics.name}</h1>
                  <h3 className="home_profession">{resume.basics.label}</h3>
                  {/* <!-- Button to generate and download the pdf. Available for desktop. --> */}
                  {/* <div>
                    <a
                      download=""
                      href="assets/pdf/Muhammadessa-resume.pdf"
                      className="home_button-movil"
                    >
                      Download
                    </a>
                  </div> */}
                </div>
                {/* <div className="home_address bd-grid">
                  {resume.basics.location.address && (
                    <span className="home_information">
                      <i className="bx bx-map"> &nbsp; </i>
                      {resume.basics.location.address}
                    </span>
                  )}
                  {resume.basics.email && (
                    <span className="home_information">
                      <i className="bx bx-envelope"> &nbsp; </i>
                      {resume.basics.email}
                    </span>
                  )}
                  {resume.basics.phone && (
                    <span className="home_information">
                      <i className="bx bx-phone"> &nbsp; </i>
                      {resume.basics.phone}
                    </span>
                  )}
                </div> */}
              </div>
            </section>

            {/* <!-- SOCIAL --> */}
            {/* <section className="social section"> */}
            {/* <h2 className="section-title">SOCIAL</h2>
              <div className="social_container bd-grid"> */}
            {/* <% resume.basics.profiles.forEach(function(profile) { %> */}
            {/* <a href="<%= profile.url %> " target="_blank" className="social_link" > */}
            {/* <i className="bx bxl-<%= profile.network.toLowerCase() %>-square social_icon"></i> */}
            {/* @<%= profile.username %>  */}
            {/* </a> */}

            {/* <% }); %> */}
            {/* </div> */}
            {/* </section> */}
            {/* <!-- PROFILE --> */}
            {resume.basics.summary && (
              <section className="profile section" id="profile">
                <h2 className="section-title">Profile</h2>
                <p className="profile_description">{resume.basics.summary}</p>
              </section>
            )}

            {/* <!-- EDUCATION --> */}
            <div className="html2pdf__page-break"></div>
            <Education education={resume.education} />
            {/* <!-- LANGUAGES --> */}
            <Languages languages={resume.languages} />
            {/* <!-- SKILLS  --> */}
            <Skills skills={resume.skills} />
          </div>
          <div className="resume__right">
            {/* <!-- EXPERIENCE --> */}
            <Work work={resume.work} />

            {/* <!-- PROJECTS --> */}
            <div className="html2pdf__page-break"></div>
            <Projects projects={resume.projects} />

            {/* <!-- CERTIFICATES --> */}
            <Certificates certificates={resume.certificates} />
            {/* <!-- REFERENCES --> */}
            <div className="html2pdf__page-break"></div>
            <References references={resume.references} />

            {/* <!-- INTERESTS --> */}
            {/* <% if (resume.interests.length > 0) { %> */}

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
            {/* <% } %> */}
          </div>
        </div>
      </main>
    </>
  );
}
