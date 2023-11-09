import useLoading from "../hooks/usLoading";
import { toast } from "react-toastify"

const useFetchTransaction = async (txStatus) => {
    // http://16.16.185.83:80/api/v1/transaction-listing?page=1&perPage=7&status=open
    // const { isLoading, startLoading, stopLoading } = useLoading()
    let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("bih");
  }
    // const fetchTx = async () => {
    //     startLoading()
    //     setError('')
        try {
            const response = fetch(`http://16.16.185.83:80/api/v1/transaction-listing?page=1&perPage=7&status=${txStatus}`, {
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer: ${token}`,
                }
            })
            const body = await (await response).json()
            console.log(body)
            // stopLoading();
            return body
        } catch (error) {
            // stopLoading()
            console.log(error);
            // return false;
        }
    // }

    // return { isLoading, fetchTx }

}

export default useFetchTransaction;