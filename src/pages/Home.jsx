import React from 'react'
import Grid from '@mui/material/Grid';
import { FaSearch } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";


const Home = () => {
  return (
     <Grid container spacing={2}>
        <Grid size={4}>
        <div className='h-[300px] w-full overflow-y-scroll bg-green-500 mt-9'>
          <div className='relative w-full bg-red-300 rounded-xl'>
            <input className='py-2 px-11 shadow-2xl w-full' type="text" placeholder='Search' />
                     <FaSearch className='absolute top-1/2 left-2 -translate-y-1/2' />
          <BsThreeDotsVertical className='absolute top-1/2 right-2 -translate-y-1/2' />
          </div>
           </div>
        </Grid>
    
       </Grid>
  )
}

export default Home