import React from 'react'
import halls from '../halls'
import { useParams } from 'react-router-dom'
import Seat from './Seat'
const HallSeats = () => {
  const { id, movieid } = useParams()
  const data = halls.find((hall) => hall.id === id)
  const { movies } = data
  const movieData = movies.find((movie) => movie.id === movieid)
  return (
    <>
      {/* {JSON.stringify(movieData, null, 2)} */}
      <h1 className='text-align'>{movieData.name}</h1>
      <>
        {movieData.shows.map((show) => (
          <div className='container_seats' key={show.id}>
            {/* <h1>{show.id}</h1>
            <p>{show.language}</p>
            <p>Total Seats Row {show.availableSeatsRow}</p>
            <p>Total Seats Col {show.availableSeatsCol}</p> */}
            <div className='seat__container'>
              {show.seats.map((seat) => (
                <Seat seat={seat} />
              ))}
            </div>
          </div>
        ))}
      </>
    </>
  )
}

export default HallSeats
