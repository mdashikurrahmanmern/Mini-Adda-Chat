import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Groupslist from './Layouts/Groupslist';
import Friendlist from './Layouts/Friendlist';
import UserList from './Layouts/UserList';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Friendrequest from './Layouts/Friendrequest';


const Home = () => {
 let data = useSelector(state=>state.activeuser.value)
 let navigate=useNavigate()

 useEffect(()=>{

  if(data==null){
    
   navigate("/Login")

  }


 },[])

  return (
     <Grid container spacing={2}>

        <Grid size={4}>
          <Groupslist/>
        </Grid>

        <Grid size={4}>
          <Friendlist/>
        </Grid>

        <Grid size={4}>
          <UserList/>
        </Grid>

        <Grid size={4}>
          <Friendrequest/>
        </Grid>
        
    
       </Grid>
  )
}

export default Home