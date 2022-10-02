import React from 'react';
import ResetBtn from './ResetBtn';

//TODO: end game on blackjack with special ending screen
// TODO: reduce flashing of components when updating

const Reset = ({dealer, player, blackJack}) => {
  if (dealer === player) {
    return (
      <div className='resetModal'>
        <div className='resetModalContent'>
          <h2>Tie!</h2>
          <ResetBtn />
        </div>
      </div>
    )
  } else if (blackJack && player === 21) {
    return (
      <div className='resetModal'>
        <div className='resetModalContent'>
          <h2>BlackJack!</h2>
          <ResetBtn />
        </div>
      </div>
    )
  } else if (player > 21) {
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