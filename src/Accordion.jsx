import { useState } from "react";

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="accordion">
      <button onClick={toggleOpen}>
        {title} {isOpen ? "" : ""}
      </button>

      {isOpen && (
        <div className="">
          <p> {content} </p>
        </div>
      )}
    </div>
  );
}

export default Accordion;

//BrowserRouter
//Routes
//Route
//Link
