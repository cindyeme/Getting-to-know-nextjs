import React, { useContext } from "react";
import Movie from "./movie";
import { MovieContext } from "./movieContext";

const MovieList = () => {
  const [movies, deleteMovie] = useContext(MovieContext);

  return (
    <>
      {movies.map((movie) => (
        <Movie key={movie.id} movieName={movie.name} price={movie.price} clicked={deleteMovie} />
      ))}
    </>
  );
};

export default MovieList;
