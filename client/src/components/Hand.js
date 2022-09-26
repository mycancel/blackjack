import React from 'react'
import Card from './Card'
import { uuid } from '../utils/helpers'

const Hand = ({ hand, playerLength, setPlayerTotal }) => {
  // The valueArray is assigned an empty array
  const valueArray = [];
  return (
    <article>
      {hand.map((card) => <Card key={uuid()} order={card} handLength={playerLength} setTotal={setPlayerTotal} valueArray={valueArray}/>)}
    </article>
  )
}

export default Hand;