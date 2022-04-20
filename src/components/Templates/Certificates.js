import React from "react";

export default function Certificates({ certificates, handleSectionClick }) {
  function handleClick(iKey) {
    handleSectionClick("certificates", iKey);
  }
  return (
    <>
      {certificates.length > 0 ? (
        <section className="certificate section" id="certificate">
          <h2 className="section-title">Certificates</h2>
          <div className="certificate_container bd-grid">
            {certificates.map((o) => {
              const iKey = Object.keys(o)[0];
              const val = o[Object.keys(o)[0]];
              return (
                <>
                  <div
                    className="certificate_content"
                    key={iKey}
                    onClick={() => handleClick(iKey)}
                  >
                    <h3 className="certificate_title">
                      {(() => {
                        let arr = [];
                        if (val.name.length > 0) {
                          arr.push(val.name);
                        }
                        if (val.issuer.length > 0) {
                          arr.push(val.issuer);
                        }
                        if (val.endDate) {
                          arr.push(val.endDate.substring(0, 4));
                        }
                        return arr.join(" - ");
                      })()}
                    </h3>
                    {/* <p className="certificate_description"></p> */}
                  </div>

                  {/* <% }) %> */}
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
