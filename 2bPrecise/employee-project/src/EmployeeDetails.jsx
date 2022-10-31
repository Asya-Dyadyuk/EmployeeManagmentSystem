import React from "react";
import { useLocation } from "react-router-dom";
import { ReactDOM, useState, useEffect } from 'react';
import './EmployeeDetails.css'
import TaskDetails from './TaskDetails'
import Subordinates from './Subordinates'
import Modal from './Modal'

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
    let tasksData = [];
    const [listOfSubordinates, setListOfSubordinates] = React.useState([]);
    let subordinatesData = [];
    const [openModal, setOpenModal] = useState(false)//for the popup
    useEffect(() => {
        featchDataFromDB();
        featchSubordinatesFromDB();
    }, [])


    tasksData = listOfTasks.map(t => {

        return (<TaskDetails
            key={t.ID}
            EmployeeID={t.EmployeeID}
            AssignData={t.AssignData}
            DueDate={t.DueDate}
            Task={t.Task}
        />)
    })

    subordinatesData = listOfSubordinates.map(sub => {

        return (<Subordinates
            key={sub.ID}
            Name={sub.Name}
            LastName={sub.LastName}
            Position={sub.Position}

        />)
    })

    const featchDataFromDB = () => {
        fetch('http://localhost:5000/api/tasks')
            .then(response => response.json())
            .then(data => {
                setListOfTasks(data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const featchSubordinatesFromDB = () => {
        fetch('http://localhost:5000/api/employee')
            .then(response => response.json())
            .then(data => {
                setListOfSubordinates(data);
            })
            .catch(error => {
                console.log(error);
            });
    }

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
                        <span className="info">
                            {ManagerNameSelected}
                        </span>
                        <button className='reportbtn'
                            onClick={() => {
                                setOpenModal(true);
                            }}>Report</button>
                            {openModal && <Modal closeModal={setOpenModal} />}
                    </span>

                </div>

            </div>
            <p className='subheader'>My tasks:</p>
            <div className='rectangle'>
                <table className='content'>
                    {tasksData}
                </table>
            </div>


            <p className='subheader'>My subordinates:</p>
            <div className='rectangle'>
                <table className='content'>
                    {subordinatesData}
                </table>
            </div>


        </div>

    );


}

export default EmployeeDetails;