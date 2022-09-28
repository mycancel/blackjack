import React from 'react'

const Reset = ({dealer, player}) => {
  if (player > 21) {
    return (
      <div>
        Dealer Won!
      </div>
    )
  } else if (dealer > 21) {
    return (
      <div>
        Player Won!
      </div>
    )
  } else if (dealer === player) {
    return (
      <div>
        Tie!
      </div>
    )
  } else if (dealer > player && dealer <= 21) {
    return (
      <div>
        Dealer Won!
      </div>
    )
  } else if (player > dealer && player <= 21) {
    return (
      <div>
        Player Won!
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