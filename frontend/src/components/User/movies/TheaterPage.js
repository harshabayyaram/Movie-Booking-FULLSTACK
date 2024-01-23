import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import UserMenuBar from '../MenuBar/UserMenuBar';
import TheaterList from './TheaterList';

function TheaterPage() {

    const [movie, setMovie] = useState([]);
    console.log(movie);
    const loggedInUserId = localStorage.getItem("userId");
    // console.log(loggedInUserId);
    const { movieid } = useParams();
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
        axios.post("http://localhost:8080/user/book-ticket", values)
            .then(res => {
                console.log("posted from frontend");
                alert("Movie ticket Booked");
            })
            .catch(err => { console.log(err) })
    }

    return (
        <div>
            <UserMenuBar />
            <TheaterList props={handleBookTicket}/>
        </div>
    )
}

export default TheaterPage