import React, { useEffect, useState } from 'react'
import UserMenuBar from '../MenuBar/UserMenuBar'
import axios from 'axios';
import { BASEURL } from '../../config/baseuUrl';
import Footer from '../Footer/Footer';

function EditProfile() {

  const loggedUser = localStorage.getItem("userId");
  const token = localStorage.getItem('token');
  const [user, setUser] = useState([])
  console.log(user[0]);
  const [editedUser, setEditedUser] = useState({
    name: '',
    email: '',
    password: ''
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // eslint-disable-next-line
    axios.get(`${BASEURL}/user/users/` + loggedUser, {
      headers: {
        Authorization: `Bearer ${token}` // Attach token to request header
      }
    })
      .then(response => {
        setUser(response.data);
        const userData = response.data[0];
        setEditedUser({
          name: userData.name,
          email: userData.email,
          password: ''
        });
        console.log(response.data);
      })
      .catch(error => {
        console.error("error fetching users");
      })
  }, [loggedUser,token])

  const handleInput = (event) => {
    const { name, value } = event.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`${BASEURL}/user/editUser/${loggedUser}`, editedUser, {
        headers: {
          Authorization: `Bearer ${token}` // Attach token to request header
        }
      })
        .then(console.log("User Details Edited"))
        .then(window.location.reload())
    }
    catch (error) {
      console.error("Error occured");
    }
  }

  return (
    <div>
      <UserMenuBar />
      <div className='m-4'>
        <h5 className='text-center'>Edit Your profile</h5>
        <form onSubmit={handleSubmit}>
          <div className='w-50'>
            <label>Name</label>
            <input type='text' name='name' className='form-control' onChange={handleInput} value={editedUser.name} />
          </div>
          <div className='w-50'>
            <label>Email</label>
            <input type='email' name='email' className='form-control' onChange={handleInput} value={editedUser.email} />
          </div>
          <div className='w-50'>
            <label>Enter New Password</label>
            <input type='Password' name='password' className='form-control' onChange={handleInput} value={editedUser.password} minLength={8} required placeholder='New password'/>
          </div>
          <button className='btn btn-success'>Update Details</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default EditProfile;