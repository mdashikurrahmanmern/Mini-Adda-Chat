import React from 'react'
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosLogOut, IoMdNotificationsOutline } from "react-icons/io";
import Image from './Image'
import Apps from '../../assets/appl.png'
import {Link, useLocation} from 'react-router-dom';


const Sideder = () => {
  let location=useLocation()
  let active=location.pathname.replace("/","");
  return (
   <div className='flex flex-col justify-around items-center w-[80%] h-[93vh] mx-auto mt-8  bg-[#3cda1d] rounded-[20px]'>
     <div className='w-23 h-23 rounded-full bg-red-500'><Image className='w-23 h-23 rounded-full' src={Apps}/></div>
     <div className='flex flex-col gap-y-12'>
      <Link className={`relative after:absolute after:top-1/2 after:-left-[25%]  after:-translate-y-1/2 ${active=="home"&& "after:bg-blue-500"} after:w-[130px] after:rounded-l-xl after:h-[70px] after:content-[""] after:-z-1 z-1    
      before:absolute before:top-1/2 before:left-[110px]  before:-translate-y-1/2 before:bg-[#3cda1d] before:w-[10px] before:rounded-l-xl before:h-[70px] before:content-[""]
      `} to="/home"> <IoHomeOutline className='text-5xl text-white'/></Link>
      <Link className={`relative after:absolute after:top-1/2 after:-left-[25%]  after:-translate-y-1/2 ${active=="message"&& "after:bg-blue-500"} after:w-[130px] after:rounded-l-xl after:h-[70px] after:content-[""] after:-z-1 z-1    
      before:absolute before:top-1/2 before:left-[110px]  before:-translate-y-1/2 before:bg-[#3cda1d] before:w-[10px] before:rounded-l-xl before:h-[70px] before:content-[""]
      `} to="/message"> <AiOutlineMessage className='text-5xl text-white'/></Link>
      <Link className={`relative after:absolute after:top-1/2 after:-left-[25%]  after:-translate-y-1/2 ${active=="notification"&& "after:bg-blue-500"} after:w-[130px] after:rounded-l-xl after:h-[70px] after:content-[""] after:-z-1 z-1    
      before:absolute before:top-1/2 before:left-[110px]  before:-translate-y-1/2 before:bg-[#3cda1d] before:w-[10px] before:rounded-l-xl before:h-[70px] before:content-[""]
      `} to="/notification"> <IoMdNotificationsOutline className='text-5xl text-white'/></Link>
      <Link className={`relative after:absolute after:top-1/2 after:-left-[25%]  after:-translate-y-1/2 ${active=="setting"&& "after:bg-blue-500"} after:w-[130px] after:rounded-l-xl after:h-[70px] after:content-[""] after:-z-1 z-1    
      before:absolute before:top-1/2 before:left-[110px]  before:-translate-y-1/2 before:bg-[#3cda1d] before:w-[10px] before:rounded-l-xl before:h-[70px] before:content-[""]
      `} to="/setting"> <IoSettingsOutline className='text-5xl text-white'/></Link>
     </div>
     <IoIosLogOut className='text-5xl text-white'/>


   </div>
  )
}

export default Sideder