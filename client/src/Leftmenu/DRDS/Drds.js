import React from 'react'
import "./Drds.css"

import Footer from '../../components/Footer/Footer';
import Leftnav from '../../components/Leftnav/Leftnav';
import Navbar from '../../components/Navbar/Navbar';
import Drdsemp from "./Drdsemp";


const Drds = () => {
    return (
        <>
            <Navbar />
            <div className="align">
                <Leftnav />
                <Drdsemp />
            </div>
            <Footer />
        </>
    )
}

export default Drds
