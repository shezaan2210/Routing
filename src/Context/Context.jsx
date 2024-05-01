import React, { createContext, useEffect, useState } from 'react'
import { fetchImages } from '../API/Axios'



const context = createContext()

const Context = (props) => {
  const [images, setimages] = useState([])
  const [pages, setpages] = useState(1)
  console.log(pages)

  const prevPageHandler = () => {
    setpages((prevPages) => (prevPages > 1 ? prevPages - 1 : prevPages))
  }

  const nextPageHandler = () => {
    setpages((prevPages) => prevPages + 1)
  }

  useEffect(() => {
   const fetchData = async ()=>{
    try {
      const data = await fetchImages(pages, 10)
      setimages(data)
    } catch (error) {
      console.log(error)
    }
   }
   fetchData()
  }, [pages])






  return <context.Provider value={{images, setimages, pages, setpages, prevPageHandler, nextPageHandler}}>
    {props.children}
  </context.Provider>
}

export { context, Context}