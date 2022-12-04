import Link from "next/link";
import { useState, useEffect } from "react";

import LogoIcon from "../components/icons/logo.svg";
import LogoutIcon from "../components/icons/logout.svg";

import SectionModal from "../components/SectionModal";
import SectionView from "../components/SectionView";
// import axios from "axios";

export default function Home({ data }) {
  // const { sectionId } = useParams();
  const [sections, setSections] = useState(data);
  const [showSectionModal, setShowSectionModal] = useState(false);
  const showModal = () => setShowSectionModal(true);
  const hideModal = () => setShowSectionModal(false);
  // console.log(sectionId);
  const sectionId = "tmp";
  console.log(data);

  // useEffect(() => {
  //   axios // get all sections
  //     .get("http://localhost:5001/api/sections")
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res.data);
  //       setSections(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <>
      {showSectionModal && <SectionModal hideModal={hideModal} />}
      <div id="app-view">
        <nav>
          <div className="top">
            <Link href="/">
              <LogoIcon />
            </Link>
            <hr />
          </div>
          <div className="mid">
            <span className="section-container">
              {sections.map((section, index) => (
                <Link href={`/section/${section._id}`} key={index}>
                  <div
                    className={`section ${index === sectionId ? "active" : ""}`}
                  >
                    {section.emoji}
                  </div>
                </Link>
              ))}
            </span>
            <div onClick={showModal}>+</div>
          </div>
          <div className="bot">
            <hr />
            <div className="quit">
              <a href="/logout">
                <LogoutIcon />
              </a>
            </div>
          </div>
        </nav>

        {/* {sectionId ? (
          <SectionView sectionId={sectionId} />
        ) : ( */}
        <div className="logo-section">
          <LogoIcon />
        </div>
        {/* )} */}
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(process.env.URL + "/api/sections");
  const data = await res.json();

  return {
    // props: { photos: datas.data },
    props: { data: data.data },
  };
};
