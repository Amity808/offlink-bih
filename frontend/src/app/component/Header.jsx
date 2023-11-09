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
         
      <p className='px-5 text-white text-2xl lg:text-4xl'>Get Started</p>
                    <p className='px-5 text-gray-500'>Trade, Secure & Fast</p>
                    <div className='px-5'>
      <button className='btn2 p-2 flex justify-center font-semibold items-center rounded-lg text-white bg-black'>
      Trade
      </button></div>
   </div>
            </div>
            
<div className="txt-image md:w-[50%] w-full ">
   <Image src={man} className='w-full h-full object-contain'/>
    </div>
            
</div>

</>
)
}
export default Header;