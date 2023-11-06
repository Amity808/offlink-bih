// import React from 'react'
// import api from "../http/axiosFetch"
const getprofileWithToken = async (token) => {
    try {
        const response = await fetch("http://16.16.185.83:80/auth/login", {
            method: "POST",
            headers: {
                authorization: `Bearer: ${token}`
            }
        });

        const body = await response.json()
        console.log(body)
        if(response.status != 200){
            return false;
        }
        return body
    } catch (error) {
        return false
    }
}

export default getprofileWithToken;
