import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import MovieDetail from './components/MovieDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
  {
    title: 'A bout',
    description: 'Un thriller policier français emblématique.',
    descriptionLongue: "Michel, un jeune voyou impulsif, vole une voiture et tue un policier. Traqué par la police, il cherche à fuir avec l’aide de Patricia, une étudiante américaine. Entre tension, amour et trahison, ‘À bout de souffle’ est un classique de la Nouvelle Vague.",
    posterUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG2vd_a_zgqu-xR6nIh5O30Sg2ROlXIXPSCQ&s',
    trailerUrl: 'https://www.youtube.com/embed/kXQ6eFQfveM',
    rating: 8.8,
  },
  {
    title: 'Sinners',
    description: 'Un thriller psychologique sur la culpabilité et la rédemption.',
    descriptionLongue: "Dans une ville sombre rongée par les secrets, un détective tourmenté enquête sur une série de meurtres rituels. Chaque indice le pousse à affronter ses propres démons. Jusqu’où ira-t-il pour découvrir la vérité ?",
    posterUrl: 'https://resizing.flixster.com/_-Q3x57oVCnlRe9KVEd1VIc0IAc=/fit-in/705x460/v2/https://resizing.flixster.com/VR3Tfr9zpNllsU6RchvnbhGmPkc=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzL2VhOTdiZDNjLTlmODQtNGNlYi1iZWYwLWNkYjY2YmI5YzZjYS5qcGc=',
    trailerUrl: 'https://www.youtube.com/embed/Y7I4p_XxNq0',
    rating: 8.6,
  },
  {
    title: 'Prosper',
    description: 'Une fresque dramatique sur la montée et la chute d’un empire familial.',
    descriptionLongue: "Prosper est à la tête d’un empire industriel. Mais le pouvoir et les secrets de famille le rattrapent. À travers les générations, les héritiers luttent pour préserver un nom chargé d’histoire, au prix de leur humanité.",
    posterUrl: 'https://fr.web.img2.acsta.net/img/fa/f0/faf0efb2319d3c91d4c9c16d1cb16bbf.jpg',
    trailerUrl: 'https://www.youtube.com/embed/QsGdN5K5-3g',
    rating: 7.5,
  },
  {
    title: 'The other',
    description: 'Un homme face à son double dans un jeu de miroirs psychologique.',
    descriptionLongue: "Un jour, Thomas croise un inconnu qui lui ressemble parfaitement. Fasciné puis obsédé, il tente de comprendre qui est cet ‘autre’. Une descente vertigineuse dans les méandres de l'identité et de la folie.",
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BY2MxMjFmMWQtZTJiOS00ZmRlLWI4Y2ItM2Q5ZjIwZGEyZDdjXkEyXkFqcGc@._V1_.jpg',
    trailerUrl: 'https://www.youtube.com/embed/TZ5GO7vjYqo',
    rating: 9.0,
  },
  {
    title: 'K.O',
    description: 'Un homme se réveille dans un monde qui n’est plus le sien.',
    descriptionLongue: "Antoine, un PDG tyrannique, se réveille après un mystérieux accident. Mais tout a changé : son poste, sa maison, son entourage. Il tente de comprendre ce qui s’est passé, mais plus il avance, plus la réalité devient floue.",
    posterUrl: 'https://www.ecranlarge.com/content/uploads/2025/06/k-o-affiche-officielle.jpg',
    trailerUrl: 'https://www.youtube.com/embed/Uv2vL9fiW3g',
    rating: 7.9,
  },
  {
    title: 'Mercato',
    description: 'Les coulisses du mercato footballistique n’ont jamais été aussi tendues.',
    descriptionLongue: "Dans l’arène sans pitié des transferts de football, agents, clubs et joueurs s’affrontent pour la gloire, l’argent… et parfois la vengeance. Un drame haletant sur les manipulations du sport moderne.",
    posterUrl: 'https://icicine.com/media/284/01JN6XE3MZ7EDYHE5ZXNMKCY25.jpg',
    trailerUrl: 'https://www.youtube.com/embed/MercatoTrailerFictif', // à remplacer si besoin
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
 <Router>
      <h1>🎬 CinéStart</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filter
                setFilterTitle={setFilterTitle}
                setFilterRating={setFilterRating}
              />
              <AddMovie addMovie={addMovie} />
              <MovieList movies={filteredMovies} />
            </>
          }
        />
        <Route
          path="/movie/:title"
          element={<MovieDetail movies={movies} />}
        />
      </Routes>
    </Router>
);   
};

export default App;
