import React, { useState } from 'react';

const AddMovie = ({ addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterUrl: '',
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({
      ...newMovie,
      [name]: name === 'rating' ? Number(value) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newMovie.title &&
      newMovie.description &&
      newMovie.posterUrl &&
      newMovie.rating
    ) {
      addMovie(newMovie);
      setNewMovie({ title: '', description: '', posterUrl: '', rating: 0 });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        type="text"
        name="title"
        placeholder="Titre"
        value={newMovie.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newMovie.description}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="posterUrl"
        placeholder="URL de l’affiche"
        value={newMovie.posterUrl}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="rating"
        placeholder="Note"
        min="0"
        max="10"
        value={newMovie.rating}
        onChange={handleChange}
        required
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddMovie;
