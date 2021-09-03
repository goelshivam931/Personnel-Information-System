import React from 'react'
import "./Aasemp.css"
import { useState } from "react";
import Axios from "axios";
import VisibilityIcon from '@material-ui/icons/Visibility';
import Modal from "../Modal/Modal";

const Aasemp = () => {

    const [employeeList, setEmployeeList] = useState([]);

    Axios.get("http://localhost:3001/getemployees").then((response) => {
        setEmployeeList(response.data);
    }).catch(e => {
        console.log(e);
    });


    const [openModal, setOpenModal] = useState(false);
    const [k, setK] = useState(-1);


    return (
        <div className="rightspace">
            <div className="grid-box bcl">
                <div className="grid_item">SNO</div>
                <div className="grid_item">ICNO</div>
                <div className="grid_item">NAME</div>
                <div className="grid_item">Designation</div>
                <div className="grid_item">Cadre</div>
                <div className="grid_item">View</div>
            </div>
            {
                employeeList.map((val, key) => {

                    if (val.cadre === "Admin and Allied Staff") {

                        return (
                            < div className="grid-box" >
                                <div className="grid_item">{val.id_employee}</div>
                                <div className="grid_item">{val.icno}</div>
                                <div className="grid_item">{val.f_name + " " + val.m_name + " " + val.l_name}</div>
                                <div className="grid_item">{val.designation}</div>
                                <div className="grid_item">{val.cadre}</div>
                                <div className="grid_item"><VisibilityIcon className="icn" onClick={() => {
                                    setOpenModal(true);
                                    setK(key);
                                }} /></div>

                                {openModal && (k === key) && <Modal closeModal={setOpenModal} icno={val.icno} name={val.f_name + " " + val.m_name + " " + val.l_name} designation={val.designation} internal={val.internal_no} img={val.profile_image} group={val.group_division} dob={val.DOB} dojdrdo={val.DOJDRDO} dojsspl={val.DOJSSPL} dopr={val.DPR} imail={val.internet_mail} smail={val.sspl_mail} address={val.present_add} remarks={val.remarks} />}
                            </div>

                        );
                    }
                    else {
                        return null;
                    }
                })

            }
        </div >
    )
}

export default Aasemp
