import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import validation from "./LoginValidations";
import Axios from "axios";


function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  })

  const Navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    // setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    if (errors.email === "" && errors.password === "") {
      Axios.post("http://localhost:8080/login", values)
        .then(res => {
          if(res.data === "Success"){
            Navigate("/home")
          }else{
            alert("No record found");
            window.location.reload();
          }
        })
        .catch(err => { console.log("Error occured from frontend" + err) })
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign In</h2>
        <form action="" onSubmit={handleSubmit}>
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
        </form>
      </div>
    </div>
  );
}

export default Login;
