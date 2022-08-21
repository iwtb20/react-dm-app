import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OrderFormPage from "./pages/orderform";
import ResHome from "./pages";

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<ResHome />}  />
                <Route path='/orderform' element={<OrderFormPage/>} />
            </Routes>
        </Router>
    );
}

export default App;
