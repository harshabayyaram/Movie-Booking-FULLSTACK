import Axios from 'axios';
import React from 'react'

import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BASEURL } from '../../config/baseuUrl';

function AdminMenuBar() {
  const handleLogout = () => {
    const token = localStorage.getItem('token');
    Axios.get(`${BASEURL}/logout`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
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
          <Navbar.Brand as={Link} to="/">Cinema Booking</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link ><button className='btn btn-danger' onClick={handleLogout}>Logout</button></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default AdminMenuBar