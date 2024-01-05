import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Managemovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/admin/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/admin/movies/${id}`);
      window.location.reload();
      setMovies(movies.filter(user => user.id !== id)); // Update the state to remove the deleted user without reloading the page
    } catch (error) {
      console.error('Error deleting movies:', error);
    }
  };
  console.log(movies);

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="bg-white rounded">
          <table className='table'>
            <thead>
              <tr>
                <th className='bg-black text-white' >movie_name</th>
                <th className='bg-black text-white'>movie_actor</th>
                <th className='bg-black text-white'>movie_time</th>
                <th className='bg-black text-white'>movie_date</th>
                <th className='bg-black text-white'>movie_amount</th>
                <th className='bg-black text-white'>duration(hours)</th>
                <th className='bg-black text-white'></th>
              </tr>
            </thead>
            <tbody>
              {movies.map((data, i) => (
                <tr key={i}>
                  <td>{data.movie_name}</td>
                  <td>{data.movie_actor}</td>
                  <td>{data.movie_time}</td>
                  <td>{data.movie_date}</td>
                  <td>{data.movie_amount}</td>
                  <td>{data.duration}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handleDelete(data.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Managemovies;
