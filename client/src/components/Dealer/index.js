import React from 'react';
import Card from '../Card';
import { uuid } from '../../utils/helpers';
import { useGameContext } from '../../utils/GameContext';
import './Dealer.css'

const Dealer = ({ hand, dealerLength, setDealerTotal, blackJack, setBlackJack, setFirst }) => {
  // The turn value is recieved from GameContext
  const { turn } = useGameContext();
  // The valueArray is assigned an empty array
  const valueArray = [];

  // If it is not the player's turn (turn === 1), it is the dealer's turn
  // and both cards are revealed.
  if (turn > 1 || blackJack) {
    return (
      <article className="dealer">
        {hand.map((card) => <Card key={uuid()} order={card} handLength={dealerLength} setTotal={setDealerTotal} valueArray={valueArray} setBlackJack={setBlackJack}/>)}
      </article>
    )
  }
  // If it is the first round, the article has the "firstRound" class
  // and the hasHiddenCard value is passed into the Card component
  else {
    return (
      <article className="dealer firstRound">
        {hand.map((card) => <Card key={uuid()} order={card} handLength={dealerLength} setTotal={setDealerTotal} valueArray={valueArray} setBlackJack={setBlackJack} hasHiddenCard={true} setFirst={setFirst}/>)}
      </article>
    )
  }
}

export default Dealer;