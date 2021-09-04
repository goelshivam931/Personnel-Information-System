import React from 'react'
import "./Delete.css";

import Axios from 'axios';
import Button from '@material-ui/core/Button';
import { useState } from 'react';

import {
    Link
} from "react-router-dom";


const Delete = () => {

    const [icno, setIcno] = useState("");

    const deleteEmployee = () => {
        Axios.delete(`http://localhost:3001/deleteEmployee/${icno}`).then((response) => {
            console.log("Deleted Employee");
        });
    };

    return (
        <div className="right">
            <div className="rightnav">
                <div className="topbuttons">
                    <Link to="/homedata"><h5>Home</h5></Link>
                </div>
                <div className="topbuttons">
                    <Link to="/editemp"> <h5>Edit Emp Details</h5></Link>
                </div>
                <div className="topbuttons">
                    <Link to="/"><h5>Add New Employee</h5></Link>
                </div>
                <div className="topbuttons">
                    <Link to="/deleteemp"> <h5>Delete Employee</h5></Link>
                </div>
                <div className="topbuttons">
                    <Link to="/groupdata"><h5>Add/Edit Group/Div</h5></Link>
                </div>
                <div className="topbuttons">
                    <Link to="/designdata"><h5>Add Designation</h5></Link>
                </div>
                <hr />
            </div>
            <div className="rightbottombox">
                <h5>Delete Employee </h5>
                <div className="databox">
                    <div className="frm">
                        <label className="lbel">Enter ICNO:</label>
                        <input type="text" className="inpt" placeholder="Enter ICNO" onChange={(event) => {
                            setIcno(event.target.value);
                        }} />
                        <Button variant="contained" color="primary" onClick={deleteEmployee}>
                            Delete Employee
                        </Button>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Delete
