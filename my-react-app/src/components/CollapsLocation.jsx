import React from "react";
import Collaps from "./Collaps";
import Star from "./Star";

export default function CollapsLocation({data}) {
  return (
    <>
      <div className="positionAll">
        <div className="Position-hostLocation">
          <div className="hostLocation">
            <div className="host-container">
              <h1 className="Title-Location">{data.title}</h1>
              <div className="nameImg">
              <div className="host-name">{data.host.name}</div>
              <img
                className="host-picture"
                src={data.host.picture}
                alt={data.host.name}
              />
              </div>
            </div>
            
            <h2 className="Subtitle-Location">{data.location}</h2>
            
          </div>
          <div className="containter-subStar">
              <Star rating={data.rating} />
          <div className="tags-container">
            {data.tags.map((tag, index) => (
              <div className="tag" key={index}>
                {tag}
              </div>
              
            ))}
          </div>
        </div>
</div>
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
      </div>
    </>
  );
}
