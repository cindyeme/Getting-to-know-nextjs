import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      price: '$10',
      id: 23,
    },
    {
      name: 'Game of Thrones',
      price: '$10',
      id: 32
    },
    {
      name: 'Inception',
      price: '$10',
      id: 42
    }
  ]);

  const deleteMovie = (index) => {
    const mov = [ ...movies ];
    const rem = mov.splice(index, 1);
    setMovies({ movies: rem });
  }

  return (
    <MovieContext.Provider value={[movies, deleteMovie]}>
      {children}
    </MovieContext.Provider>
  );
};