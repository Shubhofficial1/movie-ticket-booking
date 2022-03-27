import React from 'react'
import HallCard from '../components/HallCard'
import halls from '../halls.js'
const HomeScreen = () => {
  return (
    <>
      <h1>Theatres Near me</h1>
      <div className='hall__container'>
        {halls.map((hall) => (
          <HallCard key={hall.id} hall={hall} />
        ))}
      </div>
    </>
  )
}

export default HomeScreen
