import React from 'react'
import UserMenuBar from './UserMenuBar'
import SportsList from './SportsList'

function Sports() {
    return (
        <div>
            <div><UserMenuBar /></div>
            {/* <div className='d-flex justify-content-center align-items-center m-5' style={{ fontSize: "5rem", }}>Sports Feature Soon</div> */}
            <SportsList />
        </div>
    )
}

export default Sports