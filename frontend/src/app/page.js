'use client'
import { useState } from 'react'
import Image from 'next/image'
import Navbar from './component/Navbar'
import Header from './component/Header'
import Transaction from './component/Transaction'
import "./component/style.css"
import AuthMiddleware from "./middlewares/auth/AuthMiddleware"

export default function Home() {
  const [email, setEmail] = useState("")
  
  return (
    <AuthMiddleware>
      <div className='main bg-[#0B0B0BF2] h-[100vh]'>
      <Navbar/>
      <Header />
      <Transaction/>
    </div>
    </AuthMiddleware>
  )
}
