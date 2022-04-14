import React from "react";

export default function Work({ work }) {
  return (
    <>
      {work.length > 0 ? (
        <section className="experience section" id="experience">
          <h2 className="section-title">Experience</h2>
          <div className="experience_container bd-grid">
            {work.map((o) => {
              return (
                <>
                  <div className="experience_content">
                    <div className="experience_time">
                      <span className="experience_rounder"></span>
                      <span className="experience_line"></span>
                    </div>
                    <div className="experience_data bd-grid">
                      <h3 className="experience_title">
                        {o.position.toUpperCase()}
                      </h3>
                      <span className="experience_company">
                        {(() => {
                          let ds = new Date(o.startDate);
                          let ys = o.startDate.substring(0, 4);
                          var sdate = ds
                            ? `${ds.toLocaleString("en-US", {
                                month: "long",
                              })}, ${ys}`
                            : "";
                          if (o.endDate) {
                            let de = new Date(o.endDate);
                            let ye = o.endDate.substring(0, 4);
                            var edate = `${de.toLocaleString("en-US", {
                              month: "long",
                            })}, ${ye}`;
                          } else {
                            var edate = "Till Date";
                          }
                          return `${sdate} - ${edate}`;
                        })()}
                        {" | "}
                        {o.url ? <a href={o.url}>{o.name}</a> : <a>{o.name}</a>}
                      </span>
                      <p className="experience_description">{o.summary}</p>
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
