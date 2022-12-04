import { useState } from "react";
// import axios from "axios";

import CloseIcon from "./icons/x-close.svg";

const LinkModal = ({ hideModal }) => {
  const [isPending, setIsPending] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  return (
    <div className="modal section-modal">
      <div className="container">
        <div className="content">
          <fieldset className="form-group">
            <label htmlFor="link-name">Link name</label>
            <input
              id="link-name"
              type="text"
              value=""
              onChange={(e) => handleTitleChange(e)}
            />
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="link-url">Link url</label>
            <input
              id="link-url"
              type="text"
              value=""
              onChange={(e) => handleTitleChange(e)}
            />
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
};

export default LinkModal;
