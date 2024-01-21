// EditMovie.js

import React, { useState } from 'react';
import axios from 'axios';

const EditMovie = ({ movie, handleClose }) => {
  const [editedMovie, setEditedMovie] = useState({
    movie_name: movie.movie_name || '',
    movie_actor: movie.movie_actor || '',
    movie_time: movie.movie_time || '',
    movie_date: movie.movie_date || '',
    movie_amount: movie.movie_amount || '',
    movie_status: movie.movie_status || '',
    image_url: movie.image_url,
  });
  console.log(editedMovie);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setEditedMovie({
      ...editedMovie,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:8080/editmovie/${movie.id}`, editedMovie)
      handleClose();
    } catch (error) {
      console.error('Error editing movie in FE:', error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-item-center">
      <div className=" w-100 rounded">
        <form className='d-block'>
          <h2 className='d-flex justify-content-center align-item-center'>ADD New Movie</h2>
          <div className="mb-2">
            <label>Movie Title</label>
            <input
              type="text"
              placeholder="Movie Title"
              className="form-control"
              name='movie_name'
              value={editedMovie.movie_name}
              onChange={handleInput}
            />
          </div>
          <div className="mb-2">
            <label>Movie Actor</label>
            <input
              type="text"
              placeholder="Movie-actor"
              className="form-control"
              name='movie_actor'
              value={editedMovie.movie_actor}
              onChange={handleInput}
            />
          </div>
          <div className="mb-2">
            <label>Movie time</label>
            <input
              type="time"
              placeholder="Movie-time"
              className="form-control"
              name='movie_time'
              value={editedMovie.movie_time}
              onChange={handleInput}
            />
          </div>
          <div className="mb-2">
            <label>Movie date</label>
            <input
              type="date"
              placeholder="Movie-date"
              className="form-control"
              name='movie_date'
              value={editedMovie.movie_date}
              onChange={handleInput}
            />
          </div>
          <div className="mb-2">
            <label>Movie Status -- Block buster or flop or hit</label>
            <input
              type="text"
              placeholder="Movie-status"
              className="form-control"
              name='movie_status'
              value={editedMovie.movie_status}
              onChange={handleInput}
            />
          </div>
          <div className="mb-2">
            <label>Movie amount</label>
            <input
              type="number"
              placeholder="Movie-amount"
              className="form-control"
              name='movie_amount'
              value={editedMovie.movie_amount}
              onChange={handleInput}
            />
          </div>
          <div className="mb-2">
            <label>Poster url</label>
            <input
              type="text"
              placeholder="Movie poster URL"
              className="form-control"
              name='image_url'
              value={editedMovie.image_url}
              onChange={handleInput}
            />
          </div>
          <button className="btn btn-success" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditMovie;
