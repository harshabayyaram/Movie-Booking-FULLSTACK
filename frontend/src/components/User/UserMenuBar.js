import Axios from 'axios';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import userBookingList from './UserBookingList';

import { Navbar, Container, Nav } from 'react-bootstrap';

function UserMenuBar() {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const bookingsList = () => {
        setSelectedComponent(userBookingList);
    };

    const handleClose = () => {
        setSelectedComponent(null);
    };

    const handleLogout = () => {
        Axios.get("http://localhost:8080/logout")
            .then(res => {
                window.location.reload();
                localStorage.clear();
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <Navbar bg="primary d-flex justify-content-between" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Cinema Booking</Navbar.Brand>

                    <Nav className="ms-auto">
                        <Nav.Link ><button className='btn btn-danger' onClick={handleLogout}>Logout</button></Nav.Link>
                    </Nav>
                    <Navbar.Brand href="#" onClick={bookingsList} className='btn btn-success'>My Bookings</Navbar.Brand>
                </Container>
            </Navbar>

            <div>
                {selectedComponent && (
                    <Modal show={true} onHide={handleClose} size="xl">
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
        </>
    )
}

export default UserMenuBar;