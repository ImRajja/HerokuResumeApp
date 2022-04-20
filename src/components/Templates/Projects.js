import React from "react";

export default function Projects({ projects, handleSectionClick }) {
  function handleClick(iKey) {
    handleSectionClick("projects", iKey);
  }

  return (
    <>
      {projects.length > 0 ? (
        <section className="experience section" id="project">
          <h2 className="section-title">Projects</h2>
          <div className="experience_container bd-grid">
            {projects.map((o) => {
              const iKey = Object.keys(o)[0];
              const val = o[Object.keys(o)[0]];
              return (
                <>
                  <div
                    className="experience_content"
                    key={iKey}
                    onClick={() => handleClick(iKey)}
                  >
                    <div className="experience_time">
                      <span className="experience_rounder"></span>
                      <span className="experience_line"></span>
                    </div>
                    <div className="experience_data bd-grid">
                      <h3 className="experience_title">
                        {val.name.toUpperCase()}
                      </h3>
                      <span className="experience_company">
                        {(() => {
                          let ds = new Date(val.startDate);
                          let ys = val.startDate.substring(0, 4);
                          var sdate = ds
                            ? `${ds.toLocaleString("en-US", {
                                month: "long",
                              })}, ${ys}`
                            : "";
                          if (val.endDate) {
                            let de = new Date(val.endDate);
                            let ye = val.endDate.substring(0, 4);
                            var edate = `${de.toLocaleString("en-US", {
                              month: "long",
                            })}, ${ye}`;
                          } else {
                            var edate = "Till Date";
                          }
                          return `${sdate} - ${edate}`;
                        })()}
                        {" | "}
                        {val.url ? (
                          <a href={val.url}>{val.name}</a>
                        ) : (
                          <a>{val.name}</a>
                        )}
                      </span>
                      <p className="experience_description">{val.summary}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}
