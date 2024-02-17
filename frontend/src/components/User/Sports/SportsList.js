import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { BASEURL } from '../../config/baseuUrl';

const SportsList = () => {
    const [sports, setSports] = useState([]); // Define movies state
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch events data
        const token = localStorage.getItem('token');
        axios.get(`${BASEURL}/user/sports`, {
            headers: {
                Authorization: `Bearer ${token}` // Include the JWT token in the request headers
            }
        })
            .then(response => {
                setSports(response.data); // Set fetched movies to state
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching Sports:', error);
                setLoading(false);
            });
    }, []);

    console.log(sports);



    return (
        <div className="container">
            <h3 className='fst-italic'>Recommended Sports</h3>
            {loading ? (
                <>
                    <div className="text-center m-3">
                        <i className="fa fa-spinner fa-spin" style={{ fontSize: '48px' }}></i>
                    </div>
                    <div className='m-5' style={{ fontSize: '30px' }}>As I am using a <mark>free Database</mark>, it takes <mark>50 seconds</mark> to get data on first hit of API</div>
                </>
            ) : (
                <div className="row">
                    {sports.map(sport => (
                        <div key={sport.id} className="col-md-3 mb-4">
                            <Row>
                                <Col>
                                    {/* <Link to={`/user/sports/${sport.id}`} className='text-decoration-none'> */}
                                        <Card style={{ width: '15rem', position: 'relative', top: '0%' }}>
                                            <Card.Img variant="top" src={sport.sport_imageurl} style={{ height: '23rem' }} />
                                            <Card.Body>
                                                <Card.Title className='text-center font-weight-bold'>{sport.sport_title}</Card.Title>
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

export default SportsList;


