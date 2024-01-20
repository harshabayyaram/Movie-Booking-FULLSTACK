import React from 'react'
import UserMenuBar from './UserMenuBar'
import EventsList from './EventsList';

function Events() {
    return (
        <div>
            <div><UserMenuBar /></div>
            {/* <div className='d-flex justify-content-center align-items-center m-5' style={{ fontSize: "5rem", }}>Events Feature Soon</div> */}
            <EventsList/>
        </div>
    )
}

export default Events;