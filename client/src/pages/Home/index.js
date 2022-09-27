import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section id='homeSection'>
      <div id='homeContent'>
        <h1>Black<span>Jack</span></h1>
        {/* TODO: Toggle Gamestate to change button textContent */}
        <Link 
          to='/game'>
          <button>Play</button>
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