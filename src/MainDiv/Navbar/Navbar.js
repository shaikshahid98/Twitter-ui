import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import Navoption from './Navoption';

const Navbar = () => {
  return (
    <div class="grid grid-cols-12  w-auto border border-gray-300">
    <div class="flex pt-3 col-span-10 justify-around font-bold   ">
      <div className='hover:bg-slate-400 cursor-pointer '>
        <Navoption  text={"For you"} active={true} ></Navoption>
      </div>
      <div className='hover:bg-slate-400 cursor-pointer '>
        <Navoption text={"Following"} active= {false} ></Navoption>
      </div>
    </div>
    <div class="flex justify-center  pt-3 col-span-2 cursor-pointer  ">
        <SettingsIcon sx={{ "&:hover": { color: "gray" } }} />
    </div>
</div>
  )
}

export default Navbar
