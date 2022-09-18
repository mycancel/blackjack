import React, { useEffect, useState } from 'react'
import { drawNumber, startGame } from '../utils/helpers';
import Card from '../components/Card';


const Game = () => { 
  // card will be used to represent the dealt out card(s)
  const [card, setCards] = useState(startGame());
  // The hand wil be what the player is holding (array of integers)
  const [hand, setHand] = useState([]);
  
  // When the value of card changes, localStorage is updated
  useEffect(() => {
    // 'player' array is recieved from localStorage
    const player = JSON.parse(localStorage.getItem('player')) || [];
    // If card is an object,
    if (typeof card === 'object') {
      // each element of the object is added to the 'player' array
      card.forEach((num) => player.push(num));
    // If the card is not an object, it will be a number.
    // So that is added to the 'player' array
    } else player.push(card);
    // Finally, localStorage is updated with the new 'player' array
    localStorage.setItem('player', JSON.stringify(player));
    // and the hand is set to the updated array from localStorage
    setHand(JSON.parse(localStorage.getItem('player')) || []);
  }, [card]);

  return (
    <>
      {/* TODO: Navigation bar for going back to the home page */}
      <button onClick={() => setCards(drawNumber())}>Deck</button>
      {/* TODO: Add main element with Hand component and dealer component */}
      <main>
        {hand.map((card) => <Card key={Math.ceil(Math.random * 100000)} order={card}/>)}
      </main>
    </>
  )
}

export default Game;