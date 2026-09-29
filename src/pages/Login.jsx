import Grid from '@mui/material/Grid';
import Image from './components/Image'
import Logone from '../assets/login.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Login = () => {
  let [email,setEmail]=useState('')
  let [password,setPassword]=useState('')

  let [emailerror,setEmailError]=useState('')
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
  let handlePassword = (e) => {
   setPassword(e.target.value);
    setPasswordError("")
  }

  return (
     <Grid container >
        <Grid size={6}>
         <div className='flex justify-end items-center h-full'>
             <div className='w-[560px]'>
                <h2 className='text-34 text-primary font-bold font-nunito'>Login to your account!</h2>

                      <div className='w-[40%] flex gap-x-2 items-center justyfi-center border border-gray-400 mt-2 py-3 px-6 rounded'>
                        <FcGoogle />
                        <p>Login with Google</p>
                      </div>

                <TextField onChange={handleEmail} className='w-[66%] mt-10!' id="outlined-basic" label="Email Address" variant="outlined" />
                {emailerror && <p className='text-red-500 py-2 px-3'>{emailerror}</p>}
                <TextField onChange={handlePassword} className='w-[66%] mt-5!' id="outlined-basic" label="Password" variant="outlined" />
                 {passworderror && <p className='text-red-500 py-2 px-3'>{passworderror}</p>}
                <Button onClick={handleSignUp} className='py-3! w-[66%] mt-10! mb-5!' variant="contained">Sign up</Button>
                <p className='ml-[70px] text-sm text-[#03014C] font-normal font-opensans'>Already  have an account ? <span className='text-[#EA6C00] font-bold'><Link to="/">Sign up</Link></span></p>
             </div>
         </div>
        </Grid>
        <Grid size={6}>
        <Image className='w-full h-screen object-cover' src={Logone}/>
        </Grid>
    </Grid>
  )
}

export default Login