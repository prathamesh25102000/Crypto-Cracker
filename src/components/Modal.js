import React, { useState } from "react";
import "../App.css";

export default function Modal(props) {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };
    const x=props.h;
    const y=props.d;
    // if (modal) {
    //     document.body.classList.add('active-modal')
    // } else {
    //     document.body.classList.remove('active-modal')
    // }

    return (
        <>
            <button onClick={toggleModal} className="btn-modal1" style={{ border: "none" }}>
                {props.line}
            </button>

            {modal && (
                <div className="modal1">
                    <div className="overlay1"></div>
                    <div className="modal-content1">

                        <h5 style={{ fontWeight: "500", fontSize: "16px" }}>{props.photo}{props.name}</h5>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ display: "block" }}>
                                <text className="modal-text">PRICE</text>
                                <p className="modal-val"><i className="fa-regular fa-dollar-sign"></i>{props.price}</p>
                            </div>
                            <div style={{ display: "block" }}>
                                <text className="modal-text">24H</text>
                                <p className="modal-val" style={{color: x>0?"rgb(114, 180, 14)":"crimson"}}><i className={x>0 ?"fa-solid fa-caret-up" : "fa-solid fa-caret-down"}></i> {props.h}<i className="fa-light fa-percent"></i></p>
                            </div>
                            <div style={{ display: "block" }}>
                                <text className="modal-text">7D</text>
                                <p className="modal-val" style={{color: y>0?"rgb(114, 180, 14)":"crimson"}}><i className={y>0 ?"fa-solid fa-caret-up" : "fa-solid fa-caret-down"}></i> {props.d}<i className="fa-light fa-percent"></i></p>
                            </div>
                        </div>
                        <text className="modal-text">MARKETCAP</text>
                        <p className="modal-val"><i className="fa-regular fa-dollar-sign"></i>{props.cap}</p>
                        <text className="modal-text">VOULUME(24H)</text>
                        <p className="modal-val"><i className="fa-regular fa-dollar-sign"></i>{props.vol}</p>
                        <text className="modal-text">CIRCULATING SUPPLY</text>
                        <p className="modal-val">{props.supply} {props.code}</p>
                        <button className="close-modal1" onClick={toggleModal}>
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}