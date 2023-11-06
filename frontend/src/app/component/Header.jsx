import React from 'react'
import Navbar from './Navbar'
import man from '../../../public/man.png'
import Image from 'next/image'
const Header = () => {
return (
<>
    <div className="picture lg:w-[80%] md:w-[95%] w-full md:h-[15rem] md:flex md:flex-row flex flex-col-reverse bg-[#343435] h-[30rem] rounded-xl ml-auto mr-auto mt-6">
            
        <div className="txt flex md:w-[50%] w-full pb-6">
                
      <div className=' flex  w-full flex-col space-y-4 mt-6 '>
         {/* <div className="logo flex space-x-2 items-center px-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 32 30" fill="none">
               <rect width="23.7953" height="5.15228" transform="matrix(0.64133 -0.767265 0.815003 0.579456 0 18.2573)" fill="white"/>
               <rect width="23.7953" height="5.15228" transform="matrix(0.64133 -0.767265 0.815003 0.579456 5.84912 22.4157)" fill="white"/>
               <rect width="23.7953" height="5.15228" transform="matrix(0.64133 -0.767265 0.815003 0.579456 11.6196 26.4186)" fill="white"/>
            </svg>
         
         
      </div> */}
      <p className='px-5 text-white text-2xl lg:text-4xl'>Cashback up to 60%</p>
                    <p className='px-5 text-gray-500'>get reward, gift & cashback</p>
                    <div className='px-5'>
      <button className='btn2 h-[3rem] w-[6rem] flex justify-center font-semibold items-center rounded-lg text-black bg-[#FED7FD]'>
      New Listing
      </button></div>
   </div>
            </div>
            
<div className="txt-image md:w-[50%] w-full ">
   <Image src={man} className='w-full h-full object-contain'/>
    </div>
            
</div>
<div className='Trans lg:w-[80%] md:w-[95%] h-[2rem] ml-auto mr-auto mt-6'>
   <p className='trans-name border-b-2 border-orange-500 w-[6.5rem] text-white'>Transaction</p>
</div>
</>
)
}
export default Header;