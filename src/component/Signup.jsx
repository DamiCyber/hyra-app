import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"
import "../assets/style/signup.css"
const Signup = () => {
  const [passwordError, setPasswordError] = useState("")
  const validationSchema = yup.object({
    name: yup.string().required("Required").max(16).min(3),
    username: yup.string().required("Required").max(10).min(3),
    email: yup.string().email("Valid email address").required("Required"),
    password: yup.string().matches(/^[a-zA-z0-9]{8}$/, "Enter a password with letter and number ").required("Required").max(8),
    confirmpassword: yup.string().matches(/^[a-zA-z0-9]{8}$/, "Password must match ").required("Required"),
  })
  let naviagte = useNavigate()
  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);

      if (values.password !== values.confirmpassword) {
        setPasswordError("Password not match")

      } else {
        setPasswordError("")
        naviagte('/login')
      }
    }
  })
  return (
    <div>
      <div className="flex">
        <form class="form card" onSubmit={handleSubmit}>
          <div class="card_header">
            <h3 class="form_heading">Create Account</h3>
          </div>
          <div class="field">
            <div className='err'>{errors.name}</div>
            <label for="firstname">Name</label>
            <input class="input" onChange={handleChange} name="name" type="text" value={values.name} id="username" />
          </div>
          <div class="field">
            <div className='err'>{errors.username}</div>
            <label for="lastname">Username</label>
            <input class="input" onChange={handleChange} name="username" type="text" value={values.username} id="username" />
          </div>
          <div class="field">
            <div className='err'>{errors.email}</div>
            <label for="email">Email / Phone Number</label>
            <input class="input" onChange={handleChange} name="email" type="text" value={values.email} id="email" />
          </div>
          <div class="field">
            <div className='err'>{errors.password}</div>
            <label for="password">Password</label>
            <input class="input" onChange={handleChange} name="password" value={values.password} type="password" id="password" />
          </div>
          <div class="field">
            <div className='err'>{errors.confirmpassword}</div>
            <label for="password">Confirm password</label>
            <input class="input" onChange={handleChange} name="confirmpassword" value={values.confirmpassword} type="password" id="confirmpassword" />
            {passwordError && <span className='spa'>{passwordError}</span>}
          </div>
          <button type='submit' className='btns'>Sign Up</button>
          <button  className='btnss'>continue with Google</button>
        </form>
        <div className="image">
          <img src="https://res.cloudinary.com/dhoqtwst9/image/upload/v1707921291/image_249_yzkyni.png" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Signup