import React from 'react'
import { QUERY_DRAW_CARD } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { uuid } from '../utils/helpers';

const Card = ({ order }) => {
  const {loading, data} = useQuery(QUERY_DRAW_CARD, {
    variables: {order: order}
  });
  const card = data?.drawCard;
  const alt = card?.name + " of " + card?.suit;

  if (loading) {
    return (
      <div key={uuid()}>
        Loading
      </div>
    )
  }

  return (
      <img src={card.frontImage} alt={alt} key={card.id} className="card" id={JSON.stringify(card.value)}></img>
  )
}

export default Card