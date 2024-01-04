import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/admin/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/admin/users/${id}`);
            window.location.reload();
            setUsers(users.filter(user => user.id !== id)); // Update the state to remove the deleted user without reloading the page
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div>
            <div className="d-flex bg-primary justify-content-center align-items-center">
                <div className="p-4 bg-white rounded">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th className='bg-black text-white'>Id</th>
                                <th className='bg-black text-white' >Name</th>
                                <th className='bg-black text-white d-flex justify-content-center text-align-center'>email</th>
                                <th className='bg-black text-white'></th>
                                <th className='bg-black text-white'></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((data, i) => (
                                <tr key={i}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    {/* <td>
                                        <Link to={`update/${data.id}`} className="btn btn-primary">
                                            Update
                                        </Link>
                                    </td> */}
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
    );
};

export default UserList;
