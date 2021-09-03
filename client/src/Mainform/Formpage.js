import React from 'react';
import "./Formpage.css";
import Footer from '../components/Footer/Footer';
import Leftnav from '../components/Leftnav/Leftnav';
import Navbar from '../components/Navbar/Navbar';
import Form from './Form';

const Formpage = () => {
    return (
        <>
            <Navbar />
            <div className="align">
                <Leftnav />
                <Form />
            </div>
            <Footer />
        </>

    )
}

export default Formpage
