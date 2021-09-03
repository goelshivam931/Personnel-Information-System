import React from 'react'
import "./Editemp.css";
import Footer from '../components/Footer/Footer';
import Leftnav from '../components/Leftnav/Leftnav';
import Navbar from '../components/Navbar/Navbar';
import Editform from './Editform';

const Editemp = () => {
    return (
        <>
            <Navbar />
            <div className="align">
                <Leftnav />
                <Editform />
            </div>
            <Footer />
        </>

    )
}

export default Editemp
