import { useEffect, useState } from 'react'
import UserSection from '../components/UserSection';
import Roge from '../../assets/ashik.jpg'
import TitleSection from '../components/TitleSection';
import Searchbar from '../components/Searchbar';
import { getDatabase, set, ref, onValue, push} from "firebase/database";
import { useSelector } from 'react-redux';

const UserList = () => {
  const db = getDatabase();
  const [alluser,setAllUser]=useState([]);
  const data= useSelector(state=>state.activeuser.value)
  let [friendrequestlist,setfriendrequestlist]=useState([])
  //console.log(data.uid);

  useEffect(() => {
    const starCountRef = ref(db, 'allusers');
    onValue(starCountRef, (snapshot) => {
      let arr=[]
    snapshot.forEach(item=>{
      if(item.val().userid!=data.uid){
      arr.push(item.val())
      }
    })
    setAllUser(arr);
    }); 
   }, [])

   const handleAdd=(item)=>{
   
    
   set(push(ref(db, 'friendrequestlist/')), {

    senderid:data.uid,
    sendername:data.displayName,
    receiverid:item.userid,
    receivername:item.name,
  });
   }

    useEffect(() => {
        const starCountRef = ref(db, 'friendrequestlist');
        onValue(starCountRef, (snapshot) => {
          let arr=[]
        snapshot.forEach(item=>{
            arr.push(item.val().senderid+item.val().receiverid)
        })
        setfriendrequestlist(arr);
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
              friendrequestlist.includes(item.userid+data.uid) ||
              friendrequestlist.includes(data.uid+item.userid)
              ?
              <UserSection btntext="Panding" image={Roge} name={item.name} bio={item.email}/>
              :
              <UserSection onClickForAdd={()=>handleAdd(item)} btntext="Add" image={Roge} name={item.name} bio={item.email}/>
             ))
          }
         
        </div>
      </div>
    </div>
  )
}

export default UserList