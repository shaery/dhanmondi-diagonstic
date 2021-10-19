import React from 'react';
import './Footer.css';
import signBoard from '../../images/signbrd.jpg';

const Footer = () => {
    return (
        <div className="footer-section">
            <h3>Contact Us</h3>
            <br />
            <p>Address: 79 Satmasjid Road 1205 Dhaka, Dhaka Division, Bangladesh</p>
            <p>Phone: +880 1774-080049</p>
            <p>WhatsApp: +880 1774-080049</p>
            <p>Email: dhanmondidiagnostic@gmail.com</p>
            <div>
                <img src={signBoard} alt="Signboard_Image" className="w-25 px-5" />
            </div>
            <br />
            <small>	&copy; 2021. A Shaeria's Creation.</small>
        </div>
    );
};

export default Footer;