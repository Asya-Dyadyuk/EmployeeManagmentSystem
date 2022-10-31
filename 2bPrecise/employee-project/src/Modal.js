import { Button } from 'bootstrap'
import React from 'react'

function Modal() {
    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <button>X</button>
                <div className='body'></div>
                <p>The Next...</p>
                <div className='footer'>
                    <button>Save</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    )
}
export default Modal