import Axios from "axios";
import axios from "axios";
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Admin from "./Admin/Admin";
import User from "./User/User";

import image from "../images/pngtree-empty-cinema-ticket-with-popcorn-filmstrip-clapper-board-and-movie-camera-image_3623913.jpg"

function Home() {
  const [role, setRole] = useState('');
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [message, setMessage] = useState("");
  // console.log(role);

  // const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/")
      .then(res => {
        // console.log(res);
        if (res.data.valid) {
          setRole(res.data.role);
          // console.log(res.data,"rwss")

          // console.log(res.data.role);
          setAuth(true);
        }
        else {
          setAuth(false);
          // navigate("/login");
          // setMessage(res.data.err)
        }
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setAuth(false);
        setLoading(false);
      });
  }, []);

  Axios.defaults.withCredentials = true;
  // useEffect(() => {
  //   console.log('Role:', role); // Log role changes
  // }, [role]);

  if (!auth) {
    return (
      // style={{ backgroundImage:`url(${image})` }}
      <div className="d-flex flex-column justify-content-center align-items-center vh-100" >
        <Link to="/login" className="btn btn-primary col-sm-6 col-md-3">
          Login
        </Link>
        <h4 className="m-4">OR</h4>
        <Link to="/signup" className="btn btn-primary col-sm-6 col-md-3 ">
          Create Account
        </Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <p>Loading...</p>
      </div>
    );
  }


  console.log(role);
  if (role === 'user') {
    console.log('Rendering User');
    return <User />;
  }
  console.log('Rendering Admin');
  return <Admin />;

}

export default Home;