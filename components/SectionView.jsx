import { useState, useEffect } from "react";

import TrashIcon from "./icons/trash.svg";
import LogoIcon from "./icons/logo.svg";

import LinkModal from "./LinkModal";

const SectionView = ({ sectionData }) => {
  const [section, setSection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState(["", "", "", "", "", "", "", "", ""]);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const showModal = () => setShowLinkModal(true);
  const hideModal = () => setShowLinkModal(false);
  // console.log("=================");
  // console.log(sectionData);
  // console.log("=================");

  // useEffect(() => {
  //   const fetchSection = async () => {
  //     const res = await fetch(
  //       `http://localhost:5001/api/sections/${sectionId}`
  //     );
  //     const section = await res.json();
  //     setSection(section);
  //     setLoading(false);
  //   };
  //   fetchSection();
  //   console.log(section);
  // }, [sectionId]);

  // if (loading) {
  //   return (
  //     <main className="section-view">
  //       <div>Loading...</div>
  //     </main>
  //   );
  // }

  return (
    <>
      {showLinkModal && <LinkModal hideModal={hideModal} />}
      <main className="section-view">
        <section className="head">
          <div className="sectionTitle">
            <span className="emoji">{sectionData.emoji}</span>
            <h1
              className="title"
              contentEditable
              suppressContentEditableWarning
            >
              {sectionData.name}
            </h1>
          </div>
          <TrashIcon />
        </section>

        <section className="card-container">
          <div className="card add-cart" onClick={showModal}>
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
    </>
  );
};

export default SectionView;
