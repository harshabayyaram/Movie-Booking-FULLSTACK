import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function UserMovies() {
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
            
        </div>
    );
};

export default UserMovies;