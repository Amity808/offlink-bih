import validator from "validator";
import useLoading from "./usLoading";
import { useRouter } from "next/navigation";

const useRegister = ({ email, password, setError}) => {
  const router = useRouter()
  const { isLoading, startLoading, stopLoading} = useLoading()

  const submitForm = async () => {
    startLoading();
    setError("");

    const data = { email: email, password: password };

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
        const response = await fetch("http://16.16.185.83:80/auth/login",{
            method: "POST",
            body: JSON.stringify(data)
        })
        const body = await response
        console.log(body)
        return true
    } catch (err) {
        stopLoading()
        console.log(err)
        setError("Unexpected")
        return false
    }
    
  };

  return { isLoading, submitForm}
  
}

export default useRegister