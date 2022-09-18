import React from 'react'
import { QUERY_DRAW_CARD } from '../utils/queries';
import { useQuery } from '@apollo/client';

const Card = ({ order }) => {
  const {loading, data} = useQuery(QUERY_DRAW_CARD, {
    variables: {order: order}
  });
  const card = data?.drawCard;

  if (loading) {
    return (
      <div key={Math.ceil(Math.random * 100000)}>
        Hello
      </div>
    )
  }

  return (
    <div key={card.order}>
      <p>{card.name}</p>
    </div>
  )
}

export default Card