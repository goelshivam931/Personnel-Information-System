import React from 'react'
import "./DeleteEmployee.css";

import Footer from '../components/Footer/Footer';
import Leftnav from '../components/Leftnav/Leftnav';
import Navbar from '../components/Navbar/Navbar';
import Delete from "./Delete";

const DeleteEmployee = () => {
  return (
    <>
      <Navbar />
      <div className="align">
        <Leftnav />
        <Delete />
      </div>
      <Footer />
    </>
  )
}

export default DeleteEmployee