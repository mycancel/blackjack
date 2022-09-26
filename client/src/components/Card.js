import React, { useEffect } from 'react'
import { QUERY_DRAW_CARD } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { uuid } from '../utils/helpers';

const Card = ({ order, setCardValue }) => {
  const {loading, data} = useQuery(QUERY_DRAW_CARD, {
    variables: {order: order}
  });

  const card = data?.drawCard;
  const alt = card?.name + ' of ' + card?.suit;

  useEffect(() => {
    if (card) {
      setCardValue(card?.value)
    }
  });

  if (loading) {
    return (
      <div key={uuid()}>
        Loading
      </div>
    )
  }

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