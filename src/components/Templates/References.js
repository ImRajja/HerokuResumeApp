import React from "react";

export default function References({ references, handleSectionClick }) {
  function handleClick(iKey) {
    handleSectionClick("references", iKey);
  }
  return (
    <>
      {references.length > 0 ? (
        <section className="references section" id="references">
          <h2 className="section-title">References</h2>
          <div className="references_container bd-grid">
            {references.map((o) => {
              const iKey = Object.keys(o)[0];
              const val = o[Object.keys(o)[0]];
              return (
                <>
                  <div
                    className="references_content bd-grid"
                    key={iKey}
                    onClick={() => handleClick(iKey)}
                  >
                    {/* <span className="references_subtitle"></span> */}
                    <h3 className="references_title">{val.name}</h3>
                    {/* <ul className="references_contact">
                      <li>Phone: +92-333-9296314</li>
                      <li>Email: thehaider@yahoo.com</li>
                    </ul> */}
                    <p>{val.reference}</p>
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
