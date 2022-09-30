import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom'
import { useGameContext } from '../../utils/GameContext';

const Home = () => {
  const { gameState, startGameState } = useGameContext();

  return (
    <section id='homeSection'>
      <div id='homeContent'>
        <h1>Black<span>Jack</span></h1>
        <Link 
          to='/game'
          >
          {gameState ? 
            <button>Continue</button>
          : <button onClick={() => startGameState()}>Play</button>}
        </Link>
        <Link
          to='/rules'>
          <button>Rules</button>
        </Link>
      </div>
    </section>
  )
}

export default Home;