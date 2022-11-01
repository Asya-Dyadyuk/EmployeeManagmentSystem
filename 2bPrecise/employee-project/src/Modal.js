import { Axios } from 'axios';
import { Button } from 'bootstrap'
import React from 'react'
import { useState } from 'react';
import './Modal.css';

function Modal({ closeModal }) {
    const [data, setData] = useState({
        date: "",
        task: ""
    });
    const url = "http://localhost:5000/api/tasks/Create"

    function handelChange(e) {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)

    }

    function submit(e) {
        e.preventDefult();
        Axios.post(url, {
            DueDate: data.date,
            Task: data.task,
            AssignDate: '14 / 02 / 2022',
            EmployeeID: 4,
            ID: 6
        })
            .then(res => {
                console.log(res.data)
            })
    }

    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)}>X</button>
                </div>
                <div className='body'></div>
                <form className='form' onSubmit={(e) => submit(e)}>
                    <input className='input' onChange={(e) => handelChange(e)} id="date" value={data.data} placeholder="date" type="date" />
                    <br></br>
                    <input className='input' onChange={(e) => handelChange(e)} id="textarea" value={data.textarea} placeholder="Write your task here..." type="textarea" />
                    <span className='footer'>
                        <button >Submit</button>
                        <button onClick={() => closeModal(false)}>Cancel</button>
                    </span>
                </form>

            </div>
        </div>
    )
}
export default Modal