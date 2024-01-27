import React from 'react'
import UserMenuBar from '../MenuBar/UserMenuBar'
import SportsList from './SportsList'
import Footer from '../Footer/Footer'

function Sports() {
    return (
        <div>
            <div><UserMenuBar /></div>
            {/* <div className='d-flex justify-content-center align-items-center m-5' style={{ fontSize: "5rem", }}>Sports Feature Soon</div> */}
            <SportsList />
            <Footer/>
        </div>
    )
}

export default Sports