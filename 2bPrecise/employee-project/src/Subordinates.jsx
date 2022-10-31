import React from "react";
import { useLocation } from "react-router-dom";
import { ReactDOM, useState, useEffect } from 'react';

const Subordinates = props => {

    const ID = props.ID;
    const Name = props.Name;
    const LastName = props.LastName;


    return (
        <div >
            <tr className='grid-container'>
                <td >{Name} </td>
                <td>{LastName}</td>
                <td ><button className='assignbtn'>Assign Task</button></td>
            </tr>
        </div>
    )
}
export default Subordinates;