import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MoviesList = () => {
    const [loggedInUserId, setLoggedInUserId] = useState(null);
    const [movies, setMovies] = useState([]); // Define movies state

    useEffect(() => {
        const userIdFromLocalStorage = localStorage.getItem('userId');
        if (userIdFromLocalStorage) {
            setLoggedInUserId(userIdFromLocalStorage);
        }

        // Fetch movies data
        axios.get('http://localhost:8080/admin/movies')
            .then(response => {
                setMovies(response.data); // Set fetched movies to state
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
            });
    }, []);

    const handleBookTicket = (movieId) => {
        if (!loggedInUserId) {
            console.log('Please log in to book tickets.');
            return;
        }

        axios.post(`http://localhost:8080/users/bookings`, {
            userId: loggedInUserId,
            movieId: movieId
        })
            .then(response => {
                console.log(`Movie ID ${movieId} booked for user ID ${loggedInUserId}`);
                // Handle success (maybe update state, show confirmation, etc.)
            })
            .catch(error => {
                console.error('Error booking ticket:', error);
                // Handle error (show error message, etc.)
            });
    };

    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
    {movies.map(movie => (
        <div key={movie.id} className="col-md-4 mb-4">
            <div className="card h-100" style={{ maxWidth: '200px' }}> {/* Decreased card width */}
                <img
                    src={movie.image_url}
                    className="card-img-top img-thumbnail"
                    alt={movie.movie_name}
                    style={{ width: '200px', height: '200px' }} // Adjust image width and height
                />
                <div className="card-body">
                    <h5 className="card-title">{movie.movie_name}</h5>
                    <p className="card-text">Actor: {movie.movie_actor}</p>
                    <p className="card-text">Time: {movie.movie_time}</p>
                    <p className="card-text">Date: {movie.movie_date}</p>
                    <p className="card-text smaller-text">Status: {movie.movie_status}</p>
                    <p className="card-text">Amount: {movie.movie_amount}</p>
                    <button className="btn btn-primary" onClick={() => handleBookTicket(movie.id)}>
                        Book Ticket
                    </button>
                </div>
            </div>
        </div>
    ))}
</div>

    );
};

export default MoviesList;