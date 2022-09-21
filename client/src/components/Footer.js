import React from 'react';
import { drawNumber } from '../utils/helpers';

const Footer = ({setPlayerDraw, setTurn, turn}) => {
  return (
    <footer>
        <button 
          id='hit'
          onClick={() => {
            setPlayerDraw(drawNumber());
            setTurn(turn + 1);
          }}
          disabled={(turn % 2) ? "" : "disabled"}
          >
          Hit
        </button>
    </footer>
  )
}

export default Footer;