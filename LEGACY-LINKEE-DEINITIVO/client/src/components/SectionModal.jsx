import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import { ReactComponent as CloseIcon } from "../icons/x-close.svg";

import { emojis } from "./emojis";

// const SectionModal = ({ section, show, onHide }) => {
const SectionModal = ({ hideModal }) => {
  const [title, setTitle] = useState("");
  // const [emoji, setEmoji] = useState(section.emoji);
  const [emoji, setEmoji] = useState("❔");
  const [isPending, setIsPending] = useState(false);

  //   const handleTitleChange = (event) => {
  //     setTitle(event.target.value);
  //   };

  //   const handleEmojiChange = (event) => {
  //     setEmoji(event.target.value);
  //   };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     onHide();
  //   };

  const handleEmojiChange = (emoji) => {
    setEmoji(emoji);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsPending(true);
    console.log(title);
    console.log(emoji);
    axios
      .post("http://localhost:5001/api/sections", {
        name: title,
        emoji: emoji,
      })
      .then((res) => {
        console.log(res);
        setIsPending(false);
        hideModal();
      })
      .catch((err) => {
        console.log(err);
        setIsPending(false);
        hideModal();
      });
  };

  // useEffect(() => {
  //   console.log(title);
  //   console.log(emoji);
  // }, [title, emoji]);

  return (
    <div className="modal section-modal">
      <div className="container">
        <div className="content">
          <div className="form-row">
            <p className="emoji-input">{emoji}</p>
            <fieldset className="form-group">
              <label htmlFor="section-name">Section name</label>
              <input
                id="section-name"
                type="text"
                value={title}
                onChange={(e) => handleTitleChange(e)}
              />
            </fieldset>
          </div>
          <fieldset className="form-group">
            <label htmlFor="section-emoji">Section emoji</label>
            <div className="emoji-selector">
              {emojis.map((emoji, i) => (
                // <button
                //   key={i}
                //   type="button"
                //   className="emoji"
                //   value={emoji}
                //   onClick={handleEmojiChange}
                // >
                <p onClick={() => handleEmojiChange(emoji)} key={i}>
                  {emoji}
                </p>
                // </button>
              ))}
            </div>
          </fieldset>
        </div>
        <div className="actions">
          <button className="btn-secondary" onClick={hideModal}>
            Cancel
          </button>
          {isPending ? (
            <button className="btn-primary" disabled>
              Saving...
            </button>
          ) : (
            <button className="btn-primary" onClick={handleSubmit}>
              Confirm
            </button>
          )}
        </div>
        <button className="btn-close">
          <CloseIcon onClick={hideModal} />
        </button>
      </div>
    </div>
  );
  //   return (
  //     <div
  //       show={show}
  //       onHide={onHide}
  //       size="lg"
  //       aria-labelledby="contained-modal-title-vcenter"
  //       centered
  //     >
  //       <header closeButton>
  //         <h2 id="contained-modal-title-vcenter">
  //           {section.id ? "Edit Section" : "Add Section"}
  //         </h2>
  //       </header>
  //       <main>
  //         <form onSubmit={handleSubmit}>
  //           <fieldset controlId="formBasicTitle">
  //             <label>Title</label>
  //             <input
  //               type="text"
  //               placeholder="Enter title"
  //               value={title}
  //               onChange={handleTitleChange}
  //             />
  //           </fieldset>

  //           <fieldset controlId="formBasicEmoji">
  //             <label>Emoji</label>
  //             <input
  //               type="text"
  //               placeholder="Enter emoji"
  //               value={emoji}
  //               onChange={handleEmojiChange}
  //             />
  //           </fieldset>
  //         </form>
  //       </main>
  //       <footer>
  //         <button variant="primary" onClick={handleSubmit}>
  //           Save
  //         </button>
  //       </footer>
  //     </div>
  //   );
};

export default SectionModal;
