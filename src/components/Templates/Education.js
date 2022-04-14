import React from "react";

export default function Education({ education }) {
  return (
    <>
      <section className="education section" id="education">
        <h2 className="section-title">Education</h2>
        <div className="education_container bd-grid">
          {education.map((o) => {
            return (
              <>
                <div className="education_content">
                  <div className="education_time">
                    <span className="education_rounder"></span>
                    <span className="education_line"></span>
                  </div>
                  <div className="education_data bd-grid">
                    <h3 className="education_title">{o.studyType}</h3>
                    <span className="education_studies">{o.institution}</span>
                    <span className="education_year">
                      {o.startDate.substring(0, 4)}
                      {o.endDate && -o.endDate.substring(0, 4)}
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
