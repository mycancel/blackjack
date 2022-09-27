import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ dealerTotal }) => {
  return (
    <nav>
      <Link 
        to='/'>
        <button id='home' className='gameBtn'>
          Home
        </button>
      </Link>
      
      <button className='total'>{dealerTotal}</button>

    <Link 
      to='/rules'>
        <button className='gameBtn'>
          Rules
        </button>
    </Link>
  </nav>
  )
}

export default Nav