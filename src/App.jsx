import React from 'react'
import './index.css'
import Nav from './Components/Nav'
import { useContext } from 'react'
import { context } from './Context/Context'


const App = () => {

const {images, prevPageHandler, nextPageHandler} = useContext(context)

let renderimages = 'loading...'
if (images.length > 0) {
  renderimages = images.map((image) => (
    <div className='w-[30%] shadow p-5' key={image.id}>
      <img src={image.download_url} alt={image.author} />
      <h1>{image.author}</h1>
    </div>
  ))
}


  return (
  <div className='main w-screen h-screen'>
      <Nav />
      <hr />
      <br />
      <div className="box flex flex-wrap min-h-screen w-full">
      {renderimages}
    </div>

   <div className="pagination text-center pb-10 cursor-pointer">
   <span onClick={prevPageHandler}  className='capitalize text-green-400 text-3xl mr-10'>prev</span>
    <span onClick={nextPageHandler}  className='capitalize text-green-400 text-3xl mr-10'>Next</span>
      
    
   </div>
  </div>


  )
}

export default App