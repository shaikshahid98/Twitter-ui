import React from 'react'
import classes from './SidebarOption.module.css'
const SidebarOption = ({text, Icon,active}) => {
  return (
    <div className="flex my-2 max-w-fit p-1 items-center cursor-pointer rounded-3xl hover:bg-sky-200 ">
        <div className="ml-1">
            <Icon fontSize="large" />
            </div>
      <h2 className='text-xl mx-2 font-bold items-baseline'>{text}</h2>
    </div>
  )
}

export default SidebarOption


// /text-sky-400