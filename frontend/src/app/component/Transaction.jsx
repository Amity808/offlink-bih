import React from 'react'
import celo from '../../../public/celo.png'
import Image from 'next/image'

const Transaction = () => {
    return (
      <>
            <div className="main-transaction mt-6 lg:w-[80%] md:w-[95%] bg-red-500  ml-auto mr-auto space-y-4">

                <div className='trans1 h-[4rem] w-full bg-blue-500  flex items-center justify-around '>
                    <div className='logo md:w-3rem md:h-full w-[2rem] h-[2rem] rounded-lg'>
                         <Image src={celo} className=' w-full h-full object-contain'/>
                    </div>
                    <div className=''>
                        <p className='text-white'>0x24444....rdf3</p>  
                    </div>
                    <div className='md:flex md:flex-col hidden'>
                        <p>Date</p>
                        <p className='text-white'>21 july</p>
                    </div>
                    <div className='md:flex md:flex-col hidden'>
                        <p>Time</p>
                        <p className='text-white'>09:00</p>
                    </div>
                    <div className='flex flex-col'>
                        <p>Amount</p>
                        <p className='text-white'>+$234</p>
                    </div>

                        <button className='btn md:w-[6rem] md:h-[2.5rem] w-[4rem] h-[2rem] text-gray items-center justify-center bg-yellow-500 rounded-lg'>Accept</button>
                </div>


                <div className='trans1 h-[4rem] w-full bg-blue-500 flex items-center justify-around'>
                     <div className='logo md:w-3rem md:h-full w-[2rem] h-[2rem] rounded-lg '>
                         <Image src={celo} className=' w-full h-full object-contain'/>
                    </div>
                    <div className=''>
                        <p className='text-white'>0x24444....rdf3</p>  
                    </div>
                    <div className='md:flex md:flex-col hidden'>
                        <p>Date</p>
                        <p className='text-white'>21 july</p>
                    </div>
                    <div className='md:flex md:flex-col hidden'>
                        <p>Time</p>
                        <p className='text-white'>09:00</p>
                    </div>
                    <div className='flex flex-col'>
                        <p>Amount</p>
                        <p className='text-white'>+$234</p>
                    </div>
                    
                        <button className='btn md:w-[6rem] md:h-[2.5rem] text-gray w-[4rem] h-[2rem] items-center justify-center bg-yellow-500 rounded-lg'>Accept</button>
                </div>



                <div className='trans1 h-[4rem] w-full bg-blue-500 flex items-center justify-around '>
                    <div className='logo md:w-3rem md:h-full w-[2rem] h-[2rem] rounded-lg '>
                         <Image src={celo} className=' w-full h-full object-contain'/>
                    </div>
                    <div className=''>
                        <p className='text-white'>0x24444....rdf3</p>  
                    </div>
                    <div className='md:flex md:flex-col hidden'>
                        <p>Date</p>
                        <p className='text-white'>21 july</p>
                    </div>
                    <div className='md:flex md:flex-col hidden'>
                        <p>Time</p>
                        <p className='text-white'>09:00</p>
                    </div>
                    <div className='flex flex-col'>
                        <p>Amount</p>
                        <p className='text-white'>+$234</p>
                    </div>
                    
                        <button className='btn md:w-[6rem] md:h-[2.5rem] w-[4rem] h-[2rem] items-center justify-center text-gray bg-yellow-500 rounded-lg'>Accept</button>
                </div>

            </div>


        </>
  )
}

export default Transaction;