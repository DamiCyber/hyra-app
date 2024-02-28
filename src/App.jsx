import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './component/Layout'
import Hyrahome from './component/Hyrahome'
import Ourteaching from './component/Ourteaching'
import About from './component/About'
import Login from './component/Login'
import Signup from './component/Signup'
import Forgotten from './component/Forgotten'
import Search from './component/Search'
import Resend from './component/Resend'
const App = () => {
  const [DeferredPrompt, setDeferredPrompt] = useState("")
  useEffect(() => {
    if ("ServiceWorker" in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then(registration => {
            console.log('SW registered: ', registration);
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          })
      })
    }
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
    // console.log();
  })
  return (
    <>
      <Routes>
        <Route path='/' element={<Signup />} />

        <Route path="/" element={<Layout />} >
          <Route path='/home' element={<Hyrahome />} />
          <Route path='/teaching' element={<Ourteaching />} />
          <Route path='/about' element={<About />} />
        </Route>

        <Route>
          <Route path='/resend' element={<Resend />} />
          <Route path='/forgot' element={<Forgotten />} />
          <Route path='/login' element={<Login />} />
          <Route path='/search' element={<Search />} />
        </Route>
      </Routes>
    </>
  )
}

export default App