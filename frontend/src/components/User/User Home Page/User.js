import React, { useEffect, useState } from 'react'
import UserMenuBar from '../MenuBar/UserMenuBar';
import MoviesList from '../movies/MoviesList';
import axios from 'axios';
import MainCarousel from './MainCarousel';
import Footer from '../Footer/Footer';


function User() {
  return (
    <div>
      <UserMenuBar/>

      <div style={{ backgroundColor: '#f2f2f2' }}>
        <MainCarousel />
      </div>

      <div className='pt-4'>
        <MoviesList/>
      </div>

      <div>
        <Footer/>
      </div>

    </div>
  )
}

export default User