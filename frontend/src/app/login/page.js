'use client'
import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import fall from '../../../public/fall.png'
import Image from 'next/image'
import Button from '../ui/button'
import { Input } from '../ui/input'
import CustomPasswordInput from '../ui/CustomPasswordInput'
import useLogin from '../helpers/useLogin'
import useValidation from '../hooks/useValidator'
import { validateEmail, validatePassword } from '../helpers/validators'
import LoadingIcon from '../component/icons/LoadingIcon'
import Button from '../ui/button'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const errorEmail = useValidation(() => {
      validateEmail(email)
    }
  );

  console.log(errorEmail)

  const passwordError = useValidation(() => {
    validatePassword(password)
  })

  console.log(passwordError)

  const { isLoading, submitForm: register} = useLogin({
    email,
    password,
    setError
  })

  return (
    < >
      <div className="bg-[#0B0B0BF2] h-[100vh]">
    <div className=''>
      <Navbar/>
      </div>
      <div className="main  flex justify-between md:flex-row flex-col lg:w-[80%] md:w-[95%] w-full h-[20rem] ml-auto mr-auto mt-10">
        <div className='main1 flex md:w-[65%] w-[95%] ml-auto mr-auto md:ml-0 md:mr-0  md:flex-row flex-col-reverse rounded-lg bg-[#343435]'>
          <div className='sec1 md:w-[50%] w-[80%] ml-auto mr-auto '>
            <p className='text-3xl font-semibold'>Sign In to <br /> Recharge Direct</p>
            <p className='pt-8 '>if you don’t an account<br/> you can <b className='text-blue-500'>Register here!</b></p>
          </div>
          <div className='sec2 md:w-[50%] w-[80%] ml-auto mr-auto md:h-[20rem] h-[12rem]'>
            <Image src={fall} className='w-full h-full object-contain'/>
          </div>
        </div>

        <div className='main2 mt-6 lg:w-[25%] md:w-[32%] w-[80%] md:mt-0 ml-auto mr-auto md:ml-0 md:mr-0  flex  flex-col justify-between'>

          <form className='w-full  space-y-4' onSubmit={(e) => {
            e.preventDefault();
            register();
          }}>
            {error && <p className='my-4 text-red-900'>{error}</p>}
            <Input type="text" placeHolder="Username" className="w-full pl-4 h-[3rem] bg-[#EAF0F7] rounded-md" value={email} error={errorEmail} onChange={(e) => {
              setEmail(e.target.value)
            }} />
            {/* <input type="email" name='email' placeholder='Enter Email' className='w-full pl-4 h-[3rem] bg-[#EAF0F7] rounded-md' /> */}
            {/* <input type='password' name='' className=' w-full pl-4 h-[3rem] bg-[#EAF0F7] rounded-md' placeholder='******'></input> */}
            <CustomPasswordInput 
            onChange={(e) => {
              setPassword(e.target.value);
            }} className="w-full pl-4 h-[3rem] bg-[#EAF0F7] rounded-md" value={password} error={passwordError} id="password"/>
            <div>
              {isLoading && <LoadingIcon />}
              <button className='w-full h-[3rem] flex items-center justify-center bg-[#4461F2] font-bold rounded-md text-white '>Sign up</button>
            </div>
          </form>

          <div className="dash  w-full flex  items-center justify-between">
            <div className='h-[0.1rem] bg-[#DFDFDF] w-[3.5rem]'></div>
            <div className='text-[#ACADAC]'>or continue with</div>
            <div  className='h-[0.1rem] bg-[#DFDFDF] w-[3.5rem]'></div>
        </div>

          <div className='icons w-full h-[3rem] mt-4 flex items-center justify-between '>
            <div className='h-full rounded-md w-[30%] bg-[#DDDFDD] flex items-center justify-center'>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg>
            </div>
            
            <div className='h-full rounded-md w-[30%] bg-[#DDDFDD] flex items-center justify-center'>
             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
    <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"></path>
</svg> 
            </div>

           

            <div className='h-full rounded-md w-[30%] bg-[#DDDFDD] flex items-center justify-center'>
           <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
</svg>
</div>

          </div>
          
          
        </div>
       
        </div>
        </div>
      </>
  )
}

export default Login
