import React from 'react'
import { QUERY_DRAW_CARD } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { uuid } from '../utils/helpers';
import { useGameContext } from '../utils/GameContext';

const Card = ({ order, handOwner }) => {
  const { addDealerCount, addPlayerCount, incrementDealerAce, incrementPlayerAce } = useGameContext();
  const {loading, data} = useQuery(QUERY_DRAW_CARD, {
    variables: {order: order}
  });
  const card = data?.drawCard;
  const alt = card?.name + ' of ' + card?.suit;

  if (card?.name === 'Ace' && handOwner === 'dealer') console.log('incrementDealer');
  if (card?.name === 'Ace' && handOwner === 'player') console.log('incrementPlayer');

  if (loading) {
    return (
      <div key={uuid()}>
        Loading
      </div>
    )
  }

  console.log(card?.value);

  return (
      <img 
        src={card.frontImage} 
        alt={alt} 
        key={card.id} 
        className="card">
      </img>
  )
}

export default Card