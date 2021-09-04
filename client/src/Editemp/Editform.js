import React from 'react'
import "./Editform.css";

import {
    Link
} from "react-router-dom";


import { useState } from 'react';
import Axios from 'axios';
import Button from '@material-ui/core/Button';



const Editform = () => {

    const [icno, setIcno] = useState("");
    const [newname, setNewname] = useState("");
    const [newdesignation, setNewdesignation] = useState("");
    const [newdob, setNewdob] = useState(new Date());
    const [newdojsspl, setNewdojsspl] = useState(new Date());
    const [newdojdrdo, setNewdojdrdo] = useState(new Date());
    const [newdopr, setNewdopr] = useState(new Date());
    const [newmobile, setNewmobile] = useState("");

    const updateEmployeeName = () => {
        Axios.put("http://localhost:3001/updateEmployeeName", { newname: newname, icno: icno }).then(() => {
            console.log("Updated Name");
        }
        );
    }

    const updateEmployeeDesignation = () => {
        Axios.put("http://localhost:3001/updateEmployeeDesignation", { newdesignation: newdesignation, icno: icno }).then(() => {
            console.log("Updated Designation");
        }
        );
    }

    const updateEmployeeDob = () => {
        Axios.put("http://localhost:3001/updateEmployeeDob", { newdob: newdob, icno: icno }).then(() => {
            console.log("Updated DOB");
        }
        );
    }

    const updateEmployeeDojsspl = () => {
        Axios.put("http://localhost:3001/updateEmployeeDojsspl", { newdojsspl: newdojsspl, icno: icno }).then(() => {
            console.log("Updated DOJ_SSPL");
        }
        );
    }

    const updateEmployeeDojdrdo = () => {
        Axios.put("http://localhost:3001/updateEmployeeDojdrdo", { newdojdrdo: newdojdrdo, icno: icno }).then(() => {
            console.log("Updated DOJ_DRDO");
        }
        );
    }

    const updateEmployeeDopr = () => {
        Axios.put("http://localhost:3001/updateEmployeeDopr", { newdopr: newdopr, icno: icno }).then(() => {
            console.log("Updated DOPR");
        }
        );
    }

    const updateEmployeeMobile = () => {
        Axios.put("http://localhost:3001/updateEmployeeMobile", { newmobile: newmobile, icno: icno }).then(() => {
            console.log("Updated Mobile Number");
        }
        );
    }


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
                <h5>Edit Employee Details</h5>
                <div className="databox">
                    <div className="frm">
                        <label className="lbel" for="grpname">Enter ICNO:</label>
                        <input type="text" className="inpt" placeholder="Enter ICNO" onChange={(event) => {
                            setIcno(event.target.value);
                        }} />
                    </div>
                    <div className="frm">
                        <label className="lbel" for="grpname">Enter New Name:</label>
                        <input type="text" className="inpt" placeholder="ENTER New Name" onChange={(event) => {
                            setNewname(event.target.value);
                        }} />
                        <Button variant="contained" color="primary" onClick={updateEmployeeName}>
                            Update Employee Name
                        </Button>
                    </div>
                    <div className="frm">
                        <label className="lbel" for="grpname">Enter New Designation:</label>
                        <input list="dsgntn" className="inpt" placeholder="ENTER New Designation" onChange={(event) => {
                            setNewdesignation(event.target.value);
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
                        <Button variant="contained" color="primary" onClick={updateEmployeeDesignation}>
                            Update Employee Designation
                        </Button>
                    </div>
                    <div className="frm">
                        <label className="lbel" for="grpname">Enter New DOB:</label>
                        <input type="date" className="inpt" placeholder="Enter New DOB" onChange={(event) => {
                            setNewdob(event.target.value);
                        }} />
                        <Button variant="contained" color="primary" onClick={updateEmployeeDob}>
                            Update Employee DOB
                        </Button>
                    </div>
                    <div className="frm">
                        <label className="lbel" for="grpname">Enter New DOJ_SSPL:</label>
                        <input type="date" className="inpt" placeholder="Enter New DOJ_SSPL" onChange={(event) => {
                            setNewdojsspl(event.target.value);
                        }} />
                        <Button variant="contained" color="primary" onClick={updateEmployeeDojsspl}>
                            Update Employee DOJ_SSPL
                        </Button>
                    </div>
                    <div className="frm">
                        <label className="lbel" for="grpname">Enter New DOJ_DRDO:</label>
                        <input type="date" className="inpt" placeholder="Enter New DOJ_DRDO" onChange={(event) => {
                            setNewdojdrdo(event.target.value);
                        }} />
                        <Button variant="contained" color="primary" onClick={updateEmployeeDojdrdo}>
                            Update Employee DOJ_DRDO
                        </Button>
                    </div>
                    <div className="frm">
                        <label className="lbel" for="grpname">Enter New DOPR:</label>
                        <input type="date" className="inpt" placeholder="Enter New DOPR" onChange={(event) => {
                            setNewdopr(event.target.value);
                        }} />
                        <Button variant="contained" color="primary" onClick={updateEmployeeDopr}>
                            Update Employee DOPR
                        </Button>
                    </div>
                    <div className="frm">
                        <label className="lbel" for="grpname">Enter New Mobile No.:</label>
                        <input type="text" className="inpt" placeholder="Enter New Mobile No." onChange={(event) => {
                            setNewmobile(event.target.value);
                        }} />
                        <Button variant="contained" color="primary" onClick={updateEmployeeMobile}>
                            Update Employee Mobile Number
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Editform
