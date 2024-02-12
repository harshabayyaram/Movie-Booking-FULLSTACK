import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Sidebar from '../Side Bar/SideBar';
import AdminMenuBar from '../Admin Home Page/AdminMenuBar';
import { BASEURL } from '../../config/baseuUrl';

function ManageBookings() {
  const [bookings, setBookings] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get(`${BASEURL}/admin/show-bookings`, {
      headers: {
        Authorization: `Bearer ${token}` // Add the token to the request headers
      }
    })
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, [token]);
  console.log(bookings);

  return (
    <div>
      <AdminMenuBar />

      <div className='row col-lg-12'>
        <div className='col-lg-3'>
          <Sidebar />
        </div>
        <div className='col-lg-9 pt-3'>
          <div>
            <div className="bg-white rounded">
              <table className='table'>
                <thead>
                  <tr>
                    <th className='bg-black text-white'>User name</th>
                    <th className='bg-black text-white'>Movie</th>
                    <th className='bg-black text-white d-flex justify-content-center text-align-center'>Date</th>
                    <th className='bg-black text-white'>Time</th>
                    <th className='bg-black text-white'>Number of seats</th>
                    <th className='bg-black text-white'>Total amount</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((data, i) => (
                    <tr key={i}>
                      <td>{data.userName}</td>
                      <td>{data.movie_name}</td>
                      <td>{data.date}</td>
                      <td>{data.time}</td>
                      <td>{data.seatNumber}</td>
                      <td>{(data.movie_amount)*(data.seatNumber)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default ManageBookings;