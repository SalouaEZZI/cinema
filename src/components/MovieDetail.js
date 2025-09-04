import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './MovieDetail.css';


const MovieDetail = ({ movies }) => {
  const { title } = useParams();

  // Recherche du film par titre
  const movie = movies.find(
    (m) => m.title.toLowerCase() === decodeURIComponent(title).toLowerCase()
  );

  // Si aucun film trouvé
  if (!movie) {
    return (
      <div>
        <h2>Film introuvable 😢</h2>
        <Link to="/">← Retour à l'accueil</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{movie.title}</h2>
      <img
        src={movie.posterUrl}
        alt={movie.title}
        style={{ width: '300px', borderRadius: '8px' }}
      />
      <p style={{ marginTop: '20px' }}>{movie.descriptionLongue}</p>
      <h3>Bande-annonce</h3>
      <div style={{ margin: '20px 0' }}>
        <iframe
          width="560"
          height="315"
          src={movie.trailerUrl}
          title={`Trailer de ${movie.title}`}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <Link to="/">← Retour à l'accueil</Link>
    </div>
  );
};

export default MovieDetail;
