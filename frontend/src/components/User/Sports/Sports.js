import React from 'react'
import UserMenuBar from '../MenuBar/UserMenuBar'
import SportsList from './SportsList'
import Footer from '../Footer/Footer'
import PublicMenuBar from '../../Home page/PublicMenuBar'

function Sports() {
    const token = localStorage.getItem('token');
    console.log(token,"token from sports");
    return (
        <div>
            <div>
            {token ? (<UserMenuBar />):(<PublicMenuBar/>)}
                </div>
            {/* <div className='d-flex justify-content-center align-items-center m-5' style={{ fontSize: "5rem", }}>Sports Feature Soon</div> */}
            <SportsList />
            <Footer/>
        </div>
    )
}

export default Sports