import React from "react";

export default function Certificates({ certificates }) {
  return (
    <>
      {certificates.length > 0 ? (
        <section className="certificate section" id="certificate">
          <h2 className="section-title">Certificates</h2>
          <div className="certificate_container bd-grid">
            {certificates.map((o) => {
              return (
                <>
                  <div className="certificate_content">
                    <h3 className="certificate_title">
                      {(() => {
                        let arr = [];
                        if (o.name.length > 0) {
                          arr.push(o.name);
                        }
                        if (o.issuer.length > 0) {
                          arr.push(o.issuer);
                        }
                        if (o.endDate) {
                          arr.push(o.endDate.substring(0, 4));
                        }
                        return arr.join(" - ");
                      })()}
                    </h3>
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
