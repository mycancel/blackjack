import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <section>
      <h1>BlackJack</h1>
      <Link 
        to='/game'>
        <button>Play</button>
      </Link>
      <Link
        to='/tutorial'>
        <button>Tutorial</button>
      </Link>
    </section>
  )
}

export default Home;