import React from 'react'
import Grid from '@mui/material/Grid';
import Groupslist from './Layouts/Groupslist';
import Friendlist from './Layouts/Friendlist';
import UserList from './Layouts/UserList';


const Home = () => {
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
    
       </Grid>
  )
}

export default Home