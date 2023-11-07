import { useRouter } from "next/navigation";
// import Loader from "@/app/ui/Loader";
import Loader from "../../ui/Loader"
import useAuthenticated from "../../hooks/useAuthenticated";


const AuthMiddlware = ({ children }) => {
    const router = useRouter();

    const { isLoading, authenticated: isAuthenticated } = useAuthenticated()

    if(isLoading) return <Loader />

    if(isAuthenticated) return <>{children}</>

    if(!isAuthenticated && !isLoading) {
        router.push("/login")
    }
    return <Loader />
}

export default AuthMiddlware;