import Axios from 'axios';
import React from 'react'

import { Navbar, Container, Nav } from 'react-bootstrap';

function MenuBar() {
  const handleDelete = () => {
    Axios.get("http://localhost:8080/logout")
      .then(res => {
        window.location.reload();
      })
      .catch(err => console.log(err));
  }
  return (
    <>
      <Navbar bg="primary d-flex justify-content-between" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Cinema Booking</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link ><button className='btn btn-danger' onClick={handleDelete}>Logout</button></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default MenuBar