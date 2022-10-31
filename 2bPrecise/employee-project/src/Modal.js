import { Button } from 'bootstrap'
import React from 'react'
import { useState } from 'react';
import './Modal.css';

function Modal({ closeModal }) {

    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)}>X</button>
                </div>
                <div className='body'></div>
                <p>The Next...</p>
                <div className='footer'>
                    <button>Save</button>
                    <button onClick={() => closeModal(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}
export default Modal