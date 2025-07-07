import React from 'react'
import UsePageTitle from '../UsePageTitle'

const SignUp = () => {
  UsePageTitle("SignUp")

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className='w-[400px] h-[500px] gap-2 rounded-2xl border-2 flex flex-col items-center justify-center'>
        <h3 className='text-lg'>Welcome to</h3>
        <h1 className='text-2xl font-bold'>Tech Beast</h1>
        <h3 className='text-lg'>create your own account</h3>
        <h3 className='text-lg'>& enjoy your shopping</h3>
        <form className='flex flex-col items-center justify-center w-1/2 h-auto gap-2'>
          <div className='w-full h-auto flex flex-col items-start '>
            <label className='italic' htmlFor="name">name</label>
            <input className='border-2 px-2 rounded-xl outline-none' type="text" id='name' required/>
          </div>
          <div className='w-full h-auto flex flex-col items-start '>
            <label className='italic' htmlFor="username">username</label>
            <input className='border-2 px-2 rounded-xl outline-none' type="text" id='username' required/>
          </div>
          <div className='w-full h-auto flex flex-col items-start '>
            <label className='italic' htmlFor="email">email</label>
            <input className='border-2 px-2 rounded-xl outline-none' type="email" id='email' required/>
          </div>
          <div className='w-full h-auto flex flex-col items-start '>
            <label className='italic' htmlFor="password">password</label>
            <input className='border-2 px-2 rounded-xl outline-none' type="text" id='password' required/>
          </div>
          <button className='mt-2 px-4 rounded-xl bg-purple-500 text-white hover:bg-purple-900 transition duration-500'>Sign Up</button>
        </form>

      </div>
    </div>
  )
}

export default SignUp
