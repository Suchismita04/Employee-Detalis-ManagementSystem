export default function validetion( formData ) {
    const errors = {}

    const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passord_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (formData.fullName === "") {
        errors.fullName = "Name is required";
    }
    if (formData.email === "") {
        errors.email = "email is required";
    }
    else if (!email_pattern.test(formData.email))
    {
        errors.email = "Email did'nt match";
    }
  
    if (formData.password === '') {
        errors.password = "Password is required";
    }
    else if(!passord_pattern.test(formData.password))
    {
        errors.password="Email did'nt match"
    }

    return errors
}