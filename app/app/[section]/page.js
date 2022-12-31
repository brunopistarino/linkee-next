import Image from "next/image";

import TrashIcon from "../../../components/icons/trash.svg";

export async function getData(sectionId) {
  const res = await fetch(process.env.URL + "/api/sections/" + sectionId);
  // data = {
  //   section: resSection,
  //   cards: resCards,
  // };
  return res.json();
}

export default async function Page({ params }) {
  const sectionId = params.section;
  const data = await getData(sectionId);
  const sectionData = data.data.section;

  const cards = ["", "", "", "", "", "", "", "", ""];

  return (
    <main className="section-view">
      <section className="head">
        <div className="sectionTitle">
          <span className="emoji">{sectionData.emoji}</span>
          <h1 className="title" contentEditable suppressContentEditableWarning>
            {sectionData.name}
          </h1>
        </div>
        <TrashIcon />
      </section>

      <section className="card-container">
        {/* <div className="card add-cart" onClick={showModal}>
          <div>+</div>
        </div> */}
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <a href="https://youtube.com" rel="noreferrer" target="_blank">
              {/* <img
                className="card-img"
                src="https://s2.googleusercontent.com/s2/favicons?domain=https://www.pluralsight.com/guides/how-to-reference-a-function-in-another-component&sz=256"
                alt=""
              /> */}
              <Image
                alt=""
                width={64}
                height={64}
                src="https://s2.googleusercontent.com/s2/favicons?domain=https://www.pluralsight.com/guides/how-to-reference-a-function-in-another-component&sz=256"
              ></Image>
              <p className="card-title">Youtube</p>
            </a>
          </div>
        ))}
      </section>
    </main>
  );
}
