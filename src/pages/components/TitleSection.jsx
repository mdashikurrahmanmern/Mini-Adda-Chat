import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'

const TitleSection = ({title}) => {
  return (
    <div className='flex justify-between px-5 py-3'>
               <h4 className='text-xl font-bold'>{title}</h4>
               <BsThreeDotsVertical className='text-xl'/>
              </div>
  )
}

export default TitleSection