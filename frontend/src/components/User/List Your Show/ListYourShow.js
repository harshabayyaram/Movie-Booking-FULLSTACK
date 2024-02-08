import React from 'react'
import UserMenuBar from '../MenuBar/UserMenuBar'
import Footer from '../Footer/Footer';

function ListYourShow() {
    return (
        <div>
            <div><UserMenuBar /></div>
            <div className='d-flex justify-content-center align-items-center m-5' style={{ fontSize: "5rem", }}>List your Show Feature Soon</div>
            <Footer />
        </div>
    )
}

export default ListYourShow;