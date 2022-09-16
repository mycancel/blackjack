import React, { useState } from 'react'
import { drawNumber, startGame } from '../utils/helpers';
import Hand from '../components/Hand';

const Game = () => { 
  const [cards, setCards] = useState(startGame());

  return (
    <>
      {/* TODO: Navigation bar for going back to the home page */}
      <button onClick={() => setCards(drawNumber())}>Deck</button>
      {/* TODO: Add main element with hand component and dealer component */}
      <main>
        <Hand cards={cards}/>
      </main>
    </>
  )
}

export default Game;