import React, { useState } from 'react'

const Navoption = ({text,active}) => {
    const [isactive,setActive] = useState(active)
  return (
    <div className='flex flex-col '>
    <div className='h-10 '>
      <p3 >{text}</p3>
    </div>
    { isactive  &&
       <div className='border-2 rounded-lg  border-sky-400'></div> 
    }
      </div>
  )
}

export default Navoption
