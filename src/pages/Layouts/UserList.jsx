import { useEffect, useState } from 'react'
import UserSection from '../components/UserSection';
import Roge from '../../assets/ashik.jpg'
import TitleSection from '../components/TitleSection';
import Searchbar from '../components/Searchbar';
import { getDatabase, ref, onValue } from "firebase/database";

const UserList = () => {
  const db = getDatabase();
  const [alluser,setAllUser]=useState([]);

  useEffect(() => {
    const starCountRef = ref(db, 'allusers');
    onValue(starCountRef, (snapshot) => {
      let arr=[]
    snapshot.forEach(item=>{
      arr.push(item.val())
    })
    setAllUser(arr);
    }); 
   }, [])
  

  return (
    <div className='h-[300px]w-full mt-9'>
      <Searchbar />
      <div className='w-full h-full bg-blue-100 mt-3 shadow-2xl rounded-xl'>
        <TitleSection title="User List" />
        <div className='h-[222px] overflow-y-scroll '>
          {
             alluser.map(item=>(
              <UserSection image={Roge} name={item.name} bio={item.email}/>
             ))
          }
         
        </div>
      </div>
    </div>
  )
}

export default UserList