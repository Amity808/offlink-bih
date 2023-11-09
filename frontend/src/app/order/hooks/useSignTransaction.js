import useLoading from "../../hooks/usLoading";
import { useDebounce } from "use-debounce";
import { useContractCall } from "../../hooks/contractHook/useContractRead";
import { parseEther } from "ethers/lib/utils";
import { useContractTrans } from "../../hooks/contractHook/useContractTrans";
import { toast } from "react-toastify";
import { useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { contractSendWrite } from "../../hooks/contractHook/useContractWrite";
import { useContractSendWrite } from "../../hooks/contractHook/useContractWrite";
import offlick from "../../contract/offlink.json"

const useSignTransaction = ({
  token_amount,
  blockData,
  setError,
  setMessage,
}) => {
  const { isLoading, startLoading, stopLoading } = useLoading();

  const { address } = useAccount();
  const { openConnectModal } = useConnectModal();

  const { data } = useContractCall("_ordersCount", [], true);

  const nonce = Number(data?.toString());
  console.log(nonce);
  const [deBounceNonce] = useDebounce(blockData?.[0], 500);
  const [deBounceTokenAmount] = useDebounce(blockData?.[1], 500);
  const [deBounceCurrencyAmount] = useDebounce(blockData?.[2], 500);
  // currency type eg Naira
  const [deBounceCurrenyByte] = useDebounce(blockData?.[3], 500);
  const [deBounceCurrencyTokenAdd] = useDebounce(blockData?.[4], 500);
  const [deBounceSignature] = useDebounce(blockData?.[5], 500);

  const { writeAsync: useApprove, isLoading: loadingApprove } = useContractTrans(
    token_amount?.toString() || "1"
  );

  const convertValue = parseEther(deBounceTokenAmount?.toString() || "1");

  const { writeAsync: placeOrder, isLoading: placeOrderLoading } = useContractSendWrite("placeSellOrder",
  [
    deBounceNonce,
    token_amount.toString(),
    deBounceCurrencyAmount,
    deBounceCurrenyByte,
    deBounceCurrencyTokenAdd,
    deBounceSignature,
  ])

  // const placeOrder = async() => {
  //   const newOrder = await contractSendWrite(
  //   "placeSellOrder",
  //   [
  //     deBounceNonce,
  //     token_amount.toString(),
  //     deBounceCurrencyAmount,
  //     deBounceCurrenyByte,
  //     deBounceCurrencyTokenAdd,
  //     deBounceSignature,
  //   ]
  // );

  // return newOrder
  // }

  

  const handleSignTransaction = async () => {
    if (!useApprove) {
      setError("Kindly accept Transaction");
    }

    // console.log(placeSellOrder);

    // return;

    const approve = await useApprove();
    await approve

    if (!placeOrder) {
      setError("Failed To Sign Transaction");
      throw "Failed to place order";
    }

    await placeOrder();
    setMessage("waiting for confirmation");

    
  };

  const signUserTransaction = async () => {
    startLoading();
    setMessage("Approving ....");
    setError("");

    try {
      if (!address && openConnectModal) {
        openConnectModal();
        return;
      }
      await toast.promise(handleSignTransaction(), {
        pending: "Awaiting transaction",
        success: "Seccessful payment",
        error: "Error with payment",
      });
      stopLoading();
      return true;
    } catch (error) {
      stopLoading();
      console.log(err?.message);
      toast.error(err?.message);
      setError("unexpected Error");
      return false;
    }
  };
  return { isLoading, placeOrderLoading,  signUserTransaction, handleSignTransaction, loadingApprove };
};

export default useSignTransaction;
