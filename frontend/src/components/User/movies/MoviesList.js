import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./MovieList.css";

const MoviesList = () => {
    const [movies, setMovies] = useState([]); // Define movies state

    useEffect(() => {
        // Fetch movies data
        axios.get('https://movie-booking-backend-node.onrender.com/admin/movies')
            .then(response => {
                setMovies(response.data); // Set fetched movies to state
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
            });
    }, []);
    console.log(movies);

    return (
        <div className="container">
            <h3 className='fst-italic'>Recommended Movies</h3>
            <div className="row">
                {movies.map(movie => (
                    <div key={movie.id} className="col-md-3 mb-4">
                        <Row>
                            <Col>
                                <Link to={`/user/movies/${movie.id}`} className='text-decoration-none'>
                                    <Card style={{ width: '15rem' }} className='card'>
                                        <Card.Img variant="top" src={movie.image_url} style={{ height: '23rem' }} />
                                        <Card.Body>
                                            <Card.Title className='text-center font-weight-bold'>{movie.movie_name}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                ))}
            </div>
        </div >

    );
};

export default MoviesList;
