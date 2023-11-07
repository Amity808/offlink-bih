import { useMemo } from "react"


const useNaira = async () => {

        try {
            const newNaira = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=usd&vs_currencies=ngn`, {
                method: "GET"
            })
            const naira = await newNaira.json()
            // console.log(naira?.usd?.ngn)
            return naira?.usd?.ngn
        } catch (error) {
            console.log(error)
        }
   
}

export default useNaira;