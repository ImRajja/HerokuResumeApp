import React from "react";

export default function Languages({ languages, handleSectionClick }) {
  function handleClick(iKey) {
    handleSectionClick("languages", iKey);
  }
  return (
    <>
      {languages.length > 0 ? (
        <section className="languages section">
          <h2 className="section-title">Languages</h2>
          <div className="languages_container">
            <ul className="languages_content bd-grid">
              {languages.map((o) => {
                const iKey = Object.keys(o)[0];
                const val = o[Object.keys(o)[0]];
                return (
                  <>
                    <li
                      className="languages_name"
                      key={iKey}
                      onClick={() => handleClick(iKey)}
                    >
                      <span className="languages_circle"></span>
                      {val.language}
                      {/* <div className="education_title">
                        {val.language}
                        {"   "}
                      </div>

                      <div className="education_year">{val.fluency}</div> */}
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
