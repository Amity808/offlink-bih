// import { useContractWrite, usePrepareContractWrite } from "wagmi";
import offlick from "../../contract/offlink.json";
import { BigNumber } from "ethers";
import { prepareWriteContract, writeContract } from "@wagmi/core"

export const contractSendWrite = async (functionName, args) => {
  try {
    const config = await prepareWriteContract({
      address: offlick.address,
      abi: offlick.abi,
      functionName: functionName,
      args: args,
    })
    const resultSate = await writeContract(config)
  
    return resultSate
  } catch (error) {
    console.log(error)
  }
  
  
    
}