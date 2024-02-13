import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./MovieList.css";
import { BASEURL } from '../../config/baseuUrl';

const MoviesList = () => {
    const [movies, setMovies] = useState([]); // Define movies state
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        // Fetch movies data
        const token = localStorage.getItem("token");
        axios.get(`${BASEURL}/user/movies`, {
            headers: {
                Authorization: `Bearer ${token}` // Attach token to request header
            }
        })
            .then(response => {
                setMovies(response.data); // Set fetched movies to state
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
                setLoading(false);
            });
    }, []);
    console.log(movies);

    return (
        <div className="container">
            <h3 className='fst-italic'>Recommended Movies</h3>
            {loading ? (<>
                <div className="text-center m-3">
                    <i className="fa fa-spinner fa-spin" style={{ fontSize: '48px' }}></i>
                </div>
                <div className='m-5' style={{ fontSize: '30px' }}>As I am using a <mark>free Database</mark>, it takes <mark>50 seconds</mark> to get data on first hit of API</div>
            </>) : (
                <div className="row">
                    {movies.map(movie => (
                        <div key={movie.id} className="col-md-3 mb-4">
                            <Row>
                                <Col>
                                    <Link to={`/user/movies/${movie.id}`} className='text-decoration-none'>
                                        <Card style={{ width: '15rem',position: 'relative', top: '0%'}} className='card'>
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
            )}


        </div >

    );
};

export default MoviesList;
