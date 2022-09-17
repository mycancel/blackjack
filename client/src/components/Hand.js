import React from 'react';
import Card from './Card';

const Hand = ({ player }) => {
  // TODO: Query card information
  return (
    <div>
      { player.map((card) => <Card order={card}/>)}
    </div>
  )
}

export default Hand