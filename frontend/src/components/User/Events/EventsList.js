import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { BASEURL } from '../../config/baseuUrl';

const EventsList = () => {
    const [events, setEvents] = useState([]); // Define movies state
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        // Fetch events data
        axios.get(`${BASEURL}/user/events`, {
            headers: {
                Authorization: `Bearer ${token}` // Attach token to request header
            }
        })
            .then(response => {
                setEvents(response.data); // Set fetched movies to state
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
                setLoading(false);
            });
    }, []);

    console.log(events);



    return (
        <div className="container">
            <h3 className='fst-italic'>Recommended Events</h3>
            {loading ? (
                <>
                    <div className="text-center m-3">
                        <i className="fa fa-spinner fa-spin" style={{ fontSize: '48px' }}></i>
                    </div>
                    <div className='m-5' style={{ fontSize: '30px' }}>As I am using a <mark>free Database</mark>, it takes <mark>50 seconds</mark> to get data on first hit of API</div>
                </>
            ) : (
                <div className="row">
                    {events.map(event => (
                        <div key={event.id} className="col-md-3 mb-4">
                            <Row>
                                <Col>
                                    {/* <Link to={`/user/events/${event.id}`} className='text-decoration-none'> */}
                                        <Card style={{ width: '15rem', position: 'relative', top: '0%' }}>
                                            <Card.Img variant="top" src={event.event_imageurl} style={{ height: '23rem' }} />
                                            <Card.Body>
                                                <Card.Title className='text-center font-weight-bold'>{event.event_title}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    {/* </Link> */}
                                </Col>
                            </Row>
                        </div>
                    ))}
                </div>
            )}




        </div >

    );
};

export default EventsList;


