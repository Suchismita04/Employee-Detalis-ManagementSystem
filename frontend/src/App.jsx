import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from './pages/Login.jsx';

function App() {
 

  return (
    <>

<Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/form/signIn" element={<SignInForm  />} />
          <Route path="/form/logIn" element={<LogIn/>} />
        </Routes>
        {/* <Footer/> */}
      </div>
    </Router>
   
    </>
  )
}

export default App
