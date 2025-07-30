import React from "react";
import Star from "./Star";

export default function InfoLocation({data}) {
  return (
    <>
      <div className="positionAll">
            <div className="titleSub-container">
              <h1 className="Title-Location">{data.title}</h1>
              <h2 className="Subtitle-Location">{data.location}</h2>
            <div className="tags-container">
              {data.tags.map((tag, index) => (
                <div className="tag" title={tag} key={index}>
                  {tag} 
                </div>
              ))}
            </div>
          </div>
          <div className="hostStar">
            <div className="hostPicture">
            <div className="host-name">{data.host.name}</div>
            <img
              className="host-picture"
              src={data.host.picture}
              alt={data.host.name}
            />
            </div>
            <div className="containter-subStar">
              <Star rating={data.rating} />
            </div>
         
        </div>
      </div>
    </>
  );
}
