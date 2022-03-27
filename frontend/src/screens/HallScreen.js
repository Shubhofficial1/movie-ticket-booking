import React from 'react'
import halls from '../halls.js'
import { useParams } from 'react-router-dom'
import MovieCard from '../components/MovieCard.js'
const HallScreen = () => {
  const { id } = useParams()
  const data = halls.find((hall) => hall.id === id)
  const { movies } = data
  return (
    <>
      <div className='movie__card__container'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} hallId={data.id} />
        ))}
      </div>
    </>
  )
}

export default HallScreen
