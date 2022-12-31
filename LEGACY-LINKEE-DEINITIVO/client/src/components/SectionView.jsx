import { useState, useEffect } from "react";

import { ReactComponent as TrashIcon } from "../icons/trash.svg";
import { ReactComponent as LogoIcon } from "../icons/logo.svg";

const SectionView = ({ sectionId }) => {
  const [section, setSection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState(["", "", "", "", "", "", "", "", ""]);

  useEffect(() => {
    const fetchSection = async () => {
      const res = await fetch(
        `http://localhost:5001/api/sections/${sectionId}`
      );
      const section = await res.json();
      setSection(section);
      setLoading(false);
    };
    fetchSection();
    console.log(section);
  }, [sectionId]);

  if (loading) {
    return (
      <main className="section-view">
        <div>Loading...</div>
      </main>
    );
  }

  return (
    <main className="section-view">
      <section className="head">
        <div className="sectionTitle">
          <span className="emoji">{section.emoji}</span>
          <h1 className="title" contentEditable suppressContentEditableWarning>
            {section.name}
          </h1>
        </div>
        <TrashIcon />
      </section>

      <section className="card-container">
        <div className="card add-cart">
          <div>+</div>
        </div>
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <a href="https://youtube.com" rel="noreferrer" target="_blank">
              <img
                className="card-img"
                src="https://s2.googleusercontent.com/s2/favicons?domain=https://www.pluralsight.com/guides/how-to-reference-a-function-in-another-component&sz=256"
                alt=""
              />
              <p className="card-title">Youtube</p>
            </a>
          </div>
        ))}
      </section>
    </main>
  );
};

export default SectionView;
