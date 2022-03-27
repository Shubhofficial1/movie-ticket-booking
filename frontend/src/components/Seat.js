import React, { useState } from 'react'

const Seat = ({ seat }) => {
  const [isSelected, SetIsSelected] = useState(false)

  return (
    <div
      className={`seat ${isSelected ? 'isSelected' : null}`}
      onClick={() => SetIsSelected(!isSelected)}
    ></div>
  )
}

export default Seat
