import Link from "next/link";

import LogoIcon from "../../components/icons/logo.svg";
import LogoutIcon from "../../components/icons/logout.svg";

export async function getData() {
  const res = await fetch(process.env.URL + "/api/sections");
  return res.json();
}

export default async function RootLayout({ children }) {
  //   const [showSectionModal, setShowSectionModal] = useState(false);

  const data = await getData();
  const sections = data.data;
  const sectionId = "tmp";
  const showModal = () => setShowSectionModal(true);
  const hideModal = () => setShowSectionModal(false);

  return (
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
              <Link href={`/app/${section._id}`} key={index}>
                <div
                  className={`section ${index === sectionId ? "active" : ""}`}
                >
                  {section.emoji}
                </div>
              </Link>
            ))}
          </span>
          {/* <div onClick={showModal}>+</div> */}
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
      {children}
    </div>
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

// export async function getData() {
//   //   let res = await fetch("https://external-service.com/data", {
//   //     headers: {
//   //       authorization: process.env.API_KEY,
//   //     },
//   //   });

//   const res = await fetch(process.env.URL + "/api/sections");

//   return res.json();
// }
