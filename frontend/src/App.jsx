
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './component/Nav.jsx';
import Dashboard from './pages/Dashboard.jsx';
import AddQ from './pages/AddQ.jsx';
import Login from './pages/Login.jsx';
import SignInForm from './pages/SignInForm.jsx';
import Home from './pages/Home.jsx';

function App() {


  return (
    <>

      <Router>
        <div>
          <Nav />
         
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/form/signIn" element={<SignInForm/>} />
          <Route path="/form/logIn" element={<Login/>} />
          <Route path='/dashboard' element={ <Dashboard />}></Route>
          <Route path='/addQuestion' element={<AddQ/>}></Route>
          </Routes>
         
        </div>
      </Router>

    </>
  )
}

export default App
