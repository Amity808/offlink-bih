'use client'
import React, { useState, useEffect } from "react";
import celo from "../../../public/celo.png";
import Image from "next/image";
import useFetchTransaction from "../hooks/useFetchTrans";

const Transaction =  () => {
    const [txStatus, setTxStatus] = useState('open')
    const [dataFetch, setDataFetch] = useState()
  const [error, setError] = useState("")

  const handleSelectChange = (event) => {
    setTxStatus(event.target.value);
  };
  
  useEffect(() => {
    const fetchtx = async () => {
      try {
          const tx = await useFetchTransaction(txStatus)
          const res = await tx;
          console.log(res)
          setDataFetch(res)
        } catch (error) {
          
        }
      }
      fetchtx()
    },[txStatus])
    console.log(txStatus)
  return (
    <>
      {" "}
      <div className="Trans lg:w-[80%] md:w-[95%] h-[2rem] ml-auto mr-auto mt-6 flex justify-between">
        <p className="trans-name border-b-2 border-orange-500 w-[6.5rem] text-white">
          Transaction
        </p>
        <div>
          <select value={txStatus} onChange={(e) => setTxStatus(e.target.value)} className="bg-black text-white border border-orange-400 p-2 rounded-lg">
            <option value="open">OPEN</option>
            <option value="active">Active</option>
            <option value="close">Close</option>
          </select>
        </div>
      </div>
      <div className="main-transaction mt-6 lg:w-[80%] md:w-[95%]  ml-auto mr-auto space-y-4">
        <div className="trans1 h-[4rem] w-full bg-[#343435]  flex items-center justify-around ">
          <div className="logo md:w-3rem md:h-full w-[2rem] h-[2rem] rounded-lg">
            <Image src={celo} className=" w-full h-full object-contain" />
          </div>
          <div className="">
            <p className="text-white">0x24444....rdf3</p>
          </div>
          <div className="md:flex md:flex-col hidden">
            <p className=" text-white">Date</p>
            <p className="text-white">21 july</p>
          </div>
          <div className="md:flex md:flex-col hidden">
            <p className=" text-white">Time</p>
            <p className="text-white">09:00</p>
          </div>
          <div className="flex flex-col">
            <p className=" text-white">Amount</p>
            <p className="text-white">+$234</p>
          </div>

          <button className="btn md:w-[6rem] md:h-[2.5rem] w-[4rem] h-[2rem] text-gray items-center justify-center bg-yellow-500 rounded-lg">
            Accept
          </button>
        </div>

        <div className="trans1 h-[4rem] w-full bg-[#343435] flex items-center justify-around">
          <div className="logo md:w-3rem md:h-full w-[2rem] h-[2rem] rounded-lg ">
            <Image src={celo} className=" w-full h-full object-contain" />
          </div>
          <div className="">
            <p className="text-white">0x24444....rdf3</p>
          </div>
          <div className="md:flex md:flex-col hidden">
            <p className=" text-white">Date</p>
            <p className="text-white">21 july</p>
          </div>
          <div className="md:flex md:flex-col hidden">
            <p className=" text-white">Time</p>
            <p className="text-white">09:00</p>
          </div>
          <div className="flex flex-col">
            <p className=" text-white">Amount</p>
            <p className="text-white">+$234</p>
          </div>

          <button className="btn md:w-[6rem] md:h-[2.5rem] text-gray w-[4rem] h-[2rem] items-center justify-center bg-yellow-500 rounded-lg">
            Accept
          </button>
        </div>

        <div className="trans1 h-[4rem] w-full bg-[#343435] flex items-center justify-around ">
          <div className="logo md:w-3rem md:h-full w-[2rem] h-[2rem] rounded-lg ">
            <Image src={celo} className=" w-full h-full object-contain" />
          </div>
          <div className="">
            <p className="text-white">0x24444....rdf3</p>
          </div>
          <div className="md:flex md:flex-col hidden">
            <p className=" text-white">Date</p>
            <p className="text-white">21 july</p>
          </div>
          <div className="md:flex md:flex-col hidden">
            <p className=" text-white">Time</p>
            <p className="text-white">09:00</p>
          </div>
          <div className="flex flex-col">
            <p className=" text-white">Amount</p>
            <p className="text-white">+$234</p>
          </div>

          <button className="btn md:w-[6rem] md:h-[2.5rem] w-[4rem] h-[2rem] items-center justify-center text-gray bg-yellow-500 rounded-lg">
            Accept
          </button>
        </div>
      </div>
    </>
  );
};

export default Transaction;
