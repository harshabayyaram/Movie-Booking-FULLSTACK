import React, { useEffect } from 'react';
import Menubar from "../MenuBar";
import UserList from './UserList';


function Admin() {
  useEffect(() => {
    console.log('Admin component rendered');
  }, []);
  return (
    <div>
      <Menubar />
      <h1 className=''>Welcome Admin Here is a List of Users</h1>
      <UserList />
    </div>
  )
}

export default Admin;