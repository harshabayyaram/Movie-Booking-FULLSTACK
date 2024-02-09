import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import UserMenuBar from '../MenuBar/UserMenuBar';
import "./MovieFullPage.css"
import { BASEURL } from '../../config/baseuUrl';

function MovieFullPage() {

    const [movie, setMovie] = useState([]);
    console.log(movie);
    // const loggedInUserId = localStorage.getItem("userId");
    // console.log(loggedInUserId);
    const { id: movieid } = useParams();
    // console.log(movieid);

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(movieid);
        const apiUrl = `${BASEURL}/user/selectMovie/${movieid}`;
        axios.get(apiUrl, {
            headers: {
                Authorization: `Bearer ${token}` // Attach token to request header
            }
        })
            .then(response => {
                setMovie(response.data);
            })
            .catch(error => {
                console.error('Error Selecting Particular movie', error);
            });
    }, [movieid]);

    // const handleBookTicket = () => {
    //     const values = [loggedInUserId, movieid];
    //     axios.post(`{BASEURL}/user/book-ticket`, values)
    //         .then(res => {
    //             console.log("posted from frontend");
    //             alert("Movie ticket Booked");
    //         })
    //         .catch(err => { console.log(err) })
    // }





    return (
        <div>
            <div>
                <UserMenuBar />
            </div>
            <div style={{ borderRadius: "25px" }}>
                {movie.length > 0 ? (
                    <div className='d-flex col-lg-12' style={{
                        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7) 80%, rgba(100, 100, 100, 0.7)), url(${movie[0].image_url})`,
                        backgroundSize: '100% 300%',
                    }}>
                        <div className='p-1 col-lg-3 m-3'>
                            <img src={movie[0].image_url} alt="movie_poster" className='w-100' style={{ height: '400px' }} />
                        </div>
                        <div className='col-lg-6 mt-4 pt-4'>
                            <h2 style={{ fontSize: '5rem', color: 'white' }}>{movie[0].movie_name}</h2>
                            <p style={{ fontSize: '1rem', color: 'white' }}>Hero: {movie[0].movie_actor}</p>
                            <p style={{ fontSize: '1rem', color: 'white' }}>{movie[0].movie_time}</p>
                            <p style={{ fontSize: '1rem', color: 'white' }}>{movie[0].movie_status} | {movie[0].movie_amount} ₹</p>
                            <p style={{ fontSize: '1rem', color: 'white' }}>Rating : 8/10</p>
                            <div className='pt-2'>
                                <Link to={`/user/movie-seat-info/${movie[0].id}`} className='btn btn-primary' style={{ width: "10rem", height: "3rem" }}>Book Ticket</Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            {/* 
            <div className='container pt-4'>
                <div className='m-3'>
                    <h3><b>About the Movie</b></h3>
                    <div>
                        dummy data.....
                    </div>
                </div>
                <hr />
                <div className='m-3'>
                    <h3><b>Cast</b></h3>
                    <div className='d-flex'>
                        <div className='bg-primary'><img src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/teja-sajja-1269445-1704888435.jpg" alt="" className='cast-image' /></div>
                    </div>
                </div>
                <hr />
                <div className='m-3'>
                    <h3><b>Crew</b></h3>
                    <div className='d-flex'>
                        <div className='bg-primary'><img src="https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/teja-sajja-1269445-1704888435.jpg" alt="" className='cast-image' /></div>
                    </div>
                </div>
                <hr />
            </div> */}
        </div>

    )
}

export default MovieFullPage