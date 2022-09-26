import React from 'react';
import { drawNumber } from '../utils/helpers';
import { useGameContext } from '../utils/GameContext';

const Footer = ({hand, setHand}) => {
  const {turn, incrementTurn} = useGameContext();
  return (
    <footer>
        <button 
          id='hit'
          // When the button is clicked,
          onClick={() => {
            // A new card (integer between 1 and 52) is drawn
            const arr = [...hand];
            const num = drawNumber();
            // and pushed into a copy of the hand array
            arr.push(num);
            // which is then assigned to the hand state
            setHand(arr);
          }}
          disabled={(turn % 2) ? "" : "disabled"}
          >
          Hit
        </button>

        <button 
          id='stand'
          // When the button is clicked,
          onClick={() => {
            // the turn is incremented, ending the player's turn
            incrementTurn();
          }}
          disabled={(turn % 2) ? "" : "disabled"}
          >
          Stand
        </button>
    </footer>
  )
}

export default Footer;