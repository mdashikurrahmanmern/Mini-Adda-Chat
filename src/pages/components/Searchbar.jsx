import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'

const Searchbar = () => {
  return (
    <div className='relative w-full bg-blue-100 rounded-xl'>
            <input className='py-2 pl-14 pr-10 shadow-2xl w-full rounded-xl' type="text" placeholder='Search' />
                     <FaSearch className='absolute top-1/2 left-4 -translate-y-1/2' />
          <BsThreeDotsVertical className='absolute top-1/2 right-2 -translate-y-1/2' />
          </div>
  )
}

export default Searchbar