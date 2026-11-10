import React from 'react'
import Image from '../components/Image'

const UserSection = ({image,name,bio,onClickForAdd,onClickForCancel,btntext,Cancelbtn,Cancelbtntext}) => {
  return (
         <div className='flex justify-between items-center px-5 my-4'>
              <div className='flex gap-x-4 items-center'>
                <div className='w-[55px] h-[55px] rounded-full'> <Image className='w-[55px] h-[55px] rounded-full' src={image}/></div>
              <div><h4 className='text-lg font-semibold'>{name}</h4> <p className='text-sm font-normal'>{bio}</p></div>
              </div>
              <div>
                {
                  Cancelbtn &&
                   <button onClick={onClickForCancel} className='bg-red-400 py-1 px-3 font-bold text-white rounded-md'>{Cancelbtntext}</button>
                }
               
                <button onClick={onClickForAdd} className='bg-[#5F35F5] py-1 px-3 font-bold text-white rounded-md ml-2'>{btntext}</button>
              </div>
        </div>
  )
}

export default UserSection