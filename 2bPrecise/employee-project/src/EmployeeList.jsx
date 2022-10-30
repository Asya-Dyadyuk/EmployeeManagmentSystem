
import React from 'react';
import { ReactDOM, useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import EmployeeInfoCard from './EmployeeInfoCard';
import './EmployeeList.css'


const EmployeeList = ({ }) => {
    const [listOfEmployees, setListOfEmployees] = React.useState([]);
    let employeeData = [];
    useEffect(() => {
        featchEmployyesInfoFromDB();
    }, [])

    employeeData = listOfEmployees.map(emp => {


        return (<EmployeeInfoCard
            key={emp.id}
            Name={emp.Name}
            LastName={emp.LastName}
            Position={emp.Position}
            ManagerName={emp.ManagerName}
            ManagerID={emp.ManagerID}
            Picture={emp.Picture}
        />)
    })



    const featchEmployyesInfoFromDB = () => {
        fetch('http://localhost:5000/api/employee',)
            .then(response => response.json())
            .then(data => {
                setListOfEmployees(data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <>
            <h1 className='header'>
                Employee List
            </h1>
            <div className='data'>{employeeData}</div>
        </>
    );

}

export default EmployeeList;