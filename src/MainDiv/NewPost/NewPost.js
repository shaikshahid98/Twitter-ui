import React from 'react'
import pic from '../../assets/mypic.jpg';
import EnterNewPost from './EnterNewPost';

const NewPost = () => {
  return (
    <div className='flex flex-row w-auto'>
      <div  className='rounded-lg'>
        <img src={pic} alt={pic} width='40px' height='40px' />
      </div>
      <div className=''>
        <EnterNewPost />
        </div>
    </div>
  )
}

export default NewPost
