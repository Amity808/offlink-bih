"use client";
import { useDebounce } from "use-debounce";
import { useState } from "react";
import useNaira from "../../hooks/useNaira";
import { useContractCall } from "../../hooks/contractHook/useContractRead";
import { useContractSendWrite } from "../../hooks/contractHook/useContractWrite";
import useLoading from "../../hooks/usLoading";

const useUserSendTransaction = ({ fiat_currency, token_amount, setError }) => {
  const [blockData, setBlockData] = useState();
  const [resultState, setResultState] = useState(false)
  const { isLoading, startLoading, stopLoading } = useLoading();
  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("bih");
  }
  const cryptocurrency = "0x874069fa1eb16d44d622f2e0ca25eea172369bc1";

  const { data } = useContractCall("_ordersCount", [], true);
  const nonce = Number(data?.toString());
  // console.log(nonce);

  const placeOrder = async () => {
    startLoading();
    setError("");
    const nairaRate = await useNaira();
    const fiat_amount = nairaRate * token_amount;
    const data = {
      nonce,
      token_amount,
      cryptocurrency,
      fiat_currency,
      fiat_amount,
    };
    try {
      const response = await fetch(
        `http://16.16.185.83:80/api/v1/new-transaction`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer: ${token}`,
          },
        }
      );
      const body = await response.json();
      console.log(body);
      const result = body?.signedTransaction;
      if (result) {
        setBlockData(result);
        stopLoading();
      }
      console.log(blockData);
      stopLoading();
      return true;
    } catch (error) {
      stopLoading();
      console.log(error);
      setError("Unexpected Error");
      return false;
    }

    
  };

  return { isLoading, placeOrder, blockData };
};

export default useUserSendTransaction;
