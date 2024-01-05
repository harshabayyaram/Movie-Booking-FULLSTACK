import React, { useState } from 'react';
import Menubar from "../MenuBar";
// import { Card, Row, Col } from 'react-bootstrap';
import { Card, Row, Col, Modal, Button } from 'react-bootstrap';
import { Route, Link, Routes } from 'react-router-dom';

import UserList from './UserList';
import Bookings from './ManageBookings';
import ManageMovies from './Managemovies';



function Admin() {
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
      <Menubar />
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
                <button className='btn btn-primary' onClick={manageMovies}>Manage Movies</button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <div className='m-5 p-4'>
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
    </div>
  )
}

export default Admin;