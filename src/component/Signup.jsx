
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import "../assets/style/signup.css"
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import Swal from 'sweetalert2';


const firebaseConfig = {
  apiKey: "AIzaSyABmFfeRfrKAIf9_Xh933FQ0Zw3_YpK1YA",
  authDomain: "fir-e9fb3.firebaseapp.com",
  projectId: "fir-e9fb3",
  storageBucket: "fir-e9fb3.appspot.com",
  messagingSenderId: "402254317193",
  appId: "1:402254317193:web:a8023a9fdd9350637aa858"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

const Signup = () => {
  const [passwordError, setPasswordError] = useState("");
  const validationSchema = yup.object({
    name: yup.string().required("Required").max(16).min(3),
    username: yup.string().required("Required").max(10).min(3),
    email: yup.string().email("Valid email address").required("Required"),
    password: yup.string().matches(/^[a-zA-Z0-9]{1,8}$/, "Password must be at most 8 characters and contain only letters and numbers").required("Required"),  
    confirmpassword: yup.string().matches(/^[a-zA-z0-9]{8}$/, "Password must match ").required("Required"),
  });

  let navigate = useNavigate();

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
        Swal.fire({
          title: "Hyra",
          text: "Incorrect Password!",
          icon: "error"
        });

      } else {
        setPasswordError("")
        Swal.fire({
          title: "Hyra",
          text: "Sign Up successful!",
          icon: "success"
        });
        setTimeout(() => {
          navigate('/login')
        }, 1000);
      }
    }
  });

  const google = () => {

    
      signInWithPopup(auth, provider)
        .then((result) => {
          // Handle successful sign-in
          console.log(result.user);
          setPasswordError("")
          Swal.fire({
            title: "Hyra",
            text: "Sign Up successful!",
            icon: "success"
          });
          setTimeout(() => {
            navigate('/')
          }, 1000);
        })
        .catch((error) => {
          // Handle errors
          console.log(error.message);
          if (error.message !== "auth/internal-error") {
              console.log("online");
            
          } else{
            console.log("offline");
          }
        });
       
    }    
    window.google = google

  return (
    <div>
     
      <div className="all">
        <div className="hello">
          <h1>Hello!</h1>
        </div>
        <div className="flex">
          <form className="form card" onSubmit={handleSubmit}>
            <div className="card_header">
               <div id="disp"></div>
              <h3 className="form_heading">Create Account</h3>
            </div>
            <div className="field">
              <div className='err'>{errors.name}</div>
              <label htmlFor="firstname">Name</label>
              <input className="input" onChange={handleChange} name="name" type="text" value={values.name} id="username" />
            </div>
            <div className="field">
              <div className='err'>{errors.username}</div>
              <label htmlFor="lastname">Username</label>
              <input className="input" onChange={handleChange} name="username" type="text" value={values.username} id="username" />
            </div>
            <div className="field">
              <div className='err'>{errors.email}</div>
              <label htmlFor="email">Email</label>
              <input className="input" onChange={handleChange} name="email" type="text" value={values.email} id="email" />
            </div>
            <div className="field">
              <div className='err'>{errors.password}</div>
              <label htmlFor="password">Password</label>
              <input className="input" onChange={handleChange} name="password" value={values.password} type="password" id="password" />
            </div>
            <div className="field">
              <div className='err'>{errors.confirmpassword}</div>
              <label htmlFor="password">Confirm password</label>
              <input className="input" onChange={handleChange} name="confirmpassword" value={values.confirmpassword} type="password" id="confirmpassword" />
              {passwordError && <span className='spa'>{passwordError}</span>}
            </div>
            <button type='submit' className='btns'>Sign Up</button>
            <button type='button' className='btnss' onClick={google}>continue with Google</button>
          </form>
          <div className="image">
            <img src="https://res.cloudinary.com/dhoqtwst9/image/upload/v1707921291/image_249_yzkyni.png" alt="" />
          </div>
        </div>
        <div className="back">
        </div>
        <div className="last">
          <h3>2023 Copyrights: Hyra</h3>
        </div>
      </div>

    </div>
  );
};

export default Signup;
