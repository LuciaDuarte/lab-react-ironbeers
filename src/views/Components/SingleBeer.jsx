import React from 'react';

function SingleBeer(props) {
  return (
    <div>
      <img src={props.beer.image_url} alt={props.beer.name} />
      <h1>{props.beer.name}</h1>
      <h3>{props.beer.tagline}</h3>
      <p>{props.beer.first_brewed}</p>
      <p>{props.beer.attenuation_level}</p>
      <p>{props.beer.description}</p>
      <p>{props.beer.contributed_by}</p>
    </div>
  );
}

export default SingleBeer;
