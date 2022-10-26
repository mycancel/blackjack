import React from 'react'
import { Link } from 'react-router-dom';
import { useGameContext } from '../utils/GameContext';

const ResetBtn = () => {
  const { resetGame, endGameState } = useGameContext();

  const resetStates = () => {
    window.location.reload();
  };

  return (
    <>
      <button
        className='resetBtn' 
        onClick={ () => {
          resetGame();
          resetStates();
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