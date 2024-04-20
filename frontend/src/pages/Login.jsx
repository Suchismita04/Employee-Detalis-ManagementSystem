import React from 'react'

function Login() {
    const [logInFormData, setlogInFormData] = useState({
        email : '',
        password : ''
})
   
    const handleSubmit = async (event) => {
        event.preventDefult()
        try {
            const responce = await axios.post('/api/v1/users/logIn', logInFormData)
            if (responce.status === 200) {
                setlogInFormData(responce.data.message)
            }
            else {
                setlogInFormData(responce.data.message)
            }
        } catch (error) {
            console.log("Error during logIn", error)
        }
    }
    const handleButtonClick = () => {
        handleSubmit()
    }
    const handleChange = (event) => {
        return setlogInFormData({ ...logInFormData, [event.target.name]: event.target.value })
    }
  return (

    <>
     <div >
                <form action="/api/v1/users/logIn" method="post" className='container border border-success-subtle rounded mx-2 my-3'>
                  
                    <div className="input-group flex-nowrap my-3 ">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="text" onChange={handleChange} className="form-control" name='userName' value={logInFormData.email} placeholder="email" aria-label="email" aria-describedby="addon-wrapping" />
                    </div>
                    <div className="input-group flex-nowrap my-3 ">
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input type="password" onChange={handleChange} className="form-control " name='password' value={logInFormData.password} placeholder="password" aria-label="password" aria-describedby="addon-wrapping" />
                    </div>
                    <button onClick={handleButtonClick} className="btn btn-primary my-3 rounded" type="submit" >LogIn</button>
                </form>
            </div>
    
    </>
  )
}

export default Login
