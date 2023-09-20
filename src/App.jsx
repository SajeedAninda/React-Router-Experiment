import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './DefaultFooter'
import DefaultFooter from './DefaultFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar></Navbar>
     <Outlet></Outlet>
     <DefaultFooter></DefaultFooter>
    </>
  )
}

export default App
