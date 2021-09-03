import React from 'react';
import "./Form.css";
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import Axios from 'axios';

import {
    Link
} from "react-router-dom";


const Form = () => {

    const [icno, setIcno] = useState("");
    const [fname, setFname] = useState("");
    const [mname, setMname] = useState("");
    const [lname, setLname] = useState("");
    const [designation, setDesignation] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState(new Date());
    const [dojsspl, setDojsspl] = useState(new Date());
    const [dojdrdo, setDojdrdo] = useState(new Date());
    const [dojdpr, setDojdpr] = useState(new Date());
    const [inum, setInum] = useState("");
    const [mnum, setMnum] = useState("");
    const [pma, setPma] = useState("");
    const [cadre, setCadre] = useState("");
    const [pop, setPop] = useState("");
    const [pra, setPra] = useState("");
    const [imail, setImail] = useState("");
    const [smail, setSmail] = useState("");
    const [groupdivision, setGroupdivision] = useState("");
    const [groupofficer, setGroupofficer] = useState("");
    const [divisionofficer, setDivisionofficer] = useState("");
    const [techdirector, setTechdirector] = useState("");
    const [image, setImage] = useState("");
    const [remarks, setRemarks] = useState("");

    const addemployee = () => {

        Axios.post("http://localhost:3001/employee", {

            icno: icno,
            fname: fname,
            mname: mname,
            lname: lname,
            designation: designation,
            gender: gender,
            dob: dob,
            dojsspl: dojsspl,
            dojdrdo: dojdrdo,
            dojdpr: dojdpr,
            inum: inum,
            mnum: mnum,
            pma: pma,
            cadre: cadre,
            pop: pop,
            pra: pra,
            imail: imail,
            smail: smail,
            groupdivision: groupdivision,
            groupofficer: groupofficer,
            divisionofficer: divisionofficer,
            techdirector: techdirector,
            image: image,
            remarks: remarks,

        }).then(() => {
            console.log("Success Employee Added")
        }).catch(e => {
            console.log(e);
        });
    };

    const uploadImage = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setImage(base64);
    };

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
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
                <div className="topbuttons">
                    <h5>Emp Info Connections</h5>
                </div>
                <hr />
            </div>
            <div className="rightbottombox">
                <h5>Add New Employee</h5>
                <div className="formbox">
                    <form>
                        <div className="grid">
                            <div class="grid-item">
                                <label for="ICNO">Enter ICNO </label>
                                <input type="text" id="icno" name="icno" onChange={(event) => {
                                    setIcno(event.target.value);
                                }} />
                            </div>
                            <div class="grid-item">
                            </div>
                            <div class="grid-item">
                            </div>
                            <div class="grid-item">
                                <label for="ICNO">Enter First Name </label>
                                <input type="text" id="fname" name="fname" placeholder="ENTER FIRST NAME" onChange={(event) => {
                                    setFname(event.target.value);
                                }} />
                            </div>
                            <div class="grid-item">
                                <label for="ICNO">Enter Middle Name </label>
                                <input type="text" id="mname" name="mname" placeholder="ENTER MIDDLE NAME" onChange={(event) => {
                                    setMname(event.target.value);
                                }} />
                            </div>
                            <div class="grid-item">
                                <label for="ICNO">Enter Last Name </label>
                                <input type="text" id="lname" name="lname" placeholder="ENTER LAST NAME" onChange={(event) => {
                                    setLname(event.target.value);
                                }} />
                            </div>
                            <div class="grid-item">
                                <label for="ICNO">Designation </label>
                                <input list="dsgntn" name="td" placeholder="-Select-" onChange={(event) => {
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
                            <div class="grid-item">
                                <label for="gender">Gender </label>
                                <input list="gen" name="td" placeholder="-Select-" onChange={(event) => {
                                    setGender(event.target.value);
                                }} />
                                <datalist id="gen">
                                    <option value="Male" />
                                    <option value="Female" />
                                    <option value="Others" />
                                </datalist>
                            </div>
                            <div class="grid-item">
                                <label for="dob">Date of Birth </label>
                                <input type="date" id="dob" name="dob" onChange={(event) => {
                                    setDob(event.target.value);
                                }} />
                            </div>
                            <div class="grid-item">
                                <label for="dojs">Date of Joining(SSPL) </label>
                                <input type="date" id="dojs" name="dojs" onChange={(event) => {
                                    setDojsspl(event.target.value);
                                }} />
                            </div>
                            <div class="grid-item">
                                <label for="dojr">Date of Joining(DRDO) </label>
                                <input type="date" id="dojdr" name="dojdr" onChange={(event) => {
                                    setDojdrdo(event.target.value);
                                }} />
                            </div>
                            <div class="grid-item">
                                <label for="dpr">Date of Present Rank </label>
                                <input type="date" id="dpr" name="dpr" onChange={(event) => {
                                    setDojdpr(event.target.value);
                                }} />
                            </div>
                            <div class="grid-item">
                                <label for="ino">Internal Number </label>
                                <input type="number" id="ino" name="ino" placeholder="Enter Internal Number" onChange={(event) => {
                                    setInum(event.target.value);
                                }} />
                            </div>
                            <div class="grid-item">
                                <label for="mno">Mobile Number </label>
                                <input type="number" id="mno" name="mno" placeholder="Enter Mobile Number" onChange={(event) => {
                                    setMnum(event.target.value);
                                }} />
                            </div>
                            <div class="grid-item">
                                <label for="pad">Permanent Address</label>
                                <textarea rows="2" cols="30" id="pad" name="pad" placeholder="Enter Address" onChange={(event) => {
                                    setPma(event.target.value);
                                }}></textarea>
                            </div>
                            <div class="grid-item">
                                <label for="cadre">Cadre </label>
                                <input list="cadre" name="td" placeholder="-Select-" onChange={(event) => {
                                    setCadre(event.target.value);
                                }} />
                                <datalist id="cadre">
                                    <option value="DRDS" />
                                    <option value="DRTC" />
                                    <option value="Admin and Allied Officer" />
                                    <option value="Admin and Allied Staff" />
                                    <option value="Others" />
                                </datalist>
                            </div>
                            <div class="grid-item">
                                <label for="pop">Place of Posting </label>
                                <input type="text" id="icno" name="icno" onChange={(event) => {
                                    setPop(event.target.value);
                                }} />
                            </div>
                            <div class="grid-item">
                                <label for="prd">
                                    Present Address
                                </label>
                                <textarea rows="2" cols="30" id="prd" name="prd" placeholder="Enter Address" onChange={(event) => {
                                    setPra(event.target.value);
                                }}></textarea>
                            </div>
                            <div class="grid-item">
                                <label for="imd">Internet Mail-ID </label>
                                <input type="email" id="imd" name="imd" placeholder="Enter Internet Mail-ID" onChange={(event) => {
                                    setImail(event.target.value);
                                }} />
                            </div>
                            <div class="grid-item">
                                <label for="smd">SSPL Mail-ID </label>
                                <input type="email" id="smd" name="smd" placeholder="Enter SSPL Mail-ID" onChange={(event) => {
                                    setSmail(event.target.value);
                                }} />
                            </div>
                            <div class="grid-item">
                                <label for="ICNO">Group Division </label>
                                <input list="gd" name="gd" placeholder="-Select-" onChange={(event) => {
                                    setGroupdivision(event.target.value);
                                }} />
                                <datalist id="gd">
                                    <option value="Internet Explorer" />
                                    <option value="Firefox" />
                                    <option value="Chrome" />
                                    <option value="Opera" />
                                    <option value="Safari" />
                                </datalist>
                            </div>
                            <div class="grid-item">
                                <label for="go">Group Officer </label>
                                <input list="go" name="go" placeholder="-Select-" onChange={(event) => {
                                    setGroupofficer(event.target.value);
                                }} />
                                <datalist id="go">
                                    <option value="Internet Explorer" />
                                    <option value="Firefox" />
                                    <option value="Chrome" />
                                    <option value="Opera" />
                                    <option value="Safari" />
                                </datalist>
                            </div>
                            <div class="grid-item">
                                <label for="do">Division Officer </label>
                                <input list="do" name="do" placeholder="-Select-" onChange={(event) => {
                                    setDivisionofficer(event.target.value);
                                }} />
                                <datalist id="do">
                                    <option value="Internet Explorer" />
                                    <option value="Firefox" />
                                    <option value="Chrome" />
                                    <option value="Opera" />
                                    <option value="Safari" />
                                </datalist>
                            </div>
                            <div class="grid-item">
                                <label for="td">Technical Director </label>
                                <input list="browsers" name="td" placeholder="-Select-" onChange={(event) => {
                                    setTechdirector(event.target.value);
                                }} />
                                <datalist id="browsers">
                                    <option value="Internet Explorer" />
                                    <option value="Firefox" />
                                    <option value="Chrome" />
                                    <option value="Opera" />
                                    <option value="Safari" />
                                </datalist>
                            </div>
                            <div class="grid-item">
                                <label for="image">Image </label>
                                <input type="file" onChange={(e) => {
                                    uploadImage(e);
                                }} />
                            </div>
                            <div class="grid-item">
                                <img src={image} alt="Profile Pic" />
                            </div>
                            <div class="grid-item">
                                <label for="rem">Remarks </label>
                                <textarea name="rem" rows="2" cols="30" placeholder="Enter Remarks" onChange={(event) => {
                                    setRemarks(event.target.value);
                                }}></textarea>
                            </div>
                            <div class="grid-item btn">
                                <Button variant="contained" color="primary" onClick={addemployee}>
                                    Save
                                </Button>
                            </div>
                            <div class="grid-item">
                            </div>
                            <div class="grid-item">
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div >
    )
}

export default Form;
