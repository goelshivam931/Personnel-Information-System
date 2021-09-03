import React from 'react'
import "./Showdata.css";
// import SearchField from "react-search-field";
import { useState } from "react";
import Axios from "axios";

import {
    Link
} from "react-router-dom";

const Showdata = () => {

    const [employeeList, setEmployeeList] = useState([]);

    Axios.get("http://localhost:3001/getemployees").then((response) => {
        setEmployeeList(response.data);
    }).catch(e => {
        console.log(e);
    });

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
                <div className="topbuttons">
                    <h5>Emp Info Connections</h5>
                </div>
                <hr />
            </div>
            <div className="rightbottombox">
                <h5>Generate Report</h5>
                <div className="databox">
                    {/* <div className="searchrow">
                        <SearchField classNames="search" />
                    </div> */}
                    <div className="data-table">
                        <div className="grid-container bclr">
                            <div className="griditem">SNO</div>
                            <div className="griditem">ICNO</div>
                            <div className="griditem">NAME</div>
                            <div className="griditem">Designation</div>
                            <div className="griditem">DOB</div>
                            <div className="griditem">DOJ_SSPL</div>
                            <div className="griditem">DOJ_DRDO</div>
                            <div className="griditem">DOPR</div>
                            <div className="griditem">Mobile No.</div>
                        </div>

                        {
                            employeeList.map((val, key) => {
                                return (
                                    <div className="grid-container">
                                        <div className="griditem">{val.id_employee}</div>
                                        <div className="griditem">{val.icno}</div>
                                        <div className="griditem">{val.f_name + " " + val.m_name + " " + val.l_name}</div>
                                        <div className="griditem">{val.designation}</div>
                                        <div className="griditem">{new Date(val.DOB).toDateString()}</div>
                                        <div className="griditem">{new Date(val.DOJSSPL).toDateString()}</div>
                                        <div className="griditem">{new Date(val.DOJDRDO).toDateString()}</div>
                                        <div className="griditem">{new Date(val.DPR).toDateString()}</div>
                                        <div className="griditem">{val.mobile_no}</div>
                                    </div>
                                );
                            })}

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Showdata


