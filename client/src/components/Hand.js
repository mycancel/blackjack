import React from 'react'
import Card from './Card'
import { uuid } from '../utils/helpers'

const Hand = ({ hand }) => {
  return (
    <article>
      {hand.map((card) => <Card key={uuid()} order={card} handOwner="player"/>)}
    </article>
  )
}

export default Hand;