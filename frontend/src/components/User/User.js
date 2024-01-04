import React from 'react'
import MenuBar from '../MenuBar';
// import UserMovies from './UserMovies';
import MoviesList from './MoviesList';


function User() {
  return (
    <div>
      <MenuBar />
      <h1>Welcome to User Page</h1>
      <MoviesList />
      {/* <UserMovies /> */}


    </div>
  )
}

export default User