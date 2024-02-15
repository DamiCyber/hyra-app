import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './component/Layout'
import Hyrahome from './component/Hyrahome'
import Ourteaching from './component/Ourteaching'
import About from './component/About'
const App = () => {
  return (
    <>
      <Routes>
         <Route path="/" element={<Layout/>} >
           <Route path='/hyrahome' element={<Hyrahome/>}/>
           <Route path='/teaching' element={<Ourteaching/>}/>
           <Route path='/about' element={<About/>}/>
         </Route>
      </Routes>
    </>
  )
}

export default App