import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListViewPage from "./pages/listview";
import ResHome from "./pages";

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<ResHome />}  />
                <Route path='/orderform' element={<ListViewPage/>} />
            </Routes>
        </Router>
    );
}

export default App;
