import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { ReactComponent as LogoIcon } from "../icons/logo.svg";
import { ReactComponent as LogoutIcon } from "../icons/logout.svg";

import SectionModal from "../components/SectionModal";
import SectionView from "../components/SectionView";
import axios from "axios";

const Application = () => {
  const { sectionId } = useParams();
  const [sections, setSections] = useState([]);
  const [showSectionModal, setShowSectionModal] = useState(false);
  const showModal = () => setShowSectionModal(true);
  const hideModal = () => setShowSectionModal(false);
  console.log(sectionId);

  useEffect(() => {
    axios // get all sections
      .get("http://localhost:5001/api/sections")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setSections(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {showSectionModal && <SectionModal hideModal={hideModal} />}
      <div id="app-view">
        <nav>
          <div className="top">
            <Link to="/">
              <LogoIcon />
            </Link>
            <hr />
          </div>
          <div className="mid">
            <span className="section-container">
              {sections.map((section, index) => (
                <Link to={`/section/${section._id}`} key={index}>
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
          <SectionView sectionId={sectionId} />
        ) : (
          <div className="logo-section">
            <LogoIcon />
          </div>
        )}
      </div>
    </>
  );
};

export default Application;
