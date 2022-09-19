import React from 'react';
import Card from '../Card';
import { uuid } from '../../utils/helpers';
import './Dealer.css'

const Dealer = ({ hand, turn }) => {
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