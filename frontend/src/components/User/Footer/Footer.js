import React from 'react';
import "./Footer.css";
import { TiSocialInstagram, TiSocialFacebook, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";

function Footer() {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-secondary'>
            <h3 className='p-2'>Cinema Booking</h3>
            <div className='d-flex justify-content-center align-items-center p-2'>
                <a href='/user/about' className='p-2 text-decoration-none text-color'>About Us</a>
                <a href='/user/contact' className='p-2 text-decoration-none text-color'>Contact Us</a>
                <a href='/' className='p-2 text-decoration-none text-color'>24/7 Customer Care</a>
                <a href='/' className='p-2 text-decoration-none text-color'>Subscribe to newsLetter</a>
            </div>
            <div className='d-flex'>

                <div className='p-2 footer-icons'>
                    <a href='/' className=''><TiSocialInstagram size="40px" flip/></a>
                </div>
                <div className='p-2 footer-icons'>
                    <a href='/' className=''><TiSocialFacebook size="40px" /></a>
                </div>
                <div className='p-2 footer-icons'>
                    <a href='/' className=''><TiSocialTwitter size="40px" /></a>
                </div>
                <div className='p-2 footer-icons'>
                    <a href='/' className=''><TiSocialYoutube size="40px" /></a>
                </div>
            </div>
            <small className='p-3'> <small> Copy Right 2024 &copy; Harsha Entertainment Pvt. Ltd. All Rights Reserved</small></small>
        </div>
    )
}

export default Footer;