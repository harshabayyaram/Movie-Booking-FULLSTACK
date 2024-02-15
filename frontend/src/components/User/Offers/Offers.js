import React from 'react'
import UserMenuBar from '../MenuBar/UserMenuBar'
import Footer from '../Footer/Footer';
import PublicMenuBar from '../../Home page/PublicMenuBar';

function Offers() {
    const token = localStorage.getItem("token");
    return (
        <div>
            <div>
                {token ? (<UserMenuBar />) : (<PublicMenuBar />)}
            </div>
            <div className='d-flex justify-content-center align-items-center m-5' style={{ fontSize: "5rem", }}>Offers Feature Soon</div>
            <Footer />
        </div>
    )
}

export default Offers;