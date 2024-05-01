import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Entry from '../Components/Entry'
import Library from '../Components/Library'
import Details from '../Components/Details'

const Routing = () => {
  return (
    <Routes>
        <Route  path='/' element={<Home />}/>
        <Route path='/create'  element={<Entry />}/>
        <Route path='/show'  element={<Library />}>
        <Route path='/show/:id'  element={<Details />}/>
        </Route>
       
      </Routes>
  
  )
}

export default Routing