"use client"
import { useCallback, useState } from "react";

const useLoading = (state) => {
    const [isLoading, setIsLoading] = useState(state ?? false)
    
    const startLoading = useCallback(() => {
        setIsLoading(true);
    }, [isLoading])

    const stopLoading = useCallback(() => {
        setIsLoading(false)
    }, [isLoading])

    return{ isLoading, startLoading, stopLoading }
}

export default useLoading;