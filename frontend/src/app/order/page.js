"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import Button from "../ui/button";
import Navbar from "../component/Navbar";
import { useAccount } from "wagmi";
import { useTruncateAddress } from "../helpers/useTruncateAddress";
import { identiconAddress } from "../helpers/IdenticonAddress";
import AuthMiddlware from "../middlewares/auth/AuthMiddleware";

const Order = () => {
  const { address } = useAccount();
  const [fiatCurrency, setFiatCurrency] = useState("");
  const [deposipAmount, setDeposipAmount] = useState(0);
  return (
    <AuthMiddlware>
      <div>
        <Navbar />
        <div className=" flex flex-col justify-center items-center my-auto">
          {identiconAddress(address, 15)}
          <span className=" mt-[30px]">
            <p>{useTruncateAddress(address)}</p>
          </span>

          <div>
            <form className=" mt-[100px]">
              <div className=" flex flex-col gap-2 justify-center">
                <span className="flex flex-col">
                  <label
                    htmlFor=""
                    className=" font-semibold text-[18px] mb-[10px]"
                  >
                    Convert your stable coin to fiat
                  </label>
                  <Input
                    type="number"
                    placeHolder="EG Naira"
                    className="w-full pl-4 h-[3rem] bg-[#EAF0F7] rounded-md"
                    value={deposipAmount}
                    onChange={(e) => {
                      setDeposipAmount(e.target.value);
                    }}
                  />
                </span>

                <span className=" flex flex-col">
                  <label
                    htmlFor=""
                    className=" font-semibold text-[18px] mb-[10px] rounded-lg "
                  >
                    Currency
                  </label>
                  <Input
                    type="text"
                    placeHolder="EG Naira"
                    className="w-full pl-4 h-[3rem] bg-[#EAF0F7] rounded-md"
                    value={fiatCurrency}
                    onChange={(e) => {
                      setFiatCurrency(e.target.value);
                    }}
                  />
                </span>
              </div>
              {/* <button className=" w-[360px] h-[60px] bg-[#0087FF] rounded-lg mt-[40px] text-lg font-semibold text-white">
                Convert
              </button> */}
              <Button className="w-full h-[3rem] flex items-center justify-center bg-[#4461F2] font-bold rounded-md text-white  mt-6">Convert</Button>
            </form>
          </div>
          {/* <div className=" flex justify-center items-center flex-col">
          <span className="">
            <Image src={newSVg} alt="new" className=" w-[200px] h-[200px] mt-[40px]" />
          </span>

          <button className=" w-[360px] h-[60px] bg-[#0087FF] rounded-lg mt-[40px] text-lg font-semibold text-white" onClick={transferToken}>
            Make Payment
          </button>
          </div>
         */}
          <p>Order Transaction</p>
        </div>
      </div>
    </AuthMiddlware>
  );
};

export default Order;
