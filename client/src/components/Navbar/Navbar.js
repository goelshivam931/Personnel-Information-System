import React from 'react';
import "./Navbar.css";
import Logo from "./Logo.png";
import Admin from "./Admin.png";

const Navbar = () => {
    return (
        <div className="nav">
            <div className="navleft">
                <img className="image" src={Logo} alt="Logo" />
                <div className="navtext">
                    <h3>Solid State Physics Laboratory</h3>
                    <h3>Employee Information System</h3>
                    <h5>SSPL Delhi-54</h5>
                </div>
            </div>

            <div className="navright">
                <img src={Admin} alt="Admin" />
                <h6>Welcome Admin!</h6>
            </div>
        </div>
    )
}

export default Navbar
