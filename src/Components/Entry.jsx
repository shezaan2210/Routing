import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Entry = () => {
  const navigate = useNavigate()
  const submitHandler = ()=>{
navigate('/show')
  }
  const {pathname} = useLocation()
  return (
    <> <br />
    <button  onClick={submitHandler} className='text-black bg-green-400 px-4 py-2'> submit</button>
    </>
  )
}

export default Entry