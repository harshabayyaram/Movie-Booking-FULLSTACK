import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Side Bar/SideBar';
import AdminMenuBar from '../Admin Home Page/AdminMenuBar';
import { BASEURL } from '../../config/baseuUrl';


const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get(`${BASEURL}/admin/users`, {
            headers: {
                Authorization: `Bearer ${token}` // Add the token to the request headers
            }
        })
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`${BASEURL}/admin/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}` // Add the token to the request headers
                }
            });
            setUsers(users.filter(user => user.id !== id)); // Update the state to remove the deleted user without reloading the page
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };
    console.log(users);

    return (
        <><AdminMenuBar />
            <div className='d-flex row col-lg-12'>

                <div className='col-lg-3'>
                    <Sidebar />
                </div>
                <div className='p-4 col-lg-9'>
                    <div className="justify-content-center align-items-center">
                        <div className="bg-white rounded">
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th className='bg-black text-white'>Id</th>
                                        <th className='bg-black text-white' >Name</th>
                                        <th className='bg-black text-white d-flex justify-content-center text-align-center'>email</th>
                                        <th className='bg-black text-white'></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((data, i) => (
                                        <tr key={i}>
                                            <td>{data.id}</td>
                                            <td>{data.name}</td>
                                            <td>{data.email}</td>
                                            <td>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={(e) => handleDelete(data.id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default UserList;
