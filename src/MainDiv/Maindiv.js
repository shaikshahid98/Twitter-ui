import React from 'react'
import Navbar from './Navbar/Navbar'
import Posts from './Posts/Posts'
import NewPost from './NewPost/NewPost'
const Maindiv = () => {

  return (
    <div className='grid grid-flow-row h-fit w-full'>
        <div className='h-fit'>
        <Navbar ></Navbar>
        </div>
        <div className='h-fit py-2 px-1'>
            <NewPost />
        </div>
        <div className=''>
        <Posts />
        </div>
    </div>

      
  )
}

export default Maindiv
