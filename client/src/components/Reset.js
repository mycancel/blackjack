import React from 'react';
import ResetBtn from './ResetBtn';

const Reset = ({dealer, player}) => {
  if (player > 21) {
    return (
      <div>
        Dealer Won!
        <ResetBtn />
      </div>
    )
  } else if (dealer > 21) {
    return (
      <div>
        Player Won!
        <ResetBtn />
      </div>
    )
  } else if (dealer === player) {
    return (
      <div>
        Tie!
        <ResetBtn />
      </div>
    )
  } else if (dealer > player && dealer <= 21) {
    return (
      <div>
        Dealer Won!
        <ResetBtn />
      </div>
    )
  } else if (player > dealer && player <= 21) {
    return (
      <div>
        Player Won!
        <ResetBtn />
      </div>
    )
  } else {
    return (
      <div>
        Reset
      </div>
    )
  }
}

export default Reset