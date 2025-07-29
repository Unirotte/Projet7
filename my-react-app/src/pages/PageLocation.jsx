import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getAllLogements} from "../assets/data/loadLogement";
import "../assets/compileur/CompileurPageLocationCSS/compileurPageLocation.css";
import ErrorPage from "./ErrorPage.jsx";
import {Carrousel, InfoLocation} from "../components/Index";
import Collaps from "../components/Collapes.jsx";

export default function PageLocation() {
  const {id} = useParams();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const logements = getAllLogements();
    const loc = logements.find((logement) => logement.id === id);
    setLocation(loc);
  }, [id]);

  if (!location) {
    return <ErrorPage />;
  }

  return (
    <div className="AllPage">
      <Carrousel data={location} />
      <InfoLocation data={location} />
      <div className="collapsLocation-container">
        <Collaps title="Description" className="location-collaps">
          {location.description}
        </Collaps>
        <Collaps title="Équipements" className="location-collaps">
          <ul>
            {location.equipments.map((item, index) => (
              <li className="textCollaps" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </Collaps>
      </div>
    </div>
  );
}
