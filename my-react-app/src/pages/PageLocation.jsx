import Location from "../components/Location";
import {useParams} from "react-router-dom";
import {getAllLogements} from "../assets/data/loadLogement";
import React, {useEffect, useState} from "react";

function PageLocation({logements}) {
  // exemple : récupération du logement à afficher
  const {id} = useParams();

  console.log("id param:", id);
  console.log("logements:", logements);

  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (logements && logements.length > 0) {
      const loc = logements.find((location) => location.id === id);
      console.log("location trouvée:", loc);
      setLocation(loc);
    }
  }, [id, logements]);

  if (!location) {
    return <div>Location non trouvée</div>;
  }

  return <Location data={location} />;
}

export default PageLocation;