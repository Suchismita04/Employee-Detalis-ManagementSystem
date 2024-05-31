
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';
import validetion from '../styles/validetion';


const SignInForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    });
    const [successMessage, setSuccessMessage] = useState("")
    const [showErrors, setShowErrors] = useState(false);
    const[errors,setErrors]=useState({});
    const api = axios.create({
        baseURL: '/api', // Check this URL
        withCredentials: true,
    });

    const navigate=useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post('/api/v1/users/signIn', formData);
            const newError=validateForm(formData);


            if (Object.keys(newError).length===0) {
                if (response.status === 201) {
                    // Handle successful sign-in
                    setSuccessMessage('Sign-in successful');
                    navigate('/dashboard')
                } else {
                    // Handle sign-in failure
                    console.error(`Sign-in failed: ${response.data.message}`);
                }
            }
            else{
                setErrors(newError)
                setShowErrors(true);
            }
        } catch (error) {
            console.error('Error during sign-in:', error);
        }
    };

    const handleValidetion=(event)=>{
        e.preventDefault();
       setErrors( validetion(formData))
    }
    const handleButtonClick = () => {
        handleSubmit()
        if (successMessage) {
            onClose();
          }
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <>
            <div >
                <form action='/api/v1/users/signIn' method="post" className='container needs-validation border border-success-subtle rounded mx-2 my-7' onSubmit={handleValidetion}>
                      <img src="/signIn-dp.jpg" alt="dp" />
                    <div className="input-group flex-nowrap my-3 ">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="text" onChange={handleChange} name="fullName"
                            value={formData.fullName} className="form-control" placeholder="Full Name" aria-label="fullName" aria-describedby="addon-wrapping" />
                            {errors.fullName && <p style={{"color":"red"}}>{errors.fullName}</p>}
                    </div>
                    <div className="input-group flex-nowrap my-3 ">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="text" className="form-control " onChange={handleChange} name="email"
                            value={formData.email} placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" />
                            {errors.email && <p style={{"color":"red"}}>{errors.email}</p>}
                    </div>
                    <div className="input-group flex-nowrap my-3 ">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="password" className="form-control " placeholder="password" onChange={handleChange} name="password"
                            value={formData.password} aria-label="password" aria-describedby="addon-wrapping" />
                             {errors.password && <p style={{"color":"red"}}>{errors.password}</p>}
                    </div>
                    <button className="btn btn-primary my-3 rounded" type="submit" value="Sign In" onClick={handleButtonClick}>Sign In</button>
                    {/* {successMessage && (
                        <div className="alert alert-success" role="alert">
                            {successMessage}
                        </div>
                        
                    )} */}
                    {console.log(successMessage)}
                    <p className='secondary-text-emphasis f-color'>Do you have an account? <Link to="/form/login" className='primary text-decoration-underline f-color'>login</Link></p>
                </form>
                {/* {showErrors && (
        <div>
          {error.username && <p>{error.username}</p>}
          {error.email && <p>{error.email}</p>}
          {error.password && <p>{error.password}</p>}
          {error.confirmPassword && <p>{error.confirmPassword}</p>}
        </div>
      )} */}
            </div>

        </>
    );
};

export default SignInForm;