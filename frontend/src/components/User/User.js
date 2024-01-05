import React, { useEffect, useState } from 'react'
import MenuBar from './UserMenuBar';
import MoviesList from './MoviesList';
import axios from 'axios';


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
      <MenuBar props={users} />
      {users.length > 0 && (
        <h3>Welcome {users[0].name}</h3>
      )}

      <MoviesList />

    </div>
  )
}

export default User