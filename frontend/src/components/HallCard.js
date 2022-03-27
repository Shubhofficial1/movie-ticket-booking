import React from 'react'
import { Link } from 'react-router-dom'

const HallCard = ({ hall }) => {
  return (
    <>
      <div className='hall__card'>
        <Link to={`/hall/${hall.id}`}>
          <img alt={hall.name} src={hall.imageUrl}></img>
        </Link>
        <h1>{hall.name}</h1>
      </div>
    </>
  )
}

export default HallCard
