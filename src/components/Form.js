import React, { useState } from 'react'
import useForm from '../customHooks/useForm'
import validateLogin from './validateLogin'

const Form = () => {
 const {values, handleChange, handleSubmit, error} = useForm(submit, validateLogin)

 function submit(){
   console.log("Submitted")
   console.log("Email:", values.email)
   console.log("Password:", values.password)
 }
 

    return (
        <div>
          <form noValidate onSubmit={handleSubmit} >
            <div>
              <label>Email</label>    
              <div>
                <input type="email" name="email" value={values.email} onChange={handleChange} />
                {error.email && <p style={{color: 'red'}}>{error.email}</p>}
              </div>
            </div>
            <div>
              <label>Password</label> 
              <div>
                <input type="password" name="password" password={values.password} onChange={handleChange} />
                {error.password && <p style={{color: 'red'}}>{error.password}</p>}
              </div>   
            </div>
            <button type="submit">Submit</button>
          </form>  
        </div>
    )
}

export default Form
