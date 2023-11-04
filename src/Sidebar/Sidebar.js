import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Home, Twitter } from '@mui/icons-material';

import classes from './Sidebar.module.css'
import SidebarOption from './SidebarOption';

const Sidebar = () => {
  return (
    <div className="" >
        <div className='text-sky-400'>
       <TwitterIcon style={{ fontSize: 50 }} />
        </div>
                    <SidebarOption Icon={Home} text={"Home"} active={true} />
                    <SidebarOption Icon={SearchIcon} text={"Explore"} />
                    <SidebarOption Icon={NotificationsActiveIcon} text={"Notifications"} />
                    <SidebarOption Icon={MailOutlineIcon} text={"Messages"} />
                    <SidebarOption Icon={ListAltIcon} text={"Lists"} />
                    <SidebarOption Icon={PeopleAltIcon} text={"Communities"} />
                    <SidebarOption Icon={Twitter} text={"Premium"} />
                    <SidebarOption Icon={PersonIcon} text={"Profile"} />
                    <SidebarOption Icon={MoreHorizIcon} text={"More"} />

                    <button type='button' className=' w-fit hover:bg-sky-500 py-2.5 px-14 h-fit text-lg mx-2 rounded-3xl font-bold items-baseline bg-sky-400 text-white'>
                      Post
                    </button>
    </div>
  )
}

export default Sidebar
