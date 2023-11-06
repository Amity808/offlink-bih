import { useRouter } from "next/navigation";
import Loader from "@/app/ui/Loader";
import useAuthenticated from "@/app/hooks/useAuthenticated";

const WithoutAuthMiddleware = ({ children }) => {
    const router = useRouter();

    const { isLoading, authenticated: isAuthenticated } = useAuthenticated()

    if(isLoading) return <Loader />

    if(!isAuthenticated && !isLoading) return <>{children}</>

    if(isAuthenticated){
        router.push("/dashboard");
    }

    return <Loader />
} 

export default WithoutAuthMiddleware;