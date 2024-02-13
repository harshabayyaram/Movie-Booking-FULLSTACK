import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./PublicMenuBar.css";
import { BASEURL } from '../../../src/components/config/baseuUrl';



function PublicMenuBar() {
    const [search, setSearch] = useState('');
    const [searchSuggestions, setSearchSuggestions] = useState([]);

    useEffect(()=>{
        axios.get(`${BASEURL}/public/movies`)
        .then(console.log("Movies searched Database active"))
    },[])
    
    const handleSearchChange = async (event) => {
        const searchTerm = event.target.value;
        setSearch(searchTerm);

        try {
            const response = await axios.get(`${BASEURL}/public/movies`);
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

    return (
        <>
            <Navbar bg="d-flex">
                <Container className='d-flex justify-content-between'>
                    <div>
                        <Navbar.Brand as={Link} to="/">PVR Booking</Navbar.Brand>
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
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/user/about">About</Nav.Link>
                                <Nav.Link as={Link} to="/user/contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Nav className='ms-auto'>
                            <Link to="/login"><button className='btn btn-primary'>Login</button></Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>

            <Navbar bg="d-flex" style={{ backgroundColor: '#f2f2f2' }}>
                <Container className='d-flex justify-content-between'>
                    <div>
                        <Nav className="">
                            <Nav.Link as={Link} to="/">Movies</Nav.Link>
                            <Nav.Link as={Link} to="/user/streams">Streams</Nav.Link>
                            <Nav.Link as={Link} to="/user/events">Events</Nav.Link>
                            <Nav.Link as={Link} to="/user/sports">Sports</Nav.Link>
                            <Nav.Link as={Link} to="/user/activities">Activities</Nav.Link>
                        </Nav>
                    </div>
                    <div className='d-flex'>
                        <Nav >
                            <Nav.Link as={Link} to="/user/gift-cards">Gift cards</Nav.Link>
                            <Nav.Link as={Link} to="/user/offers">Offers</Nav.Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default PublicMenuBar;