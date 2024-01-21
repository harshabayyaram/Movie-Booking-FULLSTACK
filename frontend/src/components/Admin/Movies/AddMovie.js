import React, { useState } from 'react'
import axios from 'axios';

function AddMovie() {
  const [values, setValues] = useState({
    movietitle: "",
    movieactor: "",
    movietime: "",
    moviedate: "",
    moviestatus: "",
    movieamount: "",
    imageurl: "",
  });
  console.log(values);

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/addMovie", values)
      .then((res) => {
        console.log(res);
        alert("Movie uploaded")
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-item-center">
      <div className=" w-100 rounded">
        <form className='d-block'>
          <h2 className='d-flex justify-content-center align-item-center'>ADD New Movie</h2>
          <div className="mb-2">
            <label>Movie Title</label>
            <input
              type="text"
              placeholder="Movie Title"
              className="form-control"
              name='movietitle'
              onChange={handleInput}
            />
          </div>
          <div className="mb-2">
            <label>Movie Actor</label>
            <input
              type="text"
              placeholder="Movie-actor"
              className="form-control"
              name='movieactor'
              onChange={handleInput}
            />
          </div>
          <div className="mb-2">
            <label>Movie time</label>
            <input
              type="time"
              placeholder="Movie-time"
              className="form-control"
              name='movietime'
              onChange={handleInput}
            />
          </div>
          <div className="mb-2">
            <label>Movie date</label>
            <input
              type="date"
              placeholder="Movie-date"
              className="form-control"
              name='moviedate'
              onChange={handleInput}
            />
          </div>
          <div className="mb-2">
            <label>Movie Status -- Block buster or flop or hit</label>
            <input
              type="text"
              placeholder="Movie-status"
              className="form-control"
              name='moviestatus'
              onChange={handleInput}
            />
          </div>
          <div className="mb-2">
            <label>Movie amount</label>
            <input
              type="number"
              placeholder="Movie-amount"
              className="form-control"
              name='movieamount'
              onChange={handleInput}
            />
          </div>
          <div className="mb-2">
            <label>Poster url</label>
            <input
              type="text"
              placeholder="Movie poster URL"
              className="form-control"
              name='imageurl'
              onChange={handleInput}
            />
          </div>
          <button className="btn btn-success" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddMovie