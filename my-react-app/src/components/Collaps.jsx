import { useState } from "react";

export default function Collaps({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={`position-collaps ${isOpen ? "open" : ""}`}>
      <div className="collaps" onClick={toggle}>
        <h2 className="collapsTitle">{title}</h2>
        <span className={`arrow ${isOpen ? "open" : ""}`}>
          <i className="fa-solid fa-chevron-up"></i>
        </span>
      </div>
      <div className={`collapsContent ${isOpen ? "open" : ""}`}>
        <p className="collapsText">{text}</p>
      </div>
    </div>
  );
}