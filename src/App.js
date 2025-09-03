import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'A bout',
      description: 'Un voleur utilise la technologie pour infiltrer les rêves.',
      posterUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG2vd_a_zgqu-xR6nIh5O30Sg2ROlXIXPSCQ&s',
      rating: 8.8,
    },
    {
      title: 'Sinners',
      description: 'Une équipe voyage à travers un trou de ver dans l’espace.',
      posterUrl: 'https://resizing.flixster.com/_-Q3x57oVCnlRe9KVEd1VIc0IAc=/fit-in/705x460/v2/https://resizing.flixster.com/VR3Tfr9zpNllsU6RchvnbhGmPkc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2VhOTdiZDNjLTlmODQtNGNlYi1iZWYwLWNkYjY2YmI5YzZjYS5qcGc=',
      rating: 8.6,
    },
    {
      title: 'Prosper',
      description: 'Une équipe voyage à travers un trou de ver dans l’espace.',
      posterUrl: 'https://fr.web.img2.acsta.net/img/fa/f0/faf0efb2319d3c91d4c9c16d1cb16bbf.jpg',
      rating: 7.5,
    },
     {
      title: 'The other',
      description: 'Une équipe voyage à travers un trou de ver dans l’espace.',
      posterUrl: 'https://m.media-amazon.com/images/M/MV5BY2MxMjFmMWQtZTJiOS00ZmRlLWI4Y2ItM2Q5ZjIwZGEyZDdjXkEyXkFqcGc@._V1_.jpg',
      rating: 9.0,
    },
        {
      title: 'K.O',
      description: 'Une équipe voyage à travers un trou de ver dans l’espace.',
      posterUrl: 'https://www.ecranlarge.com/content/uploads/2025/06/k-o-affiche-officielle.jpg',
      rating: 7.9,
    },
         {
      title: 'Mercato',
      description: 'Une équipe voyage à travers un trou de ver dans l’espace.',
      posterUrl: 'https://icicine.com/media/284/01JN6XE3MZ7EDYHE5ZXNMKCY25.jpg',
      rating: 7.9,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (
  <div>
    <h1>🎬 CinéStart</h1>
 <div>
      <Filter
        setFilterTitle={setFilterTitle}
        setFilterRating={setFilterRating}
      />
      <AddMovie addMovie={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>  </div>
);   
};

export default App;
