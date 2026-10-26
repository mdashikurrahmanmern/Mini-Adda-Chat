import React from 'react'
import Image from '../components/Image'

const UserSection = ({image,name,bio}) => {
  return (
         <div className='flex justify-between items-center px-5 my-4'>
              <div className='flex gap-x-4 items-center'>
                <div className='w-[55px] h-[55px] rounded-full'> <Image className='w-[55px] h-[55px] rounded-full' src={image}/></div>
              <div><h4 className='text-lg font-semibold'>{name}</h4> <p className='text-sm font-normal'>{bio}</p></div>
              </div>
              <button className='bg-[#5F35F5] py-1 px-3 font-bold text-white rounded-md'>Join</button>
        </div>
  )
}

export default UserSection