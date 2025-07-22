import React from 'react';

function Location({ data }) {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <div>
        {data.images.map((img, index) => (
          <img key={index} src={img} alt={`${data.title} image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default Location;