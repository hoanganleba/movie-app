import React from 'react'

const MovieCard = (props) => {
  return (
    <div className="w-full">
      <img
        className="w-full rounded-lg shadow-lg shadow-gray-800/50"
        src={props.imgSrc}
        alt={props.name}
      />
      <h6 className="mt-4 mb-2 font-medium text-gray-900">{props.name}</h6>
      <p className="text-xs text-gray-900/75">
        {props.genres.join(", ")}
      </p>
    </div>
  )
}

export default MovieCard
