import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.title} className="movie-card">
          <img src={movie.posterUrl} alt={movie.title} style={{ width: "200px" }} />
          <h3>{movie.title}</h3>
          <p>⭐ {movie.rating}</p>
          {/* 👇 lien vers la page de détail */}
          <Link to={`/movie/${encodeURIComponent(movie.title)}`}>
            Voir les détails
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
