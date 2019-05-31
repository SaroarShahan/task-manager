import React from "react";
import ReactDOM from "react-dom";

const Portal: React.FC = ({ children }) => {
  let el = document.getElementById("modal");

  return el && ReactDOM.createPortal(children, el);
};

export default Portal;
