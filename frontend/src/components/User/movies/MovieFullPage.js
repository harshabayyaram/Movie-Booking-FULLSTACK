import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import UserMenuBar from '../MenuBar/UserMenuBar';
import MoviesList from './MoviesList';

function MovieFullPage() {

    const [movie, setMovie] = useState([]);
    console.log(movie);

    const loggedInUserId = localStorage.getItem("userId");
    // console.log(loggedInUserId);
    const { id: movieid } = useParams();
    // console.log(movieid);

    useEffect(() => {
        console.log(movieid);
        const apiUrl = `http://localhost:8080/user/selectMovie/${movieid}`;
        axios.get(apiUrl)
            .then(response => {
                setMovie(response.data);
            })
            .catch(error => {
                console.error('Error Selecting Particular movie', error);
            });
    }, []);


    const handleBookTicket = () => {
        const values = [loggedInUserId, movieid];
        axios.post("http://localhost:8080/book-ticket", values)
            .then(res => {
                console.log("posted from frontend");
                alert("Movie ticket Booked");
            })
            .catch(err => { console.log(err) })
    }


    return (
        <div>
            <div>
                <UserMenuBar />
            </div>
            <div className='' style={{ borderRadius: "25px" }}>
                {movie.length > 0 ? (
                    <div className='d-flex col-lg-12' style={{
                        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7) 80%, rgba(100, 100, 100, 0.7)), url(${movie[0].image_url})`,
                        backgroundSize: 'cover'
                    }}>
                        <div className='p-3 col-lg-3 m-5'>
                            <img src={movie[0].image_url} alt="movie_poster" className='w-100' style={{ height: '400px' }} />
                        </div>
                        <div className='col-lg-6 mt-5 pt-5'>
                            <h2 style={{ fontSize: '5rem', color: 'white' }}>{movie[0].movie_name}</h2>
                            <p style={{ fontSize: '1rem', color: 'white' }}>{movie[0].movie_actor}</p>
                            <p style={{ fontSize: '1rem', color: 'white' }}>{movie[0].movie_time}</p>
                            <p style={{ fontSize: '1rem', color: 'white' }}>{movie[0].movie_status}</p>
                            <div className='pt-5'>
                                <button onClick={handleBookTicket} className='btn btn-primary' style={{ width: "10rem", height: "3rem" }}>Book Ticket</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>

    )
}

export default MovieFullPage