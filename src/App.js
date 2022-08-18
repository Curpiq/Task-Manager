import React from 'react';
import './App.css';
import Layout from './components/Layout';
import EventsPage from './pages/EventsPage';


import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route path="/events" element={<EventsPage/>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
