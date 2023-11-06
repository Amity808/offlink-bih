import getprofileWithToken from "@/app/helpers/getprofileWithToken";

const isAuthenticated = async () => {
    if(typeof window !== "undefined") {
        const token = localStorage.getItem("token")
        
        if(!token) {
            return false;
        }
        
        // const userProfile = await getprofileWithToken(token)

        // return userProfile ? true : false;
    }
    return false
}

export default isAuthenticated;