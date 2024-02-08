import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validation from "./LoginValidations";
import Axios from "axios";
import image from "../../assets/HomePageBg.jpg";
import Admin from "../Admin/Admin Home Page/Admin";
import User from "../User/User Home Page/User";

function Login() {
  Axios.defaults.withCredentials = true;
  const [values, setValues] = useState({
    email: "",
    password: "",
  })

  const Navigate = useNavigate();
  const [role, setRole] = useState('');
  const [auth, setAuth] = useState(false);

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    // setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))

  }


  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    if (errors.email === "" && errors.password === "") {
      Axios.post("https://movie-booking-backend-node.onrender.com/login", values)
        .then(res => {
          console.log("res data" + res.data);
          if (res.data.login) {
            localStorage.setItem("userId", res.data.id);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("role", res.data.role);
            setRole(res.data.role);
            setAuth(true);
            Navigate("/");
          } else {
            alert("No record found");
            window.location.reload();
          }
        })
        .catch(err => { console.log("Error occured from frontend" + err) })
    }
  }

  if (!auth) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundImage: `url(${image})`, backgroundSize: "contain" }}>
        <div className="bg-white p-3 rounded w-40">
          <h2>Sign In</h2>
          <form action="" onSubmit={handleSubmit} className="d-block">
            <div className="mb-3">
              <label htmlFor="email" className="p-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control rounded-0"
                onChange={handleInput}
                name="email"
              />
              {errors.email && <span className="text-danger">{errors.email}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="p-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control rounded-0"
                onChange={handleInput}
                name="password"
              />
              {errors.password && <span className="text-danger">{errors.password}</span>}
            </div>
            <button type="submit" className="btn btn-success w-100">Log In</button>
            <br />
            <br />
            <Link to="/signup" className="btn btn-default border w-100 text-decoration-none">
              Create Account
            </Link>
            <div className="d-flex justify-content-center pt-4 text-secondary">I agree to the -<Link to="/terms-and-conditions"> terms and conditions</Link> & <Link to="/privacy-policy">Privacy</Link></div>
          </form>
        </div>
      </div>
    );
  } else {
    if (role === 'user') {
      console.log('Rendering User');
      return <User />;
    } else {
      console.log('Rendering Admin');
      return <Admin />;
    }
  }
}

export default Login;
