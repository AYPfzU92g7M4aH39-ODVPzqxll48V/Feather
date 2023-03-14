import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
// import feather from './images/feather.jpeg'
import Public from "./Dashboards/Publicdashboard/public";

import HeaderBar from "./Navigation/Components/HeaderBar";
import Track from "./Track/Pages/Track";
import CustomerDashboard from "./Dashboards/Customer/Pages/CustomerDashboard";
import AdminDashboard from "./Dashboards/Admin/Pages/AdminDashboard";
import RateAndShip from "./Dashboards/Rateship/Rateship";

function App() {
  return (
    <div className="app">
        
        {/* <div className="container-div"> <img src={feather} /> </div> */}
        <Router>
            <HeaderBar />
            <main>
                <Routes>
                    <Route exact path="/" element={<Public />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/reset" element={<Reset />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/dashboard" element={<Dashboard />} />
                    <Route exact path="/track" element={<Track />} />
                    <Route exact path="/dahsboard/customer" element={<CustomerDashboard />} />
                    <Route exact path="/dahsboard/admin" element={<AdminDashboard />} />
                    <Route exact path="/Dashboards/Publicdashboard/public" element={<Public />} />
                    <Route exact path="/Dashboards/Rateship/Rateship" element={<RateAndShip />} />

                </Routes>
            </main>
        </Router>
    </div>
  );
}

export default App;
