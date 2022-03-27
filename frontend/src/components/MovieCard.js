import React from 'react'
import { Link } from 'react-router-dom'
const MovieCard = ({ movie, hallId }) => {
  return (
    <div className='movie__card'>
      <Link to={`/hall/${hallId}/${movie.id}`}>
        <img alt={movie.name} src={`${movie.movieImage}`}></img>
      </Link>
      <h4>{movie.name}</h4>
      <p>{movie.description}</p>
      <p>{movie.duration} hrs</p>
      <p>{movie.rating} rating</p>
    </div>
  )
}

export default MovieCard
