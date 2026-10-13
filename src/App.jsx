import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from './pages/Registration'
import Login from './pages/Login'
import Home from './pages/Home'
import RootLayout from '../src/pages/components/RootLayout'



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/registration" element={<Registration />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/" element={<RootLayout />}>
    <Route path="home" element={<Home />}></Route>
    
    </Route>

    </>

  )
);

const App = () => {
  return (
   <RouterProvider router={router} />
  )
}

export default App