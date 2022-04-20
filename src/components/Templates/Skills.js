import React from "react";

export default function Skills({ skills, handleSectionClick }) {
  function handleClick(iKey) {
    handleSectionClick("skills", iKey);
  }
  return (
    <>
      {skills.length > 0 ? (
        <section className="skills section" id="skills">
          <h2 className="section-title">Skills</h2>
          <div className="skills_content bd-grid">
            <ul className="skills_data">
              {skills.map((o) => {
                const iKey = Object.keys(o)[0];
                const val = o[Object.keys(o)[0]];
                return (
                  <>
                    <li
                      className="skills_name"
                      key={iKey}
                      onClick={() => handleClick(iKey)}
                    >
                      <span className="skills_circle"></span>
                      {val.name}
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}
