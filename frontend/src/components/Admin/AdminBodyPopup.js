import React, { useState } from 'react'
import { Card, Row, Col, Modal, Button } from 'react-bootstrap';

import UserList from './UserList';
import Bookings from './ManageBookings';
import ManageMovies from './Managemovies';
import { Link } from 'react-router-dom';
import AdminMenuBar from './AdminMenuBar';

function AdminBodyPopup() {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const manageBookings = () => {
        setSelectedComponent(<Bookings />);
    };

    const manageMovies = () => {
        setSelectedComponent(<ManageMovies />);
    };

    const manageUsers = () => {
        setSelectedComponent(<UserList />);
    };

    const handleClose = () => {
        setSelectedComponent(null);
    };
    return (
        <div>
            <h1 className='d-flex align-items-center justify-content-center p-3 pt-5'>Welcome Admin</h1>
            <div className='m-5 p-4'>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Title>Check Booking details</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <button className='btn btn-primary' onClick={manageBookings}>Bookings</button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col >
                        <Card style={{ width: '18rem' }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Title>Manage Users</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <button className='btn btn-primary' onClick={manageUsers}>Manage users</button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col >
                        <Card style={{ width: '18rem' }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body>
                                <Card.Title>Manage Movies</Card.Title>
                                <Card.Text>

                                </Card.Text>
                                {/* <button className='btn btn-primary' onClick={manageMovies}>Manage Movies</button> */}
                                {/* <button className='btn btn-primary' onClick={manageMovies}>Manage Movies</button> */}
                                <Link to="/admin/manage_movies" className='btn btn-primary'>Manage movies</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className='m-5 p-4'>
                {selectedComponent && (
                    <Modal show={true} onHide={handleClose} size="xl" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{selectedComponent}</Modal.Body>
                        <Modal.Footer>
                            <Button variant='secondary' onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                )}
            </div>
        </div>
    )
}

export default AdminBodyPopup