export default function validateLogin(values) {
    let errors = {}

    if(!values.email){
        errors.email = "Email address is required"
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Invalid email address!"
    }

    if(!values.password){
        errors.password = "Password is required"
    }else if(values.password.length < 10){
        errors.password = "Password must not be less than 10 characters long"
    }

    return errors;
}
