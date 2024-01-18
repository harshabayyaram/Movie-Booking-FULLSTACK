import React, { useEffect, useState } from 'react'
import UserMenuBar from './UserMenuBar';
import MoviesList from './MoviesList';
import axios from 'axios';
import MainCarousel from './MainCarousel';


function User() {
  const [users, setUsers] = useState([]);
  const id = localStorage.getItem("userId");
  useEffect(() => {
    axios.get('http://localhost:8080/admin/users/' + id)
      .then(response => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  console.log("User logged in id is == " + id);
  console.log(users);
  return (
    <div>
      <UserMenuBar props={users} />
      {/* 
      {users.length > 0 && (
        <h3 className=' d-flex align-items-center'>Welcome {users[0].name}</h3>
      )} */}
      <div style={{ backgroundColor: '#f2f2f2' }}>
        <MainCarousel />
      </div>
      <div className='pt-4'>
        <MoviesList />
      </div>

    </div>
  )
}

export default User