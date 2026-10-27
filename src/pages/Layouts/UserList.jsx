import React from 'react'
import UserSection from '../components/UserSection';
import Roge from '../../assets/ashik.jpg'
import TitleSection from '../components/TitleSection';
import Searchbar from '../components/Searchbar';

const UserList = () => {
  return (
    <div className='h-[300px]w-full mt-9'>
         <Searchbar/>
          <div className='w-full h-full bg-blue-100 mt-3 shadow-2xl rounded-xl'>
          <TitleSection title="User List"/>
             <div className='h-[222px] overflow-y-scroll '>
              <UserSection image={Roge} name='sdxffcgcgfg' bio='hhhhghghggg'/>
              <UserSection image={Roge} name='Md Ashik' bio='hhhhghghggg'/>
              <UserSection image={Roge} name='sdxffcgcgfg' bio='hhhhghghggg'/>
              <UserSection image={Roge} name='Mst Mimma' bio='hhhhghghggg'/>
             </div>
          </div>
        </div>
  )
}

export default UserList