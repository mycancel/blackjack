import React, { useEffect } from 'react'
import { QUERY_DRAW_CARD } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { uuid } from '../utils/helpers';

const Card = ({ order,  handLength, setTotal, valueArray, setBlackJack, hasHiddenCard = false, setFirst }) => {
  // Card information is queried based on order number
  const {loading, data} = useQuery(QUERY_DRAW_CARD, {
    variables: {order: order}
  });

  const card = data?.drawCard;
  const alt = card?.name + ' of ' + card?.suit;

  const calculateTotal = async () => {
    // And there is no hidden cards in the hand
    if (!hasHiddenCard) {
      // The elements in the valueArray are added together
      let total = await valueArray.reduce((a,b) => a + b);
      // If the total is more than 21, but includes an ace (card value = 11),
      if (total > 21 && valueArray.includes(11)) {
        // The card value of each ace is reduced to '1' until total is less than 21
        total = await adjustTotalForAces(total, valueArray);
      }
      // and set to either setPlayerTotal or setDealerTotal
      setTotal(total);
    // If there is a hidden card in the hand,
    } else {
      // The hand would be the dealer hand on the first round,
      // and only the second card (of an array of 2 elements) is counted
      let total = valueArray[1];
      // If the dealer hand totals 21, they have a blackjack.
      if ((total + valueArray[0]) === 21) {
        // The total is set to 21
        total = 21;
        // and the blackJack state is set to true
        setBlackJack(true);
      }
      // set the state for firstDealerTotal
      setFirst(total);
      // set the DealerTotal state
      setTotal(total);
    }
  }

  // Aces have the value of 11 or 1
  // This function decreases the value of ace(s) in the valueArray if the total is over 21
  const adjustTotalForAces = (originalTotal, array) => {
    // The number of aces and counted
    const aceInstances = array.reduce((inst, el) => (el === 11 ? inst + 1 : inst), 0);
    let newTotal = originalTotal;
    // Then, the total is subtracted by 10 for each ace...
    for (let i = 0; i < aceInstances; i++) {
      newTotal = newTotal - 10;
      // until the total is less than or equal to 21.
      if (newTotal <= 21) break;
    }
    return newTotal;
  }

  useEffect(() => {
    // When the data is found,
    if (data && card) {
      // the value of the card is pushed into the valueArray
      valueArray.push(card?.value);
    }
    // When the valueArray is the length of the hand
    if (valueArray.length === handLength) {
      calculateTotal();
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