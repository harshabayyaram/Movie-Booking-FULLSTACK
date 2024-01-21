import Axios from "axios";
import axios from "axios";
import React, { useEffect, useState } from 'react'
import Admin from "../Admin/Admin Home Page/Admin";
import User from "../User/User Home Page/User";
import Login from "./Login";

function Home() {
  const [role, setRole] = useState('');
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8080/api/")
      .then(res => {
        if (res.data.valid) {
          setRole(res.data.role);
          setAuth(true);
        }
        else {
          setAuth(false);
        }
      })
      .catch(err => {
        console.log(err);
        setAuth(false);
      });
  }, []);

  Axios.defaults.withCredentials = true;

  if (!auth) {
    return <Login />
  }

  if (role === 'user') {
    console.log('Rendering User');
    return <User />;
  } else {
    console.log('Rendering Admin');
    return <Admin />;
  }
}
export default Home;