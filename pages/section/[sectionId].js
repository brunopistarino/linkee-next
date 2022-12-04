import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import LogoIcon from "../../components/icons/logo.svg";
import LogoutIcon from "../../components/icons/logout.svg";

import SectionModal from "../../components/SectionModal";
import SectionView from "../../components/SectionView";
// import axios from "axios";

export default function Home({ data, data2 }) {
  // const { sectionId } = useParams();
  const [sections, setSections] = useState(data);
  const [showSectionModal, setShowSectionModal] = useState(false);
  const showModal = () => setShowSectionModal(true);
  const hideModal = () => setShowSectionModal(false);
  // console.log(sectionId);
  console.log(data);
  console.log(data2);

  const router = useRouter();
  const { sectionId } = router.query;

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

        {sectionId ? (
          <SectionView sectionData={data2.section} />
        ) : (
          <div className="logo-section">
            <LogoIcon />
          </div>
        )}
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(process.env.URL + "/api/sections");
  const data = await res.json();

  const { sectionId } = context.params;

  const res2 = await fetch(process.env.URL + "/api/sections/" + sectionId);
  const data2 = await res2.json();

  return {
    // props: { photos: datas.data },
    props: { data: data.data, data2: data2.data },
  };
};
