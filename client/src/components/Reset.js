import React from 'react';
import ResetBtn from './ResetBtn';

const Reset = ({dealer, player}) => {
  if (player > 21) {
    return (
      <div className='resetModal'>
        <div className='resetModalContent'>
          <h2>Dealer Won!</h2>
          <ResetBtn />
        </div>
      </div>
    )
  } else if (dealer > 21) {
    return (
      <div className='resetModal'>
        <div className='resetModalContent'>
          <h2>Player Won!</h2>
          <ResetBtn />
        </div>
      </div>
    )
  } else if (dealer === player) {
    return (
      <div className='resetModal'>
        <div className='resetModalContent'>
          <h2>Tie!</h2>
          <ResetBtn />
        </div>
      </div>
    )
  } else if (dealer > player && dealer <= 21) {
    return (
      <div className='resetModal'>
        <div className='resetModalContent'>
          <h2>Dealer Won!</h2>
          <ResetBtn />
        </div>
      </div>
    )
  } else if (player > dealer && player <= 21) {
    return (
      <div className='resetModal'>
        <div className='resetModalContent'>
          <h2>Player Won!</h2>
          <ResetBtn />
        </div>
      </div>
    )
  } else {
    return (
      <div>
        Reset Component
      </div>
    )
  }
}

export default Reset