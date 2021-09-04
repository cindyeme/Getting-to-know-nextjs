import React, { useContext } from "react";
import { MovieContext } from "./movieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h3>Cynthia Ngozi</h3>
      <h4>Lists of movies: {movies.length}</h4>
      <style jsx>
        {`
          div {
            display: flex;
            justify-content: space-around;
            background: black;
            color: white;
            font-size: 20px;
          }
        `}
      </style>
    </div>
  );
};

export default Nav;
