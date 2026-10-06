import Grid from '@mui/material/Grid';
import Image from './components/Image'
import Logone from '../assets/login.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { Vortex } from 'react-loader-spinner'

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate()

  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [loader, setLoader] = useState(false)
  let [emailerror, setEmailError] = useState('')
  let [passworderror, setPasswordError] = useState('')

  let [ResetEmail, setResetEmail] = useState('')
  let [popup, setpopup] = useState(false)
  let regexemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  let regexpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;

  let handlesubmit = () => {
    sendPasswordResetEmail(auth,ResetEmail)
  .then(() => {
   toast.success("Check Your Email For Reset")
   setpopup(false)
  })
  .catch((error) => {
    console.log(error.code);
   
  });

  }

  let handleResetEmail = (e) => {
     setResetEmail(e.target.value);

  }

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("")
  }
  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("")
  }

  let handleSignIn = () => {
    if (!email) {
      setEmailError('Enter Your Email!');
    }
    else if (!regexemail.test(email)) {
      setEmailError('Enter Your Valid Email!');
    }
    if (!password) {
      setPasswordError('Enter Your Password!');
    }
    else if (!regexpassword.test(password)) {
      setPasswordError('Enter Your Strong Password!');
    }
    if (email && regexemail.test(email) && password) {
       setLoader(true)
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

    if (userCredential.user.emailVerified) {
           toast.success("Login Successfull")
          setTimeout(() => {
            navigate('/home')
          }, 2000)
             setLoader(false)
      
         } else {
           toast.error("Verify Your Email")
         }
           setLoader(false)
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode)
          setLoader(false)
          if (errorCode.includes("auth/invalid-credential")) {
            toast.error("Invalid Email Password")
          }
        });
    }

  }

  let handleGoogle=()=>{
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
  .then((result) => {
    console.log("Google Login Successful");
      navigate('/home')

  }).catch((error) => {
     console.log("Google Login Error:", error .message);
    console.log(error .message);
  });
  }

  return (
    <Grid container >
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Grid size={6}>
        <div className='flex justify-end items-center h-full'>
          <div className='w-[560px]'>
            <h2 className='text-34 text-primary font-bold font-nunito'>Login to your account!</h2>

            <div onClick={handleGoogle} className='w-[40%] flex gap-x-2 items-center justyfi-center border border-gray-400 mt-2 py-3 px-6 rounded'>
              <FcGoogle />
              <p>Login with Google</p>
            </div>

            <TextField onChange={handleEmail} className='w-[66%] mt-10!' id="outlined-basic" label="Email Address" variant="outlined" />
            {
            emailerror && <p className='text-red-500 py-2 px-3'>{emailerror}</p>
            }
            <TextField onChange={handlePassword} className='w-[66%] mt-5!' id="outlined-basic" label="Password" variant="outlined" />
            {
            passworderror && <p className='text-red-500 py-2 px-3'>{passworderror}</p>
            }
            <p onClick={() => setpopup(true)} className='mt-2 ml-[240px]'>Forget Password ?</p>
            {
              popup &&
            <div className='absolute left-0 top-0 w-full h-screen bg-black/50 z-1 flex justify-center items-center'>
              <div className='w-[500px] h-[400px] bg-white rounded-md py-10 px-10 flex flex-col justify-center items-center gap-y-5'>
                     <h2 className='text-3xl font-bold '>Forget Password</h2>
                     <p>Send Your Email For Reset Your Password </p>
                  <TextField onChange={handleResetEmail} className='w-[66%]' id="outlined-basic" label="Reset Email Address" variant="outlined" />
                 <div> 
                  <Button onClick={() => setpopup(false)} className='' variant="contained">CANCEL</Button>
                  <Button onClick={handlesubmit} className='ml-6!' variant="contained">SUBMIT</Button>
                  </div>
              </div>
            </div>
            }
            {
              loader
                ?
                <Vortex
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="vortex-loading"
                  wrapperStyle={{}}
                  wrapperClass="vortex-wrapper"
                  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                />
                :
             <Button onClick={handleSignIn} className='py-3! w-[66%] mt-10! mb-5!' variant="contained">Sign up</Button>
            }
            <p className='ml-[70px] text-sm text-[#03014C] font-normal font-opensans'>Already  have an account ? <span className='text-[#EA6C00] font-bold'><Link to="/">Sign up</Link></span></p>
          </div>
        </div>
      </Grid>
      <Grid size={6}>
        <Image className='w-full h-screen object-cover' src={Logone} />
      </Grid>
    </Grid>
  )
}

export default Login