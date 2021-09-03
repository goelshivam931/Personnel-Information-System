import React from 'react'
import "./Modal.css";
import CloseIcon from '@material-ui/icons/Close';

const Modal = (props) => {

    return (
        <div className="modal-background">
            <div className="modal-container">
                <div className="other-details-full drksltgry">
                    Employee Details
                    <CloseIcon className="m-l" onClick={() => {
                        props.closeModal(false)
                    }} />
                </div>
                <div className="main-details">
                    <div className="details">
                        <div className="detail-1">
                            <b>ICNO:</b>
                            <b>Name:</b>
                            <b>Designation:</b>
                            <b>Int. No.:</b>
                            <b>Posted at:</b>
                        </div>
                        <div className="detail-2">
                            <b>{props.icno}</b>
                            <b>{props.name}</b>
                            <b>{props.designation}</b>
                            <b>{props.internal}</b>
                            <b>SSPL</b>
                        </div>
                    </div>
                    <div className="pic">
                        <img src={props.img} className="prfl" alt='' />
                    </div>
                </div>
                <div className="other-details-full">
                    <b>Group:</b>
                    <b className="bluclr">{props.group}</b>
                </div>
                <div className="half-details">
                    <div className="other-details-half">
                        <b>DOB:</b>
                        <b className="bluclr"> {new Date(props.dob).toDateString()}</b>
                    </div>
                    <div className="other-details-half">
                        <b>DOJ (DRDO):</b>
                        <b className="bluclr">{new Date(props.dojdrdo).toDateString()}</b>
                    </div>
                </div>
                <div className="half-details">
                    <div className="other-details-half">
                        <b>DOJ (SSPL):</b>
                        <b className="bluclr">{new Date(props.dojsspl).toDateString()}</b>
                    </div>
                    <div className="other-details-half">
                        <b>Date Of Present Rank:</b>
                        <b className="bluclr">{new Date(props.dopr).toDateString()}</b>
                    </div>
                </div>
                <div className="half-details">
                    <div className="other-details-half">
                        <b>Internt Mail-ID:</b>
                        <b className="bluclr">{props.imail}</b>
                    </div>
                    <div className="other-details-half">
                        <b>Work Mail-ID: </b>
                        <b className="bluclr">{props.smail}</b>
                    </div>
                </div>
                <div className="other-details-full">
                    <b>Local Address: </b>
                    <b className="bluclr">{props.address}</b>
                </div>
                <div className="other-details-full">
                    <b>Remarks:</b>
                    <b className="bluclr">{props.remarks}</b>
                </div>
            </div>
        </div >
    )
}

export default Modal
