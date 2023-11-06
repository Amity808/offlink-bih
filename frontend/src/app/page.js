'use client'
import Image from 'next/image'
import Navbar from './component/Navbar'
import Header from './component/Header'
import Transaction from './component/Transaction'
import "./component/style.css"

export default function Home() {
  const [email, setEmail] = useState(second)
  
  return (
    <div className='main bg-[#0B0B0BF2] h-[100vh]'>
      <Navbar/>
      <Header />
      <Transaction/>
    </div>
  )
}
