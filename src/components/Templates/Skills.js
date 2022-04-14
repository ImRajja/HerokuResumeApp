import React from "react";

export default function Skills({ skills }) {
  return (
    <>
      {skills.length > 0 ? (
        <section className="skills section" id="skills">
          <h2 className="section-title">Skills</h2>
          <div className="skills_content bd-grid">
            <ul className="skills_data">
              {skills.map((o) => {
                return (
                  <>
                    <li className="skills_name">
                      <span className="skills_circle"></span>
                      {o.name}
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
