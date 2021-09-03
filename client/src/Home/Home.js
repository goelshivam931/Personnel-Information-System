import React from 'react'
import Footer from '../components/Footer/Footer';
import Leftnav from '../components/Leftnav/Leftnav';
import Navbar from '../components/Navbar/Navbar';
import Showadata from './Showdata';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="align">
                <Leftnav />
                <Showadata />
            </div>
            <Footer />
        </>
    )
}

export default Home
