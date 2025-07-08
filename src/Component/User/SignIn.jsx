import React from 'react'
import { Link } from 'react-router-dom';
import UsePageTitle from '../UsePageTitle'
import {useFormik} from 'formik'
import * as yup from 'yup';

const SignIn = () => {
  UsePageTitle("SignIn")


  const formik = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    validationSchema: yup.object({
      email: yup.string().email().required(),
      password: yup.string().min(6, "password must have 6 character").required()
    }) ,
    onSubmit:(values,  {resetForm})=>{
      resetForm({values:''})
      console.log(values);
      
      
    }
  })
  console.error(formik.errors)

  
  const emailError= formik.touched.email && formik.errors.email && (
    <span className='text-[10px]'>{formik.errors.email}</span>
  )
  const passwordError= formik.touched.password && formik.errors.password && (
    <span className='text-[10px]'>{formik.errors.password}</span>
  )

  



  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className='w-[400px] h-[500px] gap-2 rounded-2xl border-2 flex flex-col items-center justify-center'>
        <h3 className='text-lg'>Welcome back to</h3>
        <h1 className='text-2xl font-bold'>Tech Beast</h1>
        <h3 className='text-lg'>signin  into your own account</h3>
        <h3 className='text-lg'>& enjoy your shopping</h3>

        {/* form */}
        <form onSubmit={formik.handleSubmit} className='flex flex-col items-center justify-center w-1/2 h-auto gap-2'>
          
          <div className='w-full h-auto flex flex-col items-start '>
            <label className='italic' htmlFor="email">email</label>
            <input onChange={formik.handleChange} value={formik.values.email} className='border-2 px-2 rounded-xl outline-none' type="email" id='email' />
            {emailError}
          </div>
          <div className='w-full h-auto flex flex-col items-start '>
            <label className='italic' htmlFor="password">password</label>
            <input onChange={formik.handleChange} value={formik.values.password} className='border-2 px-2 rounded-xl outline-none' type="text" id='password' />
            {passwordError}
          </div>
          <button type='submit' className='mt-2 px-4 rounded-xl bg-purple-500 text-white hover:bg-purple-900 transition duration-500'>Sign In</button>
        </form>
        <Link to='/signup' className='text-sm'>new user?</Link>
        

      </div>
    </div>
  )
}

export default SignIn
