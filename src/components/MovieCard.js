import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div style={{ border: '1px solid #ccc', margin: 10, padding: 10, width: 250 }}>
      <img src={movie.posterUrl} alt={movie.title} style={{ width: '100%' }} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>⭐ {movie.rating}</p>
    </div>
  );
};

export default MovieCard;
