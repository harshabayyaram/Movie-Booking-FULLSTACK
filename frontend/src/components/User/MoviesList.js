import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';

const MoviesList = () => {
    const [loggedInUserId, setLoggedInUserId] = useState(null);
    const [movies, setMovies] = useState([]); // Define movies state
    const [users, setUsers] = useState([]);
    console.log(users);

    useEffect(() => {
        const userIdFromLocalStorage = localStorage.getItem('userId');
        console.log("user id from movie list component", userIdFromLocalStorage);
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

        axios.get('http://localhost:8080/admin/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });

    }, []);

    const handleBookTicket = (movieid) => {
        const values = [loggedInUserId, movieid];
        axios.post("http://localhost:8080/book-ticket", values)
            .then(res => {
                console.log("posted from frontend");
            })
            .catch(err => { console.log(err) })
    }

    return (
        <div className="container">
            <div className="row">
                {movies.map(movie => (
                    <div key={movie.id} className="col-md-3 mb-4">
                        <Row>
                            <Col>
                                <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" src={movie.image_url} style={{ height: '15rem' }} />
                                    <Card.Body>
                                        <Card.Title>{movie.movie_name}</Card.Title>
                                        <Card.Text>
                                            Actor: {movie.movie_actor}
                                            <br />
                                            Time: {movie.movie_time}
                                            <br />
                                            Date: {movie.movie_date}
                                            <br />
                                            Amount: {movie.movie_amount}
                                            <br />
                                        </Card.Text>
                                        <button className="btn btn-primary" onClick={() => handleBookTicket(movie.id)}>
                                            Book Ticket
                                        </button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default MoviesList;


