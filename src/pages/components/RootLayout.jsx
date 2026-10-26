import React from 'react'
import Grid from '@mui/material/Grid';
import Sideder from "./Sideder";
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <Grid container spacing={2}>
        <Grid size={2}>
         <Sideder/>
        </Grid>
    
        <Grid size={10}>
          <div className='mr-9'>
            <Outlet/>
          </div>
        </Grid>
    
       </Grid>
  )
}

export default RootLayout