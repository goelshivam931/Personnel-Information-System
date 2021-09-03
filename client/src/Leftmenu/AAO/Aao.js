import React from 'react'
import "./Aao.css"

import Footer from '../../components/Footer/Footer';
import Leftnav from '../../components/Leftnav/Leftnav';
import Navbar from '../../components/Navbar/Navbar';
import Aaoemp from "./Aaoemp";

const Aao = () => {
    return (
        <>
            <Navbar />
            <div className="align">
                <Leftnav />
                <Aaoemp />
            </div>
            <Footer />
        </>
    )
}

export default Aao
