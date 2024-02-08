import React from 'react'
import UserMenuBar from '../MenuBar/UserMenuBar'
import Footer from '../Footer/Footer';

function Offers() {
    return (
        <div>
            <div><UserMenuBar /></div>
            <div className='d-flex justify-content-center align-items-center m-5' style={{ fontSize: "5rem", }}>Offers Feature Soon</div>
            <Footer />
        </div>
    )
}

export default Offers;