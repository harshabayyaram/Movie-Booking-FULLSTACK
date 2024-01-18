import Axios from 'axios';
import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Navbar, Container, Nav } from 'react-bootstrap';
import SearchPage from './Search';


function UserMenuBar() {
    const handleLogout = () => {
        Axios.get("http://localhost:8080/logout")
            .then(res => {
                alert("thank you for using our service we don't store any information of yours")
                window.location.reload();
                localStorage.clear();
            })
            .catch(err => console.log(err));
    }


    return (
        <>
            <Navbar bg="d-flex">
                <Container className='d-flex justify-content-between'>
                    <div>
                        <Navbar.Brand href="/">Cinema Booking</Navbar.Brand>
                    </div>
                    <div>
                        <SearchPage/>
                    </div>
                    <div className='d-flex'>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/user/about">About</Nav.Link>
                                <NavDropdown title="Services" id="basic-nav-dropdown">
                                    <Nav.Link href="/user/bookings" >My Bookings</Nav.Link>
                                </NavDropdown>
                                <Nav.Link href="/user/contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>



                        <Nav className="ms-auto">
                            <Nav.Link ><button className='btn btn-danger' onClick={handleLogout}>Logout</button></Nav.Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>

            <Navbar bg="d-flex" style={{ backgroundColor: '#f2f2f2' }}>
                <Container className='d-flex justify-content-between'>
                    <div>
                        <Nav className="">
                            <Nav.Link href="/">Movies</Nav.Link>
                            <Nav.Link href="/">Streams</Nav.Link>
                            <Nav.Link href="/">Events</Nav.Link>
                            <Nav.Link href="/">Sports</Nav.Link>
                            <Nav.Link href="/">Activities</Nav.Link>
                        </Nav>
                    </div>
                    <div className='d-flex'>
                        <Nav className="">
                            <Nav.Link href="/">Gift cards</Nav.Link>
                            <Nav.Link href="/">Offers</Nav.Link>
                            <Nav.Link href="/">ListYourShow</Nav.Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>


        </>
    )
}

export default UserMenuBar;