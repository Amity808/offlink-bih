import React from 'react'
import newSvg from "../component/icons/new.svg"
import Image from 'next/image'
const OrderSpiner = () => {
  return (
    <div>
        <span className="">
            <Image src={newSVg} alt="new" className=" w-[200px] h-[200px] mt-[40px]" />
          </span>
    </div>
  )
}

export default OrderSpiner
