import axios from 'axios';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./UserMenuBar.css";
import { BASEURL } from '../../config/baseuUrl';



function UserMenuBar() {
    const [search, setSearch] = useState('');
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [user, setUser] = useState([]);
    const token = localStorage.getItem('token');
    const id = localStorage.getItem("userId");
    useEffect(() => {
        axios.get(`${BASEURL}/user/users/` + id, {
            headers: {
                Authorization: `Bearer ${token}` // Attach token to request header
            }
        })
            .then(response => {
                setUser(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, [id,token]);
    console.log(user[0]);

    const handleSearchChange = async (event) => {
        const searchTerm = event.target.value;
        setSearch(searchTerm);

        try {
            const response = await axios.get(`${BASEURL}/user/movies`,{
                headers : {
                    Authorization: `Bearer ${token}`
                }
            });
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

    const handleLogout = () => {
        Axios.get(`${BASEURL}/logout`)
            .then(res => {
                alert("thank you for using our service we don't store any information of yours")
                window.location.reload();
                localStorage.clear();
            })
            .catch(err => console.log(err));
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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
                                {/* <NavDropdown title="Services" id="basic-nav-dropdown">
                                    <Nav.Link href="/user/bookings" >My Bookings</Nav.Link>
                                    <Nav.Link href="/" >Profile</Nav.Link>
                                </NavDropdown> */}
                                <Nav.Link as={Link} to="/user/contact">Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Nav className='ms-auto'>
                            <div className='z-index-100 '>
                                <div id="app ">
                                    <div className="text position-relative">
                                        <button className="btn btn-primary" onClick={toggleMenu}>
                                            {user.length > 0 ? (
                                                <small>{user[0].name}</small>
                                            ) : (
                                                <small>Loading</small>
                                            )}
                                        </button>

                                        {isMenuOpen && (
                                            <div className="card text-start position-absolute" style={{ top: '40px' }}>
                                                <div className="card-body px-4 py-4">
                                                    <div id="circle-avatar" className="text-center mx-auto mb-4">
                                                        {user.length>0 ?(<span>{user[0].name.charAt(0)}</span>):(<span>X</span>)}
                                                    </div>

                                                    <h5 className="text-center mb-0">{user[0].name}</h5>
                                                    <p className="text-center mb-2">{user[0].email}</p>

                                                    <hr className="mb-0" style={{ margin: "0 -24px 0" }} />

                                                    <div
                                                        className="list-group list-group-flush"
                                                        style={{ margin: "0 -24px 0" }}
                                                    >
                                                        <button className="list-group-item list-group-item-action px-4">
                                                            <Link to="/user/bookings" className='text-decoration-none'>My Bookings</Link>
                                                        </button>
                                                        <button className="list-group-item list-group-item-action px-4">
                                                            <Link to="/user/edit-profile" className='text-decoration-none'>My Profile</Link>
                                                        </button>
                                                    </div>

                                                    <hr style={{ margin: "0 -24px 24px" }} />

                                                    <div className="d-grid">
                                                        <button className="btn btn-secondary"  onClick={handleLogout}s>
                                                            <small>Logout</small>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
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
                            <Nav.Link as={Link} to="/user/list-your-show">ListYourShow</Nav.Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default UserMenuBar;