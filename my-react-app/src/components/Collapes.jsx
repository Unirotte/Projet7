import {useState} from "react";

export default function Collaps({title, text, children, className = ""}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const content = text !== undefined ? text : children;

  return (
    <div className={`position-collaps ${isOpen ? "open" : ""} ${className}`}>
      <div className={`collaps ${className}`} onClick={toggle}>
        <h2 className={`collapsTitle`}>{title}</h2>
        <span className={`arrow ${isOpen ? "open" : ""}`}>
          <i className="fa-solid fa-chevron-up"></i>
        </span>
      </div>
      <div className={`collapsContent ${isOpen ? "open" : ""}${className}`}>
        <div className={`collapsText${className}`}>{content}</div>
      </div>
    </div>
  );
}
