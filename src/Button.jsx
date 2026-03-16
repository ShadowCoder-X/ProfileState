import React from "react";

function Button({ children }) {
  console.log(children);
  return (
    <div>
      <button className="btn">{children}</button>
    </div>
  );
}

export default Button;
