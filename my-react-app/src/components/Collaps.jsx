export default function Collas({title, text}) {
  return (
    < div className="position-collaps">
    <details className="collaps">
        <summary className="collapsTitle">{title}</summary>
        <div className="collapsContent">
        <p className="collapsText">{text}</p>
      </div>
    </details>
    </div>
  );
}
