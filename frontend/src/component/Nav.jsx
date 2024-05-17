import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import "../styles/style.css";
import { Link } from 'react-router-dom';

function Nav() {
    return (

        <>
           
           <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
                
                        <li className="nav-item">
                            <Link className="nav-link f-color" to='/addQuestion'><button className='btn btn-success'>Add Question</button></Link>
                        </li>

                    </ul>
                    


                </div>
            </nav>

        </>
    )
}

export default Nav
