import Axios from 'axios';
import React from 'react'

import { Navbar, Container, Nav } from 'react-bootstrap';

function AdminMenuBar() {
  const handleLogout = () => {
    Axios.get("https://movie-booking-backend-node.onrender.com/logout")
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
        </Container>
      </Navbar>
    </>
  )
}

export default AdminMenuBar