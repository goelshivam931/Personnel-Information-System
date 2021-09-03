import React from 'react';
import "./Grouppg.css";
import Footer from '../components/Footer/Footer';
import Leftnav from '../components/Leftnav/Leftnav';
import Navbar from '../components/Navbar/Navbar';
import Addgroup from './Addgroup';



const Grouppg = () => {
    return (
        <>
            <Navbar />
            <div className="align">
                <Leftnav />
                <Addgroup />
            </div>
            <Footer />
        </>
    )
}

export default Grouppg
