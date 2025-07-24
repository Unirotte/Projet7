import React from "react";
import Collaps from "./Collaps";
import Star from "./Star";

export default function CollapsLocation({data}) {
  return (
    <>
        <div className="collapsLocation-container">
          <Collaps
            title="Description"
            text={data.description}
            className="location-collaps"
          />
          <Collaps
            title="Équipements"
            text={
              <ul>
                {data.equipments.map((item, index) => (
                  <li className="textCollaps" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            }
            className="location-collaps"
          />
        </div>
    </>
  );
}
