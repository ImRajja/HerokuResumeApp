import React from "react";

export default function Education({ education, handleSectionClick }) {
  function handleClick(iKey) {
    handleSectionClick("education", iKey);
  }

  return (
    <>
      <section className="education section" id="education" key="education">
        <h2 className="section-title">Education</h2>
        <div className="education_container bd-grid">
          {education.map((o) => {
            const iKey = Object.keys(o)[0];
            const val = o[Object.keys(o)[0]];
            return (
              <>
                <div
                  className="education_content"
                  key={iKey}
                  onClick={() => handleClick(iKey)}
                >
                  <div className="education_time">
                    <span className="education_rounder"></span>
                    <span className="education_line"></span>
                  </div>
                  <div className="education_data bd-grid">
                    <h3 className="education_title">{val.studyType}</h3>
                    <span className="education_studies">{val.institution}</span>
                    <span className="education_year">
                      {val.startDate.substring(0, 4)}
                      {val.endDate && -val.endDate.substring(0, 4)}
                    </span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}
