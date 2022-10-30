import './App.css';
import EmployeeList from './EmployeeList'
import EmployeeDetails from './EmployeeDetails'
import { Route, Routes } from "react-router-dom"
import Layout from './Layout';
import React from 'react';
import ReactDom from "react-dom/client"
import { HashRouter as Router } from "react-router-dom";


const App = () => {

  return (
    // <Layout>
    <Router>
      <Routes>
        <Route path="/" element={<EmployeeList/>} />

        <Route path="/viewEmployee" element={<EmployeeDetails/>} />

       
      </Routes>
    </Router>
    // </Layout>
  );


}

export default App;
