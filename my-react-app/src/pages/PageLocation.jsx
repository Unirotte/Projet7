import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllLogements } from "../assets/data/loadLogement";
import Carrousel from "../components/Carrousel.jsx";
import Collaps from "../components/CollapsLocation";
import "../assets/collapsLocationCSS/collapsLocation.css"; 
import InfoLocation from "../components/InfoLocation.jsx";
import "../assets/infoLocationCSS/infoLocation.css"
import ErrorPage from "./ErrorPage.jsx";

export default function PageLocation() {
  const { id } = useParams();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const logements = getAllLogements();
    const loc = logements.find((logement) => logement.id === id);
    setLocation(loc);
  }, [id]);

  if (!location) {
    return <ErrorPage/>;
  }

  return (
    <div className="AllPage">
      <Carrousel data={location} />
      <InfoLocation data={location} />
      <Collaps data={location} />
    </div>
  );
}