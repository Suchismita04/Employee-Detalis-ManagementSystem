import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import "../styles/style.css";
import "../styles/Nav.css"
import { Link } from 'react-router-dom';

function Nav() {
    return (

        <>
           
           <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
                
                        <li className="nav-item">
                            <img src="/logo.png" className='logo' alt="error" />
                           <h4 className='logoName'>Queviz</h4>
                        </li>

                    </ul>
                    


                </div>
            </nav>

        </>
    )
}

export default Nav
