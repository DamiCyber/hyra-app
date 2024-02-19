import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './component/Layout'
import Hyrahome from './component/Hyrahome'
import Ourteaching from './component/Ourteaching'
import About from './component/About'
import Login from './component/Login'
import Signup from './component/Signup'
const App = () => {
  return (
    <>
      <Routes>
         <Route path="/" element={<Layout/>} >
           <Route path='/hyrahome' element={<Hyrahome/>}/>
           <Route path='/teaching' element={<Ourteaching/>}/>
           <Route path='/about' element={<About/>}/>
         </Route>
         <Route>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/login' element={<Login/>}/>
         </Route>
      </Routes>
    </>
  )
}

export default App