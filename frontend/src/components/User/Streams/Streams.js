import React from 'react'
import UserMenuBar from '../MenuBar/UserMenuBar'
import Footer from '../Footer/Footer';

function Streams() {
    return (
        <div>
            <div><UserMenuBar /></div>
            <div className='d-flex justify-content-center align-items-center m-5' style={{ fontSize: "5rem", }}>Streams Feature Soon</div>
            <Footer />
        </div>
    )
}

export default Streams;