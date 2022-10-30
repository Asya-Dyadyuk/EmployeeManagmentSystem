import React from "react";
import { useLocation } from "react-router-dom";
import { ReactDOM, useState, useEffect } from 'react';
import './EmployeeDetails.css'

const EmployeeDetails = () => {
    const location = useLocation();
    const idSelected = location.state.ID;
    const NameSelected = location.state.Name;
    const LastNameSelected = location.state.LastName;
    const PositionSelected = location.state.Position;
    const ManagerNameSelected = location.state.ManagerName;
    const ManagerIDSelected = location.state.ManagerID;
    const PictureSelected = location.state.Picture;

    // const ID = props.ID;
    // const Name = props.Name;
    // const LastName = props.LastName;
    // const Position = props.Position;
    // const Manager = props.Manager;
    const [listOfTasks, setListOfTasks] = React.useState([]);
    useEffect(() => {
        featchTasksFromDB();
    }, [])


    const featchTasksFromDB = () => {
        fetch('http://localhost:5000/api/tasks')
            .then(response => response.json())
            .then(data => {
                setListOfTasks(data);
            })
            .catch(error => {
                console.log(error);
            });
    };



    return (

        <div className='section'>
            <div className='details'>

                <img src={PictureSelected} height="200" width="200" />
                <div className='txtinfo'>
                    <span>Name:
                        <span className="info">{NameSelected} {LastNameSelected}</span>
                    </span>
                    <p>Position:
                        <span className="info">{PositionSelected}</span>
                    </p>
                    <hr />
                    <span>Manager:
                        <spam className="info">
                            {ManagerNameSelected}
                        </spam >
                        <button className='reportbtn'>Report</button></span>

                </div>

            </div>
            <p className='subheader'>My tasks:</p>
            <div className='rectangle'>
                {/* <span className='content'>{Task} <span className='duedate'>{DueDate}</span></span> */}
                <table>
                    <tbody>
                        <tr>
                            <td >{Task}</td>
                            <td >{DueDtae}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className='subheader'>My subordinates:</p>
            <div className='rectangle'>
                <table className='content'>
                    <tbody>
                        <tr>
                            <td >FirstName</td>
                            <td>Last</td>
                            <td><button className='assignbtn'>Assign Task</button></td>
                        </tr>
                    </tbody>

                </table>
            </div>



        </div>

    );


}

export default EmployeeDetails;