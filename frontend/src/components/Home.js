import Axios from "axios";
import axios from "axios";
import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

function Home() {
  const [role, setRole] = useState("");
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/")
      .then(res => {
        console.log(res);
        if (res.data.valid) {
          setRole(res.data.role);
          setAuth(true);
        }
        else {
          setAuth(false);
          // navigate("/login");
          setMessage(res.data.err)
        }
      })
      .catch(err => console.log(err));
  }, []);


  const handleDelete = () => {
    Axios.get("http://localhost:8080/logout")
      .then(res => {
        window.location.reload();
      })
      .catch(err => console.log(err));
  }

  Axios.defaults.withCredentials = true;

  return (
    <div className="p-5 d-flex justify-content-center m-5">
      {
        auth ?
          <div className="p-5">
            <h3>You are Authorized</h3>
            <button className='btn btn-danger' onClick={handleDelete}>Logout</button>
          </div>
          :
          <div className="p-5">
            <h3>{message}</h3>
            <h3>Yourn't Loged in Please Login Now</h3>
            <Link to="/login" className='btn btn-primary'>Login</Link>
          </div>
      }
    </div>
  )
}

export default Home