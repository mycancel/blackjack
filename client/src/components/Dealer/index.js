import React from 'react';
import Card from '../Card';
import { uuid } from '../../utils/helpers';
import { useGameContext } from '../../utils/GameContext';
import './Dealer.css'

const Dealer = ({ hand, dealerLength, setDealerTotal }) => {
  // The turn value is recieved from GameContext
  const { turn } = useGameContext();
  // The valueArray is assigned an empty array
  const valueArray = [];

  if (turn > 1 || hand.length > 2) {
    return (
      <article className="dealer">
        {hand.map((card) => <Card key={uuid()} order={card} handLength={dealerLength} setTotal={setDealerTotal} valueArray={valueArray}/>)}
      </article>
    )
  }
  // If it is the first round, the article has the "firstRound" class
  // and the hasHiddenCard value is passed into the Card component
  else {
    return (
      <article className="dealer firstRound">
        {hand.map((card) => <Card key={uuid()} order={card} handLength={dealerLength} setTotal={setDealerTotal} valueArray={valueArray} hasHiddenCard={true}/>)}
      </article>
    )
  }
}

export default Dealer;