import React from 'react';
import "./Leftnav.css";
import Logo from "../Navbar/Logo.png";
import HomeIcon from '@material-ui/icons/Home';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

import {
    Link
} from "react-router-dom";

const Leftnav = () => {
    return (
        <div className="leftnav">
            <div className="leftcontent">
                <div className="sspl">
                    <img src={Logo} alt="Logo" />
                    <div className="sspltext">
                        <HomeIcon />
                        <h3>SSPL</h3>
                    </div>
                </div>
                <div className="leftbox">
                    <HomeIcon />
                    <Link to="/homedata"><h4>HOME</h4></Link>
                </div>
                <div className="leftbox">
                    <FormatAlignJustifyIcon />
                    <Link to="/l-drds"><h4>DRDS</h4></Link>
                </div>
                <div className="leftbox">
                    <FormatAlignJustifyIcon />
                    <Link to="/l-drtc"> <h4>DRTC</h4></Link>
                </div>
                <div className="leftbox">
                    <FormatAlignJustifyIcon />
                    <Link to="/l-aao">  <h4>Admin and Allied Officer</h4></Link>
                </div>
                <div className="leftbox">
                    <FormatAlignJustifyIcon />
                    <Link to="/l-aas">  <h4>Admin and Allied Staff</h4></Link>
                </div>
                <div className="leftbox">
                    <FormatAlignJustifyIcon />
                    <h4>Officers</h4>
                </div>
                <div className="leftbox">
                    <SupervisorAccountIcon />
                    <h4>Ex-Employees</h4>
                </div>
                <div className="leftbox">
                    <SupervisorAccountIcon />
                    <h4>Organization Flow</h4>
                </div>
            </div>
        </div>
    )
}

export default Leftnav
