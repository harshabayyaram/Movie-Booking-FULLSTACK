import Axios from "axios";
import axios from "axios";
import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import Admin from "./Admin";
import User from "./User";

function Home() {
  const [role, setRole] = useState(null);
  const [auth, setAuth] = useState(false);
  // const [message, setMessage] = useState("");
  console.log(role);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/")
      .then(res => {
        // console.log(res);
        if (res.data.valid) {
          setRole(res.data.role);
          setAuth(true);
        }
        else {
          setAuth(false);
          // navigate("/login");
          // setMessage(res.data.err)
        }
      })
      .catch(err => console.log(err));
  }, []);




  Axios.defaults.withCredentials = true;

  return (
    <div>
      {auth ?
        (
          role === "admin" ? <Admin /> : <User />
        )
        :
        (
          <div className=" d-flex flex-column justify-content-center align-items-center vh-100">
            <Link to="/login" className='btn btn-primary col-sm-6 col-md-3'>Login</Link>
            <h4 className="m-4">OR</h4>
            <Link to="/signup" className='btn btn-primary col-sm-6 col-md-3 '>Create Account</Link>
          </div>
        )}
    </div>

  )
}

export default Home