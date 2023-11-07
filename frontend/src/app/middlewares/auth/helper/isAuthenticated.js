// import getprofileWithToken from "@/app/helpers/getprofileWithToken";

const isAuthenticated = async () => {
    let token
    if(typeof window !== "undefined") {
        token = localStorage.getItem("bih")
        
        if(!token) {
            return false;
        } else {
            return true
        }

        
        
    }
    console.log(token)
    return false
    
}

export default isAuthenticated;