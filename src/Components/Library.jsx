import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Details from './Details'

const Library = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>Library</h1>
      <ul className='list-disc'>
        <li className='list-item'>
          <Link to='show/1' /> 
        </li>
        <li className='list-item'>
          <Link to='show/2' />
        </li>
        <li className='list-item'>
          <Link to='show/3' />
        </li>
      </ul> 
      <hr />
    <Outlet/>
    </div>
  )
}

export default Library