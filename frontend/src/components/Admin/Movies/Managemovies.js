import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddMovie from "./AddMovie"
import EditMovie from "./EditMovie"
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import AdminMenuBar from '../Admin Home Page/AdminMenuBar';
import SideBar from '../Side Bar/SideBar';


const Managemovies = () => {
  const [movies, setMovies] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const addMovie = () => {
    setSelectedComponent(<AddMovie />);
  };

  const editMovie = () => {
    setSelectedComponent(<EditMovie />)
  }

  const handleClose = () => {
    setSelectedComponent(null);
  };

  useEffect(() => {
    axios.get('http://localhost:8080/admin/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/admin/movies/${id}`);
      setMovies(movies.filter(user => user.id !== id)); // Update the state to remove the deleted user without reloading the page
    } catch (error) {
      console.error('Error deleting movies:', error);
    }
  };

  const MovieAddEdit = (event) => {
    editMovie();
    handleEdit(event);
  }

  const handleEdit = (movieId) => {
    const selectedMovie = movies.find(movie => movie.id === movieId);
    console.log(selectedMovie);
    setSelectedComponent(<EditMovie movie={selectedMovie} handleClose={handleClose} />);
  }

  console.log(movies);

  return (
    <div>
      <AdminMenuBar />
      <div className='d-flex col-log-12'>
        <div className='col-lg-3'>
          <SideBar />
        </div>
        <div className='col-lg-9'>
          <Container className="text-center">
            <Row>
              <Col className='p-3'>
                <Button variant="primary" onClick={addMovie}>Add Movie</Button>
              </Col>
            </Row>
          </Container>
          <div className="d-flex justify-content-center align-items-center">
            <div className="bg-white rounded">
              <table className='table'>
                <thead>
                  <tr>
                    <th className='bg-black text-white' >movie_name</th>
                    <th className='bg-black text-white'>movie_actor</th>
                    <th className='bg-black text-white'>movie_time</th>
                    <th className='bg-black text-white'>movie_date</th>
                    <th className='bg-black text-white'>movie_amount</th>
                    <th className='bg-black text-white'></th>
                    <th className='bg-black text-white'></th>
                  </tr>
                </thead>
                <tbody>
                  {movies.map((data, i) => (
                    <tr key={i}>
                      <td>{data.movie_name}</td>
                      <td className='text-center'>{data.movie_actor}</td>
                      <td className='text-center'>{data.movie_time}</td>
                      <td className='text-center'>{data.movie_date}</td>
                      <td className='text-center'>{data.movie_amount}</td>
                      <td className='text-center'>
                        <button
                          className="btn btn-primary"
                          onClick={(e) => MovieAddEdit(data.id)}
                        >
                          EDIT
                        </button>
                      </td>
                      <td className='text-center'>
                        <button
                          className="btn btn-danger"
                          onClick={(e) => handleDelete(data.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className='m-5 p-4' >
            {selectedComponent && (
              <Modal show={true} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {selectedComponent}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant='secondary' onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Managemovies;
