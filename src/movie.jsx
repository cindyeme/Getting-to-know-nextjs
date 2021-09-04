import React from 'react';

const Movie = ({movieName, price, clicked}) => {
  return (
    <div onClick={clicked}>
      <h3>{ movieName }</h3>
      <h4>{ price }</h4>
      <style jsx>{ `
        div {
          padding: 10px;
        }
      `}
      </style>
    </div>
  );
}

export default Movie;