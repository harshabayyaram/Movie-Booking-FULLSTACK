import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EventsList = () => {
    const [events, setEvents] = useState([]); // Define movies state

    useEffect(() => {
        // Fetch events data
        axios.get('http://localhost:8080/events')
            .then(response => {
                setEvents(response.data); // Set fetched movies to state
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
            });
    }, []);

    console.log(events);



    return (
        <div className="container">
            <h3 className='fst-italic'>Recommended Events</h3>
            <div className="row">
                {events.map(event => (
                    <div key={event.id} className="col-md-3 mb-4">
                        <Row>
                            <Col>
                                <Link to={`/user/events/${event.id}`} className='text-decoration-none'>
                                    <Card style={{ width: '15rem' }}>
                                        <Card.Img variant="top" src={event.event_imageurl} style={{ height: '23rem' }} />
                                        <Card.Body>
                                            <Card.Title className='text-center font-weight-bold'>{event.event_title}</Card.Title>
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

export default EventsList;


