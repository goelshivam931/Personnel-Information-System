import React from 'react'
import "./Aas.css"

import Footer from '../../components/Footer/Footer';
import Leftnav from '../../components/Leftnav/Leftnav';
import Navbar from '../../components/Navbar/Navbar';
import Aasemp from "./Aasemp";

const Aas = () => {
    return (
        <>
            <Navbar />
            <div className="align">
                <Leftnav />
                <Aasemp />
            </div>
            <Footer />
        </>
    )
}

export default Aas
