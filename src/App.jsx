import React from 'react'
import './index.css'
import Nav from './Components/Nav'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Components/Home'
import Entry from './Components/Entry'
import Library from './Components/Library'
import Details from './Components/Details'

const App = () => {
 const navigate =  useNavigate()
 const submitHandler = ()=>{

 }
  return (
  <div className='main w-screen h-screen'>
      <Nav>   </Nav>
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route path='/Entry'  element={<Entry />}/>
        <Route path='/Library'  element={<Library />}>
        <Route path='/Library/:id'  element={<Details />}/>
        </Route>
       
      </Routes>
  
  </div>


  )
}

export default App