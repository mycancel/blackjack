import React from 'react'
import { drawNumber } from '../utils/helpers';

const Game = () => { 
  return (
    <>
      {/* TODO: Navigation bar for going back to the home page */}
      {/* TODO: Add main element with hand component and dealer component */}

      <button onClick={drawNumber()}>Deck</button>
    </>
  )
}

export default Game;