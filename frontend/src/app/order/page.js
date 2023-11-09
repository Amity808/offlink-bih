"use client";
import React, { useCallback, useState } from "react";
import { Input } from "../ui/input";
import Button from "../ui/button";
import Navbar from "../component/Navbar";
import { useAccount } from "wagmi";
import { useTruncateAddress } from "../helpers/useTruncateAddress";
import { identiconAddress } from "../helpers/IdenticonAddress";
import { useContractCall } from "../hooks/contractHook/useContractRead";
import AuthMiddlware from "../middlewares/auth/AuthMiddleware";
import useUserSendTransaction from "./hooks/useUserSendTransaction";
import LoadingIcon from "../component/icons/LoadingIcon";
import { useContractTrans } from "../hooks/contractHook/useContractTrans";
import useSignTransaction from "./hooks/useSignTransaction";

const Order = () => {
  const { address } = useAccount();
  const [fiat_currency, setFiat_currency] = useState("");
  const [token_amount, setTokenAmount] = useState("0");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // const { data } = useContractCall("MANAGER_ROLE", [], true);
  // console.log(data);

  const {
    isLoading,
    placeOrder: newOrder,
    blockData,
  } = useUserSendTransaction({
    token_amount,
    fiat_currency,
    setError,
  });
  // 0xAd3BD87169373EeEfB86D565c615ab0059Db152c
  const { loadingApprove, signUserTransaction: signTx, handleSignTransaction: tx } =
    useSignTransaction({
      token_amount,
      blockData,
      setError,
      setMessage,
    });

  // const { writeAsync: approve } = useContractTrans(blockData?.[1].toString() || "1")

  const handleTx = useCallback(async () => {
    try {
      if (!newOrder) {
        setError("Failed to place order enpoint");
      }

      await newOrder();

      // if(!signTx) throw "Failed to signTx"

      // if (order) {
        if (!tx) throw "Failed ";
        await tx();
        // return true;
      // }
    } catch (error) {
      console.log(error);
    }
  }, [newOrder]);

  return (
    <AuthMiddlware>
      <div className=" h-screen bg-[#0B0B0BF2] text-white">
        <Navbar />
        <div className=" flex flex-col justify-center items-center my-auto mt-[60px]">
          {identiconAddress(address, 15)}
          <span className=" mt-[30px]">
            <p>{useTruncateAddress(address)}</p>
          </span>

          <div>
            <form
              className=" mt-[70px]"
              onSubmit={(e) => {
                e.preventDefault();
                handleTx();
              }}
            >
              {" "}
              {error && <p className="my-4 text-red-900">{error}</p>}
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
                    className="w-full pl-4 h-[3rem] bg-[#EAF0F7] rounded-md text-black"
                    value={token_amount}
                    onChange={(e) => {
                      setTokenAmount(parseInt(e.target.value));
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
                    placeHolder="EG NGN"
                    className="w-full pl-4 h-[3rem] bg-[#EAF0F7] rounded-md text-black"
                    value={fiat_currency}
                    onChange={(e) => {
                      setFiat_currency(e.target.value);
                    }}
                  />
                </span>
              </div>
              {/* <button className=" w-[360px] h-[60px] bg-[#0087FF] rounded-lg mt-[40px] text-lg font-semibold text-white">
                Convert
              </button> */}
              <Button
                className="w-full h-[3rem] flex items-center justify-center bg-[#4461F2] font-bold rounded-md text-white  mt-6"
                disabled={isLoading || loadingApprove}
              >
                {isLoading || loadingApprove && <LoadingIcon />}
                Convert
              </Button>
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
          <p className=" mt-[20px]">Order Transaction</p>
          {/* <button onClick={approve}>Sign</button> */}
        </div>
      </div>
    </AuthMiddlware>
  );
};

export default Order;
