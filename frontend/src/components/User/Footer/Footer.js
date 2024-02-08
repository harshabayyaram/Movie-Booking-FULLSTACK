import React from 'react';
import "./Footer.css";
import { TiSocialInstagram, TiSocialFacebook, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-secondary'>
            <h3 className='p-2'>Cinema Booking</h3>
            <div className='d-flex justify-content-center align-items-center p-2'>
                <Link to='/user/about' className='p-2 text-decoration-none text-color'>About Us</Link>
                <Link to='/user/contact' className='p-2 text-decoration-none text-color'>Contact Us</Link>
                <Link to='/' className='p-2 text-decoration-none text-color'>24/7 Customer Care</Link>
                <Link to='/' className='p-2 text-decoration-none text-color'>Subscribe to newsLetter</Link>
            </div>
            <div className='d-flex'>

                <div className='p-2 footer-icons'>
                    <a href='https://www.instagram.com/' className='' target='blank'><TiSocialInstagram size="40px" flip /></a>
                </div>
                <div className='p-2 footer-icons'>
                    <a href='https://www.facebook.com/' className='' target='blank'><TiSocialFacebook size="40px" /></a>
                </div>
                <div className='p-2 footer-icons'>
                    <a href='https://twitter.com/' className='' target='blank'><TiSocialTwitter size="40px" /></a>
                </div>
                <div className='p-2 footer-icons'>
                    <a href='https://www.youtube.com/' className='' target='blank'><TiSocialYoutube size="40px" /></a>
                </div>
            </div>
            <small className='p-3'> <small> Copy Right 2024 &copy; Harsha Entertainment Pvt. Ltd. All Rights Reserved</small></small>
        </div>
    )
}

export default Footer;