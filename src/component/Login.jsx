import React, { useState } from 'react'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from "yup"
import "../assets/style/login.css"
const Login = () => {
  const validationSchema = yup.object({
    username: yup.string().required("Required").max(10).min(3),
    password: yup.string().matches(/^[a-zA-z0-9]{8}$/, "Enter a password with letter and number ").required("Required").max(8).min(8),
  })
  let naviagte = useNavigate()
  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      Swal.fire({
        title: "Hyra",
        text: "Log In sucessful!",
        icon: "success"
      });
      setTimeout(() => {
        naviagte("/")
      }, 1000);
      
    }
  })
  return (
    <div>
      <div className="flexall">
        <form class="formcard" onSubmit={handleSubmit}>
          <div className="check">
            <div class="cardheader">
              <h2 class="formheading">Login In to your Account</h2>
            </div>
            <div class="fields">
              <div className='err'>{errors.username}</div>
              <label for="lastname">Username</label>
              <input class="inpu" onChange={handleChange} name="username" type="text" value={values.username} id="username" />
            </div>
            <div class="fields">
              <div className='err'>{errors.password}</div>
              <label for="password">Password</label>
              <input class="inpu" onChange={handleChange} name="password" value={values.password} type="password" id="password" />
            </div>
            <div className="plex">
              <h4>Remember me</h4>
              <Link to="/forgot" className='lin'>Forgot Password?</Link>
              </div>
            <button type='submit' className='btnz'>Login</button>
            <div className="flexmon">
            <div className="plext">
              <h4>Don’t have an account?</h4>
              <Link to="/signup" className='link'>Sign Up</Link>
              </div>
            </div>
          </div>
        </form>
        <div className="image">
          <img src="https://res.cloudinary.com/dhoqtwst9/image/upload/v1707921291/image_249_yzkyni.png" alt="" />
        </div>
      </div>
      <div className="back">
        <img src="https://res.cloudinary.com/dhoqtwst9/image/upload/v1708437763/Frame_532_zcfpzv.png" alt="" />
      </div>
      <div className="last">
        <h3>2023 Copyrights: Hyra</h3>
      </div>
    </div>
  )
}

export default Login