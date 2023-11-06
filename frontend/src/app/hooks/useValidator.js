'use client'
import { useState, useEffect } from "react";


const useValidation = (validator) => {
    const [error, setError] = useState("")

    useEffect (() => {
        try {
            validator()
            setError('')
        } catch (error) {
            setError(error?.message)
        }
    })
    return error
}

export default useValidation;