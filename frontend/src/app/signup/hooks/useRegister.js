import validator from "validator";
import useLoading from "../../hooks/usLoading";
import { useRouter } from "next/navigation";
import api from "../../http/axiosFetch"
import { toast } from "react-toastify";
const useRegister = ({ email, password, setError}) => {
  const router = useRouter()
  const { isLoading, startLoading, stopLoading} = useLoading()

  const submitForm = async () => {
    startLoading();
    setError("");

    const data = {email, password };

    try {
        useValidation(() => {
            if (!email) throw new Error("Invalid email");
            if (!isEmail(email ?? "")) throw new ("Email is invalid");
            return true
        });

        useValidation(() => {
            if (!password) throw new Error("Inavlid Password");
            if(!validator.isStrongPassword(password, {minLength: 8})) {
                throw new Error("password is not strong, add symbols and alphanumeric characters")   
            }
            return 
        })

    } catch (error) {
        console.log(error?.message)
    }

    try {
        const response = await fetch("http://16.16.185.83:80/auth/register",{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const body = await response.json()
        console.log(body)
        if(body?.message) {
            toast.success(body?.message)
            stopLoading()
            router.push("/login")
        } else{
            setError(body?.error?.message)
        }
        stopLoading()
        // router.push("/login")
        return true
    } catch (err) {
        stopLoading()
        setError("Unexpected")
        return false
    }
    
  };

  return { isLoading, submitForm}
  
}

export default useRegister