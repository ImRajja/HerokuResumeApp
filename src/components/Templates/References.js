import React from "react";

export default function References({ references }) {
  return (
    <>
      {references.length > 0 ? (
        <section className="references section" id="references">
          <h2 className="section-title">References</h2>
          <div className="references_container bd-grid">
            {references.map((o) => {
              return (
                <>
                  <div className="references_content bd-grid">
                    {/* <span className="references_subtitle"></span> */}
                    <h3 className="references_title">{o.name}</h3>
                    <p>{o.reference}</p>
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
