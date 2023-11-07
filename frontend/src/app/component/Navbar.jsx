import React from 'react'
import Link from 'next/link'



const Navbar = () => {
    return (
        <>
           
    <div className=" lg:w-[80%] md:w-[95%] w-full h-[2.5rem] mr-auto ml-auto md:justify-between justify-around flex items-center">
        <div className="logo flex  space-x-2 items-center">
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 32 30" fill="none">
<rect width="23.7953" height="5.15228" transform="matrix(0.64133 -0.767265 0.815003 0.579456 0 18.2573)" fill="white"/>
<rect width="23.7953" height="5.15228" transform="matrix(0.64133 -0.767265 0.815003 0.579456 5.84912 22.4157)" fill="white"/>
<rect width="23.7953" height="5.15228" transform="matrix(0.64133 -0.767265 0.815003 0.579456 11.6196 26.4186)" fill="white"/>
                    </svg>
<p className='text-white'>OFFLINK</p>                    
        </div>
                <div className="options ">
                    <ul className="flex space-x-10 text-white">
                        <li>Home</li>
                        <li><Link href='/login'>Login</Link></li>
                        <li><Link href="/signup">Sign-up</Link></li>
                    </ul>
                    
        </div>
            </div>
            
    </>
  )
}

export default Navbar
