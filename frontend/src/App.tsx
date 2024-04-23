
import Login from "./pages/Authentification/Login.page";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Dashboard from "./pages/Dashboard/Dashboard.page";
import Register from "./pages/Authentification/Register.page";
import Payment from "./pages/Payment/Payment.page";
import { useState } from "react";

function App() {

  return (
    <>
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />

            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/payment/' element={<Payment />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
