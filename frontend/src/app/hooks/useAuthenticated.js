import React, { useState, useEffect} from 'react'
import useLoading from './usLoading'
import isAuthenticated from '../middlewares/auth/helper/isAuthenticated'

import { InjectedConnector} from "wagmi/connectors/injected"
import { useAccount, useConnect } from 'wagmi';
const useAuthenticated = () => {
    const [authenticated, setAuthenticated] = useState(false)
    const { isLoading, startLoading, stopLoading} = useLoading(true)
    
    const { connect } = useConnect({
        connector: new InjectedConnector()
    })

    useEffect(() => {
        startLoading();
        const authenticat = async () => {
            if( await isAuthenticated()) {
                setAuthenticated(true)
            }
            stopLoading();
        } 

        connect()
        authenticat();
    },[]);
    return { isLoading, authenticated}
}

export default useAuthenticated