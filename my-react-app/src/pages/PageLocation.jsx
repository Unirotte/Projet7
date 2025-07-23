import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllLogements } from "../assets/data/loadLogement";
import Carrousel from "../components/Carrousel.jsx";
import Collaps from "../components/CollapsLocation";
import "../assets/collapsLocationCSS/collapsLocation.css"; 

export default function PageLocation() {
  const { id } = useParams();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const logements = getAllLogements();
    const loc = logements.find((logement) => logement.id === id);
    setLocation(loc);
  }, [id]);

  if (!location) {
    return <div>Location non trouvée</div>;
  }

  return (
    <div>
      <Carrousel data={location} />
      <Collaps data={location} />
    </div>
  );
}