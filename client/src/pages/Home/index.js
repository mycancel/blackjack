import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom'
import { useGameContext } from '../../utils/GameContext';
import spade from '../../images/spade.png';
import diamond from '../../images/diamond.png';

const Home = () => {
  const { gameState, startGameState } = useGameContext();

  return (
    <>
      <div className='snowflakes' aria-hidden='true'>

        <div className='snowflake'>
        <img src={spade} alt='snowflake' className='spade'></img>
        </div>
      
        <div className='snowflake'>
        <img src={diamond} alt='snowflake' className='diamond'></img>
        </div>
      
        <div className='snowflake'>
        <img src={spade} alt='snowflake' className='spade'></img>
        </div>
      
        <div className='snowflake'>
        <img src={diamond} alt='snowflake' className='diamond'></img>
        </div>
      
        <div className='snowflake'>
        <img src={spade} alt='snowflake' className='spade'></img>
        </div>
      
        <div className='snowflake'>
        <img src={diamond} alt='snowflake' className='diamond'></img>
        </div>
      
        <div className='snowflake'>
        <img src={spade} alt='snowflake' className='spade'></img>
        </div>
      
        <div className='snowflake'>
        <img src={diamond} alt='snowflake' className='diamond'></img>
        </div>
      
        <div className='snowflake'>
        <img src={spade} alt='snowflake' className='spade'></img>
        </div>
      
        <div className='snowflake'>
        <img src={diamond} alt='snowflake' className='diamond'></img>
        </div>
    
      </div>

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
    </>
  )
}

export default Home;