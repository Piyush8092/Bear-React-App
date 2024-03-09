import React from 'react';

function BeerCard({ beer }) {
 return (
    <div className="beer-card">
      <img src={beer.image_url} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p>{beer.description}</p>
    </div>
 );
}

export default BeerCard;