import React from 'react'
import { QUERY_DRAW_CARD } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { uuid } from '../utils/helpers';

const Card = ({ order }) => {
  const {loading, data} = useQuery(QUERY_DRAW_CARD, {
    variables: {order: order}
  });
  const card = data?.drawCard;

  if (loading) {
    return (
      <div key={uuid()}>
        Loading
      </div>
    )
  }

  return (
    <article key={card.id} className="card" id={JSON.stringify(card.value)}>
      <p>{card.name} of {card.suit}</p>
    </article>
  )
}

export default Card