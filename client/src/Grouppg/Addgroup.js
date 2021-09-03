import React from 'react'
import "./Addgroup.css";
import { useState } from 'react';
import Axios from 'axios';

import {
    Link
} from "react-router-dom";


const Addgroup = () => {

    const [groupname, setGroupname] = useState("");
    const [grouphead, setGrouphead] = useState(0);
    const [divisionhead, setDivisionhead] = useState(0);
    const [to, setTo] = useState(0);
    const [oic, setOic] = useState(0);

    const addgroup = () => {

        Axios.post("http://localhost:3001/group", {
            groupname: groupname,
            grouphead: grouphead,
            divisionhead: divisionhead,
            to: to,
            oic: oic,
        }).then(() => {
            console.log("Success Group Added")
        });
    };


    return (
        <div>
            <>
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
                        <div className="topbuttons">
                            <h5>Emp Info Connections</h5>
                        </div>
                        <hr />
                    </div>
                    <div className="rightbottombox">
                        <h5>Add Group</h5>
                        <div className="box">
                            <form className="form">
                                <div className="lbl">
                                    <label >Group Name: </label>
                                    <input type="text" placeholder="ENTER GROUP NAME" onChange={(event) => {
                                        setGroupname(event.target.value);
                                    }} />
                                </div>
                                <div className="lbl">
                                    <label >Group Head ID: </label>
                                    <input type="number" onChange={(event) => {
                                        setGrouphead(event.target.value);
                                    }} />
                                </div>
                                <div className="lbl">
                                    <label >Division Head ID:</label>
                                    <input type="number" onChange={(event) => {
                                        setDivisionhead(event.target.value);
                                    }} />
                                </div>
                                <div className="lbl">
                                    <label>TO: </label>
                                    <input type="number" onChange={(event) => {
                                        setTo(event.target.value);
                                    }} />
                                </div>
                                <div className="lbl">
                                    <label >OIC: </label>
                                    <input type="number" onChange={(event) => {
                                        setOic(event.target.value);
                                    }} />
                                </div>
                            </form>
                            <button className="btn" onClick={addgroup}>Add</button>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default Addgroup
