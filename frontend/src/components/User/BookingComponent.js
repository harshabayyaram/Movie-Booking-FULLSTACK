import React, { useState, useEffect } from 'react';

function BookingComponent() {

  const [bookings, setBookings] = useState([]);
//   const [userId, setUserId] = useState(1); // Default user ID, change as needed
const userId = localStorage.getItem('userId');
console.log(userId);
  const [bookingToDelete, setBookingToDelete] = useState('');

  // Function to retrieve user bookings
  const getUserBookings = () => {
    fetch(`/api/userbookings?userId=${userId}`) // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setBookings(data);
      })
      .catch((error) => {
        console.error('Error fetching bookings:', error);
      });
  };

  // Function to delete a booking
  const deleteBooking = (bookingId) => {
    fetch(`/api/deletebooking?userId=${userId}&bookingId=${bookingId}`, {
      method: 'DELETE',
    }) // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        getUserBookings(); // Refresh bookings after deletion
      })
      .catch((error) => {
        console.error('Error deleting booking:', error);
      });
  };

  useEffect(() => {
    getUserBookings();
  }, []); // Fetch bookings on component mount

  return (
    <div>
      <h2>User Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Movie Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.id}</td>
              <td>{booking.movieName}</td>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>
                <button onClick={() => deleteBooking(booking.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookingComponent;
