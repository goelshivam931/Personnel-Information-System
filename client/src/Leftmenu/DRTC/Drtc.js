import React from 'react'
import "./Drtc.css"

import Footer from '../../components/Footer/Footer';
import Leftnav from '../../components/Leftnav/Leftnav';
import Navbar from '../../components/Navbar/Navbar';
import Drtcemp from "./Drtcemp";

const Drtc = () => {
    return (
        <>
            <Navbar />
            <div className="align">
                <Leftnav />
                <Drtcemp />
            </div>
            <Footer />
        </>
    )
}

export default Drtc
