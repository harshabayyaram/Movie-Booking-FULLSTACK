import React from 'react'
import UserMenuBar from '../MenuBar/UserMenuBar'
import EventsList from './EventsList';
import Footer from '../Footer/Footer';
import PublicMenuBar from '../../Home page/PublicMenuBar';

function Events() {
    const token = localStorage.getItem("token");
    return (
        <div>
            <div>
                {token ? (<UserMenuBar />) : (<PublicMenuBar />)}
            </div>
            {/* <div className='d-flex justify-content-center align-items-center m-5' style={{ fontSize: "5rem", }}>Events Feature Soon</div> */}
            <EventsList />
            <Footer />
        </div>
    )
}

export default Events;