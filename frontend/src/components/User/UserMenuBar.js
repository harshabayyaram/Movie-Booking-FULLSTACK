import Axios from 'axios';
import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Navbar, Container, Nav } from 'react-bootstrap';


function UserMenuBar(props) {
    const user = props;
    console.log(user); // gives logged in user details
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
                    <input
                        className="form-control mr-sm-2"
                        type="text"
                        placeholder="Search for a Movies,events,Sports,Plays and Activities"
                        aria-label="Search"
                    />

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
                            <Nav.Link href="/user/streams">Streams</Nav.Link>
                            <Nav.Link href="/user/events">Events</Nav.Link>
                            <Nav.Link href="/user/sports">Sports</Nav.Link>
                            <Nav.Link href="/user/activities">Activities</Nav.Link>
                        </Nav>
                    </div>
                    <div className='d-flex'>
                        <Nav className="">
                            <Nav.Link href="/user/gift-cards">Gift cards</Nav.Link>
                            <Nav.Link href="/user/offers">Offers</Nav.Link>
                            <Nav.Link href="/user/list-your-show">ListYourShow</Nav.Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>


        </>
    )
}

export default UserMenuBar;