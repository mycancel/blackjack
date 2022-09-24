import React from 'react';
import { drawNumber } from '../utils/helpers';
import { useGameContext } from '../utils/GameContext';

const Footer = ({setPlayerDraw}) => {
  const {turn, incrementTurn} = useGameContext();
  // console.log(turn);
  return (
    <footer>
        <button 
          id='hit'
          onClick={() => {
            setPlayerDraw(drawNumber());
            incrementTurn();
          }}
          disabled={(turn % 2) ? "" : "disabled"}
          >
          Hit
        </button>
    </footer>
  )
}

export default Footer;