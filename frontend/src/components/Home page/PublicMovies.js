import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import "./PublicMovies.css"
import { BASEURL } from '../config/baseuUrl';
import { Link } from 'react-router-dom';

const PublicMovies = () => {
    const [movies, setMovies] = useState([]); // Define movies state
    const [loading, setLoading] = useState(true); // Define loading state
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                setIsOpen(false);
            }
        };

        const handleClickOutside = (event) => {
            if (isOpen && !event.target.closest('.popup-inner')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleEsc);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleLoginClick = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        // Fetch movies data
        axios.get(`${BASEURL}/public/movies`)
            .then(response => {
                setMovies(response.data); // Set fetched movies to state
                setLoading(false); // Set loading to false when movies are fetched
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
                setLoading(false); // Set loading to false in case of error
            });
    }, []);

    return (
        <>
            <div className="container">
                <h3 className='fst-italic'>Recommended Movies</h3>
                {loading ? (
                    <>
                        <div className="text-center m-3">
                            <i className="fa fa-spinner fa-spin" style={{ fontSize: '48px' }}></i>
                        </div>
                        <div className='m-5' style={{ fontSize: '30px' }}>As I am using a <mark>free Database</mark>, it takes <mark>50 seconds</mark> to get data on first hit of API</div>
                    </>
                ) : (
                    <div className="row">
                        {movies.map(movie => (
                            <div key={movie.id} className="col-md-3 mb-4">
                                <Row>
                                    <Col>
                                        <div className='text-decoration-none' >
                                            <Card style={{ width: '15rem', position: 'relative', top: '0%' }} className='card' onClick={handleLoginClick}>
                                                <Card.Img variant="top" src={movie.image_url} style={{ height: '23rem' }} />
                                                <Card.Body>
                                                    <Card.Title className='text-center font-weight-bold'>{movie.movie_name}</Card.Title>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div>
                {isOpen && (
                    <div className="popup">
                        <div className="popup-inner">
                            <h3>Please Login</h3>
                            <p>
                                <Link to="/login">
                                    <button>Login</button>
                                </Link>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default PublicMovies;
