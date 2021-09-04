import React from 'react';
import "./Adddesignation.css";
import { useState } from 'react';
import Axios from 'axios';

import {
    Link
} from "react-router-dom";


const Adddesignation = () => {

    const [icno, setIcno] = useState("");
    const [designation, setDesignation] = useState("");

    const adddesignation = () => {

        Axios.post("http://localhost:3001/designation", {
            icno: icno,
            designation: designation,
        }).then(() => {
            console.log("Success Designation Added")
        });
    };

    return (
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
                    <hr />
                </div>
                <div className="rightbottombox">
                    <h5>Add Designation</h5>
                    <div className="box">
                        <div className="fr">
                            <label className="lbel" for="grpname">Enter ICNO:</label>
                            <input type="text" name="desig_name" className="inpt" placeholder="ENTER ICNO" onChange={(event) => {
                                setIcno(event.target.value);
                            }} />
                        </div>
                        <div className="fr">
                            <label className="lbel" for="grpname">Designation Name:</label>
                            <input type="text" list="dsgntn" name="desig_name" className="inpt" placeholder="ENTER DESIGNATION NAME" onChange={(event) => {
                                setDesignation(event.target.value);
                            }} />
                            <datalist id="dsgntn">
                                <option value="Sc-A" />
                                <option value="Sc-B" />
                                <option value="Sc-C" />
                                <option value="Sc-D" />
                                <option value="AO" />
                                <option value="Sr AO" />
                                <option value="AS" />
                                <option value="Sr AS" />
                            </datalist>
                        </div>
                        <button type="submit" className="bt" onClick={adddesignation}>Add</button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Adddesignation
