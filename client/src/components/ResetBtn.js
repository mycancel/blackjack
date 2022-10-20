import React from 'react'
import { Link } from 'react-router-dom';
import { useGameContext } from '../utils/GameContext';

const ResetBtn = () => {
  const { resetGame, endGameState } = useGameContext();
  return (
    <>
      <button
        className='resetBtn' 
        onClick={ () => {
          resetGame();
          document.location.reload(true);
        }}>Play Again
      </button>
      <Link to={'/'}>
        <button
          className='resetBtn' 
          onClick={ () => {
            endGameState();
            resetGame();
          }}>Quit
        </button>
      </Link>
    </>
  )
}

export default ResetBtn