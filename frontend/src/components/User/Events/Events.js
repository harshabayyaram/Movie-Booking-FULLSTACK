import React from 'react'
import UserMenuBar from '../MenuBar/UserMenuBar'
import EventsList from './EventsList';
import Footer from '../Footer/Footer';

function Events() {
    return (
        <div>
            <div><UserMenuBar /></div>
            {/* <div className='d-flex justify-content-center align-items-center m-5' style={{ fontSize: "5rem", }}>Events Feature Soon</div> */}
            <EventsList/>
            <Footer/>
        </div>
    )
}

export default Events;