
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from './component/Nav.jsx';
import Dashboard from './pages/Dashboard.jsx';
import AddQ from './pages/AddQ.jsx';

function App() {


  return (
    <>

      <Router>
        <div>
          <Nav />
         
          <Routes>
          <Route path='/' element={ <Dashboard />}></Route>
            <Route path='/addQuestion' element={<AddQ/>}></Route>
          </Routes>
         
        </div>
      </Router>

    </>
  )
}

export default App
