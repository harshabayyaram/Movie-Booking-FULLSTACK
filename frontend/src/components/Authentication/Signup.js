import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validation from "./SignUpValidation";
import Axios from "axios";
import image from "../../assets/HomePageBg.jpg"
import { BASEURL } from "../config/baseuUrl";

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setloading] = useState(false);


  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    if (errors.name === "" && errors.email === "" && errors.password === "") {
      setloading(true);
      const token = localStorage.getItem('token');
      Axios.post(`${BASEURL}/signup`, values, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => {
          navigate("/login");
          console.log("posted from frontend");
        })
        .catch(err => { console.log("Error occured posting from frontend" + err) })
        .finally(()=> setloading(false));
    }
  };


  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100" style={{ backgroundImage: `url(${image})`, backgroundSize: "contain" }}>
      <div className="bg-white p-3 rounded w-50">
        <h2>Sign UP</h2>
        <form action="" onSubmit={handleSubmit} className="d-block">
          <div className="mb-3">
            <label htmlFor="name" className="p-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control rounded-0"
              name="name"
              onChange={handleInput}
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="p-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control rounded-0"
              name="email"
              onChange={handleInput}
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
              name="password"
              onChange={handleInput}
            />
            {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>

          <button className="btn btn-success w-100" disabled={loading}>
            {loading ? 'loading...':'Sign Up'}
          </button>
          <br />
          <br />
          <Link
            to="/login"
            className="btn btn-default border w-100 text-decoration-none"
          >
            Log In
          </Link>

        </form>
        <div className="d-flex justify-content-center pt-4 text-secondary">I agree to the -<Link to="/terms-and-conditions"> terms and conditions</Link> & <Link to="/privacy-policy">Privacy</Link></div>
      </div>
    </div>
  );
}

export default Signup;
