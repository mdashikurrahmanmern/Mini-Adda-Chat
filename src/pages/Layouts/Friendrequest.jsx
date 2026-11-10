import React, { useEffect, useState } from 'react'
import UserSection from '../components/UserSection';
import Roge from '../../assets/ashik.jpg'
import TitleSection from '../components/TitleSection';
import { getDatabase, ref, onValue, remove} from "firebase/database";
import Searchbar from '../components/Searchbar';
import { useSelector } from 'react-redux';

const Friendrequest = () => {
    const db = getDatabase();
    const data= useSelector(state=>state.activeuser.value)
      let [friendrequestlist,setfriendrequestlist]=useState([])
      useEffect(() => {
        const starCountRef = ref(db, 'friendrequestlist');
        onValue(starCountRef, (snapshot) => {
          let arr=[]
        snapshot.forEach(item=>{
         
          if(item.val().sanderid==data.uid || item.val().receiverid==data.uid){
            arr.push({...item.val(),id:item.key})
          }
         
        })
        setfriendrequestlist(arr);
        }); 
       }, [])

    let handelCancel=(item)=>{
      remove(ref(db, 'friendrequestlist/' +item.id))
    }
  return (
   <div className='h-[300px]w-full mt-9'>
         <Searchbar/>
          <div className='w-full h-full bg-blue-100 mt-3 shadow-2xl rounded-xl'>
          <TitleSection title="Friendrequest"/>

             <div className='h-[222px] overflow-y-scroll '>

            {
              friendrequestlist.map(item=>(
                item.receiverid == data.uid &&
                <UserSection onClickForCancel={()=>handelCancel(item)} Cancelbtn={true} Cancelbtntext="Cancel" btntext="Accept" image={Roge} name={item.sendername} bio="Hi My Name"/>
              ))
            }
             
             </div>

          </div>

        </div>
  )
  
}

export default Friendrequest