import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Sidebar from './SideBar';
import AdminMenuBar from './AdminMenuBar';

function ManageBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/admin/managebookings')
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);
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
                    <th className='bg-black text-white'>user_name</th>
                    <th className='bg-black text-white'>movie_name</th>
                    <th className='bg-black text-white d-flex justify-content-center text-align-center'>movie_date</th>
                    <th className='bg-black text-white'>movie_time</th>
                    <th className='bg-black text-white'>movie_amount</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((data, i) => (
                    <tr key={i}>
                      <td>{data.userName}</td>
                      <td>{data.movie_name}</td>
                      <td>{data.movie_date}</td>
                      <td>{data.movie_time}</td>
                      <td>{data.movie_amount}</td>
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

export default ManageBookings