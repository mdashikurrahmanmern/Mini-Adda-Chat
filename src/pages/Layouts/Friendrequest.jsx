import React, { useEffect, useState } from 'react'
import UserSection from '../components/UserSection';
import Roge from '../../assets/ashik.jpg'
import TitleSection from '../components/TitleSection';
import { getDatabase, ref, onValue} from "firebase/database";
import Searchbar from '../components/Searchbar';
import { useSelector } from 'react-redux';

const Friendrequest = () => {
    const db = getDatabase();
    const data= useSelector(state=>state.activeuser.value)
      let [friendlist,setfriendlist]=useState([])
      useEffect(() => {
        const starCountRef = ref(db, 'friendrequestlist');
        onValue(starCountRef, (snapshot) => {
          let arr=[]
        snapshot.forEach(item=>{
         
          if(item.val().sanderid==data.uid || item.val().receiverid==data.uid){
            arr.push(item.val())
          }
         
        })
        setfriendlist(arr);
        }); 
       }, [])
  return (
   <div className='h-[300px]w-full mt-9'>
         <Searchbar/>
          <div className='w-full h-full bg-blue-100 mt-3 shadow-2xl rounded-xl'>
          <TitleSection title="Friendrequest"/>

             <div className='h-[222px] overflow-y-scroll '>

            {
              friendlist.map(item=>(
                <UserSection btntext="Accept" image={Roge} name={item.sendername} bio={item.senderid}/>
              ))
            }
             
             </div>

          </div>

        </div>
  )
  
}

export default Friendrequest