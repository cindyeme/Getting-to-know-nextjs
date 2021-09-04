import React, { useState, useContext } from 'react';
import { MovieContext } from './movieContext';


const AddMovie = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  }

  const updatePrice = (e) => {
    setPrice(e.target.value);
  }

  const addMovie = (e) => {
    e.preventDefault();
    setMovies(prev => [...prev, { name: name, price: price }]);
  }

  return (
    <form onSubmit={addMovie}>
      <input type="text" name="name" value={name} onChange={updateName} />
      <input type="text" name="price" value={price} onChange={updatePrice} />
      <button type="submit">Submit</button>
      <style jsx>{ `
        input {
          margin: 20px;
          height: 40px;
          width: 270px;
          padding: 1rem;
        }
        button {
          background: black;
          color: white;
          padding: .7rem 1.5rem;
          font-size: 17px;
          border-radius: 20px;
          cursor: pointer;
        }
      ` }</style>
    </form>
  );
};

export default AddMovie;