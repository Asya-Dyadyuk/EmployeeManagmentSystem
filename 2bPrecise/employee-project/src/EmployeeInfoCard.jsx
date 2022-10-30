import React from 'react';
import { ReactDOM, useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"
import './EmployeeInfoCard.css'


const EmployeeInfoCard = props => {
    const navigate = useNavigate();
    const ID = props.ID;
    const Name = props.Name;
    const LastName = props.LastName;
    const Position = props.Position;
    const ManagerName = props.ManagerName;
    const ManagerID =props.ManagerID;
    const Picture = props.Picture;

 
    const onClickHandle = (e, idClick) => {
        
        // navigate viewEmployee
        navigate("/viewEmployee", {
            state: { ID: idClick, Name:Name, LastName:LastName, Position:Position,
                 ManagerName:ManagerName, ManagerID:ManagerID, Picture:Picture}
        })

    }

    return (
        <table>
            <tbody>
            <tr>
                <td className='tdname'>{Name}</td>
                <td className='tdlast'>{LastName}</td>
                <td className='tdposition'>{Position}</td>
                <td className='tdbutton'><button className='viewemployeebtn' onClick={e => onClickHandle(e, ID)}>View</button></td>
            </tr>
            </tbody>
        </table>


    );

}

export default EmployeeInfoCard;