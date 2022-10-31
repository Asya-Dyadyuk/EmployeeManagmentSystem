import React from 'react';
import { ReactDOM, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './TaskDetails.css'


const TaskDetails = props => {

    const ID = props.ID;
    const EmployeeID = props.EmployeeID;
    const AssignData = props.AssignData;
    const DueDate = props.DueDate;
    const Task = props.Task;

    return (
        <tbody>
            <tr className='grid-container-tasks'>
                <td className='content' >{Task}</td>
                <td className='duedate'>{DueDate}</td>
            </tr>
        </tbody>

    )
}
export default TaskDetails;
