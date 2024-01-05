import axios from 'axios';
import React, { useEffect, useState } from 'react';
import BookingComponent from './BookingComponent';

function UserBookingList() {
  // const [users, setUsers] = useState([]);
  // const id = localStorage.getItem("userId");
  // useEffect(() => {
  //   axios.get('http://localhost:8080/admin/users/' + id)
  //     .then(response => {
  //       setUsers(response.data);
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching users:', error);
  //     });
  // }, []);

  // console.log("User logged in id is == " + id);
  // console.log(users);
  return (
    <div>
      userBookingList
      <h1>Retrive this users booking list</h1>
      <BookingComponent />
    </div>
  )
}

export default UserBookingList;