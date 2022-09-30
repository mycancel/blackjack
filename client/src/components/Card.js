import React, { useEffect } from 'react'
import { QUERY_DRAW_CARD } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { uuid } from '../utils/helpers';

const Card = ({ order,  handLength, setTotal, valueArray, hasHiddenCard = false }) => {
  // Card information is queried based on order number
  const {loading, data} = useQuery(QUERY_DRAW_CARD, {
    variables: {order: order}
  });

  const card = data?.drawCard;
  const alt = card?.name + ' of ' + card?.suit;

  useEffect(() => {
    // When the data is found,
    if (data && card) {
      // the value of the card is pushed into the valueArray
      valueArray.push(card?.value);
    }
    // When the valueArray is the length of the hand
    if (valueArray.length === handLength) {
      // And there is no hidden cards in the hand
      if (!hasHiddenCard) {
        // The elements in the valueArray are added together
        let total = valueArray.reduce((a,b) => a + b);
        // If the total is more than 21, but includes an ace (card value = 11),
        // The card value of the ace is reduced to '1'
        // TODO: reduce by 10 multiplied by the number of aces in array
        if (total > 21 && valueArray.includes(11)) total = total - 10;
        // and set to either setPlayerTotal or setDealerTotal
        setTotal(total);
      // If there is a hidden card in the hand,
      } else {
        // The hand would be the dealer hand on the first round,
        // and only the second card (of an array of 2 elements) is counted
        const total = valueArray[1];
        setTotal(total);
      }
    }
  })

  if (loading) {
    return (
      <img 
        key={uuid()}
        alt='Loading'
        src='/images/backImage.jpg'>
      </img>
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