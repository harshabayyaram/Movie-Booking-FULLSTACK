import React, { useState } from 'react'
import { Card, Row, Col, Modal, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';


function AdminBodyPopup() {

    return (
        <div>
            <h1 className='d-flex align-items-center justify-content-center pt-2'>Welcome Admin</h1>
            <div className='m-5'>
                <Row>
                    <Col className='p-4'>
                        <Card style={{ width: '18rem' }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Title>Check Booking details</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Link to="/admin/booking_details" className='btn btn-primary'>Booking details</Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col  className='p-4'>
                        <Card style={{ width: '18rem' }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Title>Manage Users</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Link to="/admin/manage_users" className='btn btn-primary'>Manage Users</Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col  className='p-4' >
                        <Card style={{ width: '18rem' }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Title>Manage Movies</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Link to="/admin/manage_movies" className='btn btn-primary'>Manage movies</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default AdminBodyPopup;