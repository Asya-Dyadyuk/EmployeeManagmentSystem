import { Button } from 'bootstrap'
import React from 'react'
import { useState } from 'react';
import './Modal.css';

function Modal({ closeModal }) {
    const [date, setDate] = useState();
    const [task, setTask] = useState("");
    console.log("Date", date);
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
                    <button onClick={() => closeModal(false)}>X</button>
                </div>
                <div className='body'></div>
                <textarea className='textarea'
                    onChange={handelChange}
                    placeholder="Write your task here..." />
                <h4 className='date'>Due Date: {date}</h4>
                <input type="date" onChange={e => setDate(e.target.value)} />
                <div className='footer'>
                    <button>Save</button>
                    <button onClick={() => closeModal(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}
export default Modal