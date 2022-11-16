import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import DisplayEntries from "./displayEntries";
import PersonalRecords from "./personalRecords";


const NavigationBar = ({ entryList }) => {
    return (
        <BrowserRouter>
            <div style={{ margin: '10px' }}>
                <NavLink to="/displayEntries" style={({ isActive }) => ({ 
                    color: isActive ? 'greenyellow' : 'white' })}>
                    Home
                </NavLink>
            </div>
            <div style={{ margin: '10px' }}>
                <NavLink to="/personalRecords" style={({ isActive }) => ({ 
                    color: isActive ? 'greenyellow' : 'white' })}>
                    Personal Records
                </NavLink>
            </div>
            <Routes>
                <Route exact path="/displayEntries" element={<DisplayEntries/>} />
                <Route exact path="/personalRecords" element={<PersonalRecords entryList={ entryList }/>} />
            </Routes>
        </BrowserRouter>
    )
};
export default NavigationBar;