import React from "react";
import { useLocation } from "react-router-dom";
import { ReactDOM, useState, useEffect } from 'react';


const Subordinates = props => {

    const ID = props.ID;
    const Name = props.Name;
    const LastName = props.LastName;
    const Position = props.Position;


    return (
        <tbody >
            <tr className='grid-container'>
                <td >{Name} {LastName} </td>
                <td>{Position}</td>
                <td ><button className='assignbtn'>Assign Task</button></td>
            </tr>
        </tbody>

    )
}
export default Subordinates;