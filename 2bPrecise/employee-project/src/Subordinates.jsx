import React from "react";
import { useLocation } from "react-router-dom";
import { ReactDOM, useState, useEffect } from 'react';
import Modal from "./Modal";


const Subordinates = props => {

    const ID = props.ID;
    const Name = props.Name;
    const LastName = props.LastName;
    const Position = props.Position;
    const [openModal, setOpenModal] = useState(false)//for the popup

    return (
        <>
            <tbody >
                <tr className='grid-container'>
                    <td >{Name} {LastName} </td>
                    <td>{Position}</td>
                    <td ><button className='assignbtn'
                        onClick={() => {
                            setOpenModal(true);
                        }}>Assign Task</button>
                    </td>
                </tr>
            </tbody>
            {openModal && <Modal closeModal={setOpenModal} />}
        </>


    )
}
export default Subordinates;