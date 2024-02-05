import React, { useEffect, useState } from 'react'
import UserMenuBar from '../MenuBar/UserMenuBar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MovieSeatInfo() {
    const loggedInUserId = localStorage.getItem("userId");
    const { id: movieid } = useParams();
    const [formData, setFormData] = useState({});
    const [movie, setMovie] = useState([]);
    const [selectedDate, setSelectedDate] = useState('27-01-2024');
    const [selectedTime, setSelectedTime] = useState('10:00 AM');

    console.log(movie);


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

    const handleInput = (event) => {
        setFormData(prev => ({
            ...prev,
            [event.target.name]: [event.target.value]
        }))
    }

    const handleSubmit = () => {
        const values = [loggedInUserId, movieid, selectedDate, selectedTime, formData.seatNumber];
        console.log(loggedInUserId, movieid, selectedDate, formData.time, formData.seatNumber);
        axios.post("http://localhost:8080/user/book-ticket", values)
            .then(res => {
                console.log("posted from frontend");
            })
            .then(alert("movie ticket booked"))
            .catch(err => { console.log(err) })
    }

    const handleDate = (event) => {
        setSelectedDate(event.target.value);
    };
    const handleTime = (event) => {
        setSelectedTime(event.target.value);
    }


    return (
        <div>
            <UserMenuBar />
            <div className='container d-flex col-lg-12'>
                <div className='col-lg-3 m-2'>
                    {movie.length > 0 ? (
                        <img src={movie[0].image_url} alt="movie_poster" className='w-100' style={{ height: '400px' }} />
                    ) : (<p>Loading</p>)}
                </div>
                <div className='col-lg-8 m-4'>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="date">Movie date</label>
                        {/* <input type='date' id="date" name="date" placeholder='Select date' className='form-control' onChange={handleInput} /> */}
                        <select className='form-control' onChange={handleDate}>
                            <option>15-02-2024</option>
                            <option>16-02-2024</option>
                            <option>17-02-2024</option>
                            <option>18-02-2024</option>
                            <option>19-02-2024</option>
                        </select>
                        <label htmlFor="time">Movie Time</label>
                        {/* <input type='time' id="time" name="time" placeholder='Select Movie Time' className='form-control' onChange={handleInput} /> */}
                        <select className='form-control' onChange={handleTime}>
                            <option>10:00 AM</option>
                            <option>1:00 PM</option>
                            <option>4:00 PM</option>
                            <option>9:00 PM</option>
                        </select>

                        <label htmlFor="seat_number">Number of seats</label>
                        <input type='number' id="seatNumber" name="seatNumber" placeholder='Select number of Seats' className='form-control' onChange={handleInput} />
                        <p>Amount to be Paid : {movie.length > 0 ? ((movie[0].movie_amount) * formData.seatNumber):(<small>loading...</small>)} </p>
                        <button type='submit'>Pay and Book Ticket</button>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default MovieSeatInfo