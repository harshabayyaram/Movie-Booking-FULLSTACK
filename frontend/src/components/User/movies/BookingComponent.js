import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BASEURL } from '../../config/baseuUrl';

function BookingComponent() {

    const [bookings, setBookings] = useState([]);
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    console.log(userId);
    console.log(bookings);


    // Function to retrieve user bookings
    const getUserBookings = async () => {
        await axios.get(`${BASEURL}/user/userbookings/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}` // Include JWT token in headers
            }
        })
            .then((response) => {
                setBookings(response.data);
            })
            .catch((error) => {
                console.error('Error fetching bookings for single user:', error);
            });
    };

    const deleteBooking = (movieId) => {
        axios.delete(`${BASEURL}/user/deletebooking/${userId}/${movieId}`, {
            headers: {
                Authorization: `Bearer ${token}` // Include JWT token in headers
            }
        })
            .then((response) => {
                console.log(response.data.message);
                getUserBookings();
            })
            .catch((error) => {
                console.error('Error deleting booking FE:', error);
            });
    };

    useEffect(() => {
        axios.get(`${BASEURL}/user/userbookings/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}` // Include JWT token in headers
            }
        })
            .then((response) => {
                setBookings(response.data);
                console.log(response.data,"data from /user/userbooking/:id");
            })
            .catch((error) => {
                console.error('Error fetching bookings for single user:', error);
            });
    }, [userId, token]); // Fetch bookings on component mount

    return (
        <div>
            <h2 className='text-center'>User Bookings</h2>
            <br />
            <div className="d-flex justify-content-center align-items-center">
                <div className="bg-white rounded">
                    <table className='table'>
                        <thead>
                            <tr>
                                {/* <th className='bg-black text-white' >Movie ID</th> */}
                                <th className='bg-black text-white' >Movie Name</th>
                                <th className='bg-black text-white' >Date</th>
                                <th className='bg-black text-white' >Time</th>
                                <th className='bg-black text-white' >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking) => (
                                <tr key={booking.userId}>
                                    {/* <td>{booking.movieId}</td> */}
                                    <td>{booking.movieName}</td>
                                    <td>{booking.date}</td>
                                    <td>{booking.time}</td>
                                    <td>
                                        <button onClick={() => deleteBooking(booking.movieId)} className='btn btn-primary'>Delete Booking</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default BookingComponent;
