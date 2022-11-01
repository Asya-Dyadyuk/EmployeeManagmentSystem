import { Button } from 'bootstrap'
import React from 'react'
import { useState } from 'react';
import './Modal.css';

function ModalReport({ closeModalReport }) {

    const [task, setTask] = useState("");
    function handelChange(event) {
        setTask(prevFromTask => {
            return {
                ...prevFromTask,
                // [event.target.name]: event.target.value
            }
        })
    }
    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className="titleCloseBtn">
                    <button onClick={() => closeModalReport(false)}>X</button>
                </div>
                <div className='body'></div>
                <textarea className='textarea'
                    onChange={handelChange}
                    placeholder="Write your Report here..." />
                <div className='footer'>
                    <button>Save</button>
                    <button onClick={() => closeModalReport(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}
export default ModalReport