import React from 'react'
import { Routes, Route } from 'react-router-dom';




import NavBar from './Component/NavBar';
import Data from './Component/Laptop/Data';
import Home from './Home';
import Laptop from './Component/Laptop/Laptop';
import SignUp from './Component/User/SignUp';
import SignIn from './Component/User/SignIn';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

const App = () => {
  return (
    <div className='w-full h-auto overflow-x-hidden  font-serif '>
      <NavBar />
      <div className='mt-12 p-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/laptop' element={<Laptop />} />
          <Route path='/laptop/:title' element={<Data/>} />
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
