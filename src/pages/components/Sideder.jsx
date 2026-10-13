import React from 'react'
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosLogOut, IoMdNotificationsOutline } from "react-icons/io";
import Image from './Image'
import Apps from '../../assets/appl.png'


const Sideder = () => {
  return (
   <div className='flex flex-col justify-around items-center w-[80%] h-[93vh] mx-auto mt-8  bg-[#5F35F5] rounded-[20px]'>
     <div className='w-23 h-23 rounded-full bg-red-500'><Image className='w-23 h-23 rounded-full' src={Apps}/></div>
     <div className='flex flex-col gap-y-10'>
                <IoHomeOutline className='text-5xl text-white'/>
             <AiOutlineMessage className='text-5xl text-white'/>
     <IoMdNotificationsOutline className='text-5xl text-white'/>
            <IoSettingsOutline className='text-5xl text-white'/>
     </div>
     <IoIosLogOut className='text-5xl text-white'/>


   </div>
  )
}

export default Sideder