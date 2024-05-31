import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import "../styles/Home.css"
import "../styles/style.css"


const Home = () => {
    return (
        <>
            <div className='container' style={{ "position": "absolute", "left": "158px", "top": "120px" }}>
                <div className='container py-4 py-md-5 px-4 px-md-3 text-body-secondary'>
                    <div className="row">
                        <div className='col-lg helloContent'>
                            <h1 className='d-flex my-3 f-color '>Hey there,</h1>
                            <h2 className='d-flex my-2 animated-text f-color '>Welcome to Queviz</h2>
                        </div>
                        <p className='homeP' style={{
                            "position": "absolute",
                            "width": "35rem",
                            "top": " 12rem",
                            "right": "39rem",
                            " textAlign": "left"
                        }}>Effortlessly create compelling questions with our advanced question creation system! Designed for educators, content creators, and researchers, it simplifies the process of generating thought-provoking and relevant questions. Enhance engagement and stimulate discussions with ease.</p>
                        <NavLink to="/form/signIn" role='button ' className="btn my-4 btn-primary signInBtn" >Sign In</NavLink>
                        <div className='col-lg'>
                            <img src="/HomeImg.png" className=' image' alt="error" />

                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}
export default Home