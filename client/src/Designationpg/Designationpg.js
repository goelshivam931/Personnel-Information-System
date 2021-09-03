import React from 'react';
import "./Designationpg.css";
import Footer from '../components/Footer/Footer';
import Leftnav from '../components/Leftnav/Leftnav';
import Navbar from '../components/Navbar/Navbar';
import Adddesignation from './Adddesignation';


const Designationpg = () => {
    return (
        <>
            <Navbar />
            <div className="align">
                <Leftnav />
                <Adddesignation />
            </div>
            <Footer />
        </>
    )
}

export default Designationpg
