import React from 'react';
import Card from '../Card';
import { uuid } from '../../utils/helpers';
import { useGameContext } from '../../utils/GameContext';
import './Dealer.css'

const Dealer = ({ hand }) => {
  const { turn } = useGameContext();
  if (turn > 1 || hand.length > 2) {
    return (
      <article className="dealer">
        {hand.map((card) => <Card key={uuid()} order={card}/>)}
      </article>
    )
  }
  else {
    return (
      <article className="dealer firstRound">
        {hand.map((card) => <Card key={uuid()} order={card}/>)}
      </article>
    )
  }
}

export default Dealer;