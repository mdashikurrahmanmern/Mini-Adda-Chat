import Grid from '@mui/material/Grid';
import Image from './components/Image'
import Regone from '../assets/regis.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  let [email,setEmail]=useState('')
  let [name,setName]=useState('')
  let [password,setPassword]=useState('')

  let [emailerror,setEmailError]=useState('')
  let [nameerror,setNameError]=useState('')
  let [passworderror,setPasswordError]=useState('')
  let regexemail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  let regexpassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;


  let handleSignUp = () => {
    if(!email){
       setEmailError('Enter Your Email!');
    }
    else if(!regexemail.test(email)){
      setEmailError('Enter Your Valid Email!');
    }
    if(!name){
       setNameError('Enter Your Name!');
    }
    if(!password){
       setPasswordError('Enter Your Password!');
    }
     else if(!regexpassword.test(password)){
      setPasswordError('Enter Your Strong Password!');
    }
     if(email && regexemail.test(email) && password){
       console.log("creat")
    }
   
  }
  let handleEmail = (e) => {
   setEmail(e.target.value);
       setEmailError("")
  }
  let handleName = (e) => {
   setName(e.target.value);
   setNameError("")
  }
  let handlePassword = (e) => {
   setPassword(e.target.value);
    setPasswordError("")
  }

  return (
    <Grid container >
        <Grid size={6}>
         <div className='flex justify-end items-center h-full'>
             <div className='w-[560px]'>
                <h2 className='text-34 text-primary font-bold font-nunito'>Get started with easily register</h2>
                <p className='text-lg text-black/50 font-normal font-nunito pt-3!'>Free register and you can enjoy it</p>
                <TextField onChange={handleEmail} className='w-[66%] mt-10!' id="outlined-basic" label="Email Address" variant="outlined" />
                {emailerror && <p className='text-red-500 py-2 px-3'>{emailerror}</p>}
                <TextField onChange={handleName} className='w-[66%] mt-5!' id="outlined-basic" label="Ful name" variant="outlined" />
                 {nameerror && <p className='text-red-500 py-2 px-3'>{nameerror}</p>}
                <TextField onChange={handlePassword} className='w-[66%] mt-5!' id="outlined-basic" label="Password" variant="outlined" />
                 {passworderror && <p className='text-red-500 py-2 px-3'>{passworderror}</p>}
                <Button onClick={handleSignUp} className='py-3! rounded-full! w-[66%] mt-10! mb-5!' variant="contained">Sign up</Button>
                <p className='ml-[70px] text-sm text-[#03014C] font-normal font-opensans'>Already  have an account ? <span className='text-[#EA6C00] font-bold'><Link  to="/login">Sign In</Link></span></p>
             </div>
         </div>
        </Grid>
        <Grid size={6}>
        <Image className='w-full h-screen object-cover' src={Regone}/>
        </Grid>
    </Grid>
  )
}

export default Registration