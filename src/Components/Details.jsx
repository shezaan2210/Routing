import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
   const {id} = useParams()
  return (
   <>
   <h1 className='text-2xl'>details</h1>
   <h1 className='text-xl'>book id: {id}</h1>
   
   
   </>
  )
}

export default Details