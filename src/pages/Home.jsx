import React from 'react'
import Grid from '@mui/material/Grid';
import { FaSearch } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import UserSection from './components/UserSection';
import Roge from '../assets/ashik.jpg'


const Home = () => {
  return (
     <Grid container spacing={2}>
        <Grid size={4}>
        <div className='h-[300px]w-full mt-9'>
          <div className='relative w-full bg-blue-100 rounded-xl'>
            <input className='py-2 pl-14 pr-10 shadow-2xl w-full rounded-xl' type="text" placeholder='Search' />
                     <FaSearch className='absolute top-1/2 left-4 -translate-y-1/2' />
          <BsThreeDotsVertical className='absolute top-1/2 right-2 -translate-y-1/2' />
          </div>
          <div className='w-full h-full bg-blue-100 mt-3 shadow-2xl rounded-xl'>
           <div className='flex justify-between px-5 py-3'>
            <h4 className='text-xl font-bold'>Groups List</h4>
            <BsThreeDotsVertical className='text-xl'/>
           </div>

             <div className='h-[222px] overflow-y-scroll '>
              <UserSection image={Roge} name='sdxffcgcgfg' bio='hhhhghghggg'/>
              <UserSection image={Roge} name='Md Ashik' bio='hhhhghghggg'/>
              <UserSection image={Roge} name='sdxffcgcgfg' bio='hhhhghghggg'/>
              <UserSection image={Roge} name='Mst Mimma' bio='hhhhghghggg'/>
             </div>

          </div>

           </div>
        </Grid>

         <Grid size={4}>
        <div className='h-[300px]w-full mt-9'>
          <div className='relative w-full bg-blue-100 rounded-xl'>
            <input className='py-2 pl-14 pr-10 shadow-2xl w-full rounded-xl' type="text" placeholder='Search' />
                     <FaSearch className='absolute top-1/2 left-4 -translate-y-1/2' />
          <BsThreeDotsVertical className='absolute top-1/2 right-2 -translate-y-1/2' />
          </div>
          <div className='w-full h-full bg-blue-100 mt-3 shadow-2xl rounded-xl'>
           <div className='flex justify-between px-5 py-3'>
            <h4 className='text-xl font-bold'>Groups List</h4>
            <BsThreeDotsVertical className='text-xl'/>
           </div>

             <div className='h-[222px] overflow-y-scroll '>
              <UserSection image={Roge} name='sdxffcgcgfg' bio='hhhhghghggg'/>
              <UserSection image={Roge} name='Md Ashik' bio='hhhhghghggg'/>
              <UserSection image={Roge} name='sdxffcgcgfg' bio='hhhhghghggg'/>
              <UserSection image={Roge} name='Mst Mimma' bio='hhhhghghggg'/>
             </div>

          </div>

           </div>
        </Grid>

         <Grid size={4}>
        <div className='h-[300px]w-full mt-9'>
          <div className='relative w-full bg-blue-100 rounded-xl'>
            <input className='py-2 pl-14 pr-10 shadow-2xl w-full rounded-xl' type="text" placeholder='Search' />
                     <FaSearch className='absolute top-1/2 left-4 -translate-y-1/2' />
          <BsThreeDotsVertical className='absolute top-1/2 right-2 -translate-y-1/2' />
          </div>
          <div className='w-full h-full bg-blue-100 mt-3 shadow-2xl rounded-xl'>
           <div className='flex justify-between px-5 py-3'>
            <h4 className='text-xl font-bold'>Groups List</h4>
            <BsThreeDotsVertical className='text-xl'/>
           </div>

             <div className='h-[222px] overflow-y-scroll '>
              <UserSection image={Roge} name='sdxffcgcgfg' bio='hhhhghghggg'/>
              <UserSection image={Roge} name='Md Ashik' bio='hhhhghghggg'/>
              <UserSection image={Roge} name='sdxffcgcgfg' bio='hhhhghghggg'/>
              <UserSection image={Roge} name='Mst Mimma' bio='hhhhghghggg'/>
             </div>

          </div>

           </div>
        </Grid>

         <Grid size={4}>
        <div className='h-[300px]w-full mt-3'>
          <div className='relative w-full bg-blue-100 rounded-xl'>
            <input className='py-2 pl-14 pr-10 shadow-2xl w-full rounded-xl' type="text" placeholder='Search' />
                     <FaSearch className='absolute top-1/2 left-4 -translate-y-1/2' />
          <BsThreeDotsVertical className='absolute top-1/2 right-2 -translate-y-1/2' />
          </div>
          <div className='w-full h-full bg-blue-100 mt-3 shadow-2xl rounded-xl'>
           <div className='flex justify-between px-5 py-3'>
            <h4 className='text-xl font-bold'>Groups List</h4>
            <BsThreeDotsVertical className='text-xl'/>
           </div>

             <div className='h-[222px] overflow-y-scroll '>
              <UserSection image={Roge} name='sdxffcgcgfg' bio='hhhhghghggg'/>
              <UserSection image={Roge} name='Md Ashik' bio='hhhhghghggg'/>
              <UserSection image={Roge} name='sdxffcgcgfg' bio='hhhhghghggg'/>
              <UserSection image={Roge} name='Mst Mimma' bio='hhhhghghggg'/>
             </div>

          </div>

           </div>
        </Grid>

        <Grid size={4}>
        <div className='h-[300px]w-full mt-3'>
          <div className='relative w-full bg-blue-100 rounded-xl'>
            <input className='py-2 pl-14 pr-10 shadow-2xl w-full rounded-xl' type="text" placeholder='Search' />
                     <FaSearch className='absolute top-1/2 left-4 -translate-y-1/2' />
          <BsThreeDotsVertical className='absolute top-1/2 right-2 -translate-y-1/2' />
          </div>
          <div className='w-full h-full bg-blue-100 mt-3 shadow-2xl rounded-xl'>
           <div className='flex justify-between px-5 py-3'>
            <h4 className='text-xl font-bold'>Groups List</h4>
            <BsThreeDotsVertical className='text-xl'/>
           </div>

             <div className='h-[222px] overflow-y-scroll '>
              <UserSection image={Roge} name='sdxffcgcgfg' bio='hhhhghghggg'/>
              <UserSection image={Roge} name='Md Ashik' bio='hhhhghghggg'/>
              <UserSection image={Roge} name='sdxffcgcgfg' bio='hhhhghghggg'/>
              <UserSection image={Roge} name='Mst Mimma' bio='hhhhghghggg'/>
             </div>

          </div>

           </div>
        </Grid>

        <Grid size={4}>
        <div className='h-[300px]w-full mt-3'>
          <div className='relative w-full bg-blue-100 rounded-xl'>
            <input className='py-2 pl-14 pr-10 shadow-2xl w-full rounded-xl' type="text" placeholder='Search' />
                     <FaSearch className='absolute top-1/2 left-4 -translate-y-1/2' />
          <BsThreeDotsVertical className='absolute top-1/2 right-2 -translate-y-1/2' />
          </div>
          <div className='w-full h-full bg-blue-100 mt-3 shadow-2xl rounded-xl'>
           <div className='flex justify-between px-5 py-3'>
            <h4 className='text-xl font-bold'>Groups List</h4>
            <BsThreeDotsVertical className='text-xl'/>
           </div>

             <div className='h-[222px] overflow-y-scroll '>
              <UserSection image={Roge} name='sdxffcgcgfg' bio='hhhhghghggg'/>
              <UserSection image={Roge} name='Md Ashik' bio='hhhhghghggg'/>
              <UserSection image={Roge} name='sdxffcgcgfg' bio='hhhhghghggg'/>
              <UserSection image={Roge} name='Mst Mimma' bio='hhhhghghggg'/>
             </div>

          </div>

           </div>
        </Grid>
    
       </Grid>
  )
}

export default Home