import React from "react";
import {
  IoLogoLinkedin,
  IoLogoTwitter,
  IoChevronForwardSharp,
} from "react-icons/io5";
export default function Profiles({ profiles, handleSectionClick }) {
  function handleClick(iKey) {
    console.log(`${iKey} clicked`);
    handleSectionClick("profiles", iKey);
  }

  function renderSwitch(param) {
    switch (param) {
      case "LinkedIn":
        return <IoLogoLinkedin />;
      case "Twitter":
        return <IoLogoTwitter />;
      default:
        return <IoChevronForwardSharp />;
    }
  }
  return (
    <>
      <section className="social section" id="social" key="social">
        <h2 className="section-title">Social</h2>
        <div className="social_container bd-grid">
          {profiles.map((o) => {
            const iKey = Object.keys(o)[0];
            const val = o[Object.keys(o)[0]];
            return (
              <div
                key={iKey}
                onClick={() => handleClick(iKey)}
                style={{ width: "200px" }}
              >
                <a href={val.url} target="_blank" className="social_link">
                  {/* <i className="bx bxl-twitter-square social_icon"></i> */}
                  {renderSwitch(val.network)}
                  <span className="username" style={{ marginLeft: "6px" }}>
                    @{val.username}
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
