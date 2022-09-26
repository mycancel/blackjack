import React from 'react'
import Card from './Card'
import { uuid } from '../utils/helpers'

const Hand = ({ hand, setPlayerCount }) => {
  return (
    <article>
      {hand.map((card) => <Card key={uuid()} order={card} setCardValue={setPlayerCount}/>)}
    </article>
  )
}

export default Hand;