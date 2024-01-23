import axios from 'axios';
import Axios from 'axios';
import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./UserMenuBar.css";

function UserMenuBar(props) {
    const [search, setSearch] = useState('');
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const { user } = props;
    // console.log(props);
    // console.log(user[0].name); // gives logged in user details

    const handleSearchChange = async (event) => {
        const searchTerm = event.target.value;
        setSearch(searchTerm);

        try {
            const response = await axios.get('http://localhost:8080/admin/movies');
            const fetchedMovies = response.data;

            if (searchTerm.trim() === '') {
                setSearchSuggestions([]);
            }
            else {
                const matches = fetchedMovies.filter(movie =>
                    movie.movie_name.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setSearchSuggestions(matches);
            }
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    }
    // console.log(searchSuggestions);

    const handleLogout = () => {
        Axios.get("http://localhost:8080/api/logout")
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
                    <div className="w-100" style={{ position: 'relative' }}>
                        <input
                            className="form-control mr-sm-2 "
                            type="text"
                            placeholder="Search for a Movies,events,Sports,Plays and Activities"
                            aria-label="Search"
                            onChange={e => handleSearchChange(e)}
                            value={search}
                        />
                        {searchSuggestions.length > 0 && (
                            <div className="position-absolute w-100" style={{ zIndex: 100, backgroundColor: "#f2f2f2" }}>
                                {searchSuggestions.map((suggestion, i) => (
                                    <Link to={`/user/movies/${suggestion.id}`} className='text-decoration-none ' >
                                        <div className='border-bottom d-flex p-2 hover '>
                                            <div><img src={`${suggestion.image_url}`} alt='small-poster' style={{ width: '40px', height: '100%', objectFit: 'cover' }} /></div>
                                            <div key={i} className=' p-3'><div className='text-decoration-none text-body '>{suggestion.movie_name}</div></div>
                                            {/* <div key={i} className='border-bottom p-3'><Link to={`/user/movies/${suggestion.id}`} className='text-decoration-none text-body'>{suggestion.movie_name}</Link></div> */}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>


                    <div className='d-flex'>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/user/about">About</Nav.Link>
                                <NavDropdown title="Services" id="basic-nav-dropdown">
                                    <Nav.Link href="/user/bookings" >My Bookings</Nav.Link>
                                    <Nav.Link href="/" >Profile {user && user[0] && user[0].name}</Nav.Link>
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
                            {/* <Nav.Link href="/user/activities">Activities</Nav.Link> */}
                        </Nav>
                    </div>
                    <div className='d-flex'>
                        <Nav >
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