import React, { useState, useEffect} from 'react'
import useLoading from './usLoading'
import isAuthenticated from '../middlewares/auth/helper/isAuthenticated'


const useAuthenticated = () => {
    const [authenticated, setAuthenticated] = useState(false)
    const { isLoading, startLoading, stopLoading} = useLoading()
    

    useEffect(() => {
        startLoading();
        const authenticat = async () => {
            if( await isAuthenticated()) {
                setAuthenticated(true)
            }
            stopLoading();
        } 
        authenticat();
    },[]);
    return { isLoading, authenticated}
}

export default useAuthenticated