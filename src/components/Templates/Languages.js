import React from "react";

export default function Languages({ languages }) {
  return (
    <>
      {languages.length > 0 ? (
        <section className="languages section">
          <h2 className="section-title">Languages</h2>
          <div className="languages_container">
            {languages.map((o) => {
              return (
                <>
                  <ul className="languages_content bd-grid">
                    <li className="languages_name">
                      <span className="languages_circle"></span>
                      {o.language}
                    </li>
                  </ul>
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
