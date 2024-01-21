import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SportsList = () => {
    const [sports, setSports] = useState([]); // Define movies state

    useEffect(() => {
        // Fetch events data
        axios.get('http://localhost:8080/sports')
            .then(response => {
                setSports(response.data); // Set fetched movies to state
            })
            .catch(error => {
                console.error('Error fetching Sports:', error);
            });
    }, []);

    console.log(sports);



    return (
        <div className="container">
            <h3 className='fst-italic'>Recommended Sports</h3>
            <div className="row">
                {sports.map(sport => (
                    <div key={sport.id} className="col-md-3 mb-4">
                        <Row>
                            <Col>
                                <Link to={`/user/sports/${sport.id}`} className='text-decoration-none'>
                                    <Card style={{ width: '15rem' }}>
                                        <Card.Img variant="top" src={sport.sport_imageurl} style={{ height: '23rem' }} />
                                        <Card.Body>
                                            <Card.Title className='text-center font-weight-bold'>{sport.sport_title}</Card.Title>
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

export default SportsList;


