import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

//checks admin logged in or not
export const AdminPrivateRoutes = () => {
    const auth = localStorage.getItem("token");
    // console.log(auth, localStorage.getItem("token"));
    const role = localStorage.getItem("role");
    console.log(role);
    return auth && role === "admin" ? <Outlet /> : <Navigate to="/login" />
}

export const UserPrivateRoutes = () => {
    const auth = localStorage.getItem("token");
    // console.log(auth, localStorage.getItem("token"));
    const role = localStorage.getItem("role");
    console.log(role);
    return auth && role === "user" ? <Outlet /> : <Navigate to="/login" />
}