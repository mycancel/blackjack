import React from 'react'

const Card = ({ order }) => {
  return (
    <div key={order}>
      <p>{order}</p>
    </div>
  )
}

export default Card