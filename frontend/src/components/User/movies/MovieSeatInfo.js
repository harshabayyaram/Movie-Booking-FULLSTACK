import React, { useEffect, useState } from 'react'
import UserMenuBar from '../MenuBar/UserMenuBar';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function MovieSeatInfo() {
    const loggedInUserId = localStorage.getItem("userId");
    console.log(loggedInUserId);
    const { id: movieid } = useParams();
    console.log(movieid);
    const [formData, setFormData] = useState({});
    console.log(formData);
    const [movie, setMovie] = useState([]);
    // console.log(movie);
    const [selectedDate, setSelectedDate] = useState('27-01-2024');
    console.log(selectedDate);
    const [selectedTime, setSelectedTime] = useState('10:00 AM');
    console.log(selectedTime);



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
                alert("Movie ticket Booked");
            })
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
                            <option>27-01-2024</option>
                            <option>28-01-2024</option>
                            <option>29-01-2024</option>
                            <option>30-01-2024</option>
                            <option>31-01-2024</option>
                        </select>
                        <label htmlFor="time">Movie Time</label>
                        {/* <input type='time' id="time" name="time" placeholder='Select Movie Time' className='form-control' onChange={handleInput} /> */}
                        <select className='form-control' onChange={handleTime}>
                            <option>10:00 AM</option>
                            <option>1:00 PM</option>
                            <option>4:00 PM</option>
                            <option>9:00 PM</option>
                        </select>

                        <label htmlFor="seat_number">Seat Number</label>
                        <input type='number' id="seatNumber" name="seatNumber" placeholder='Select Seat Number' className='form-control' onChange={handleInput} />
                        <button type='submit'>Book Ticket</button>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default MovieSeatInfo