import useValidation from "../hooks/useValidator";
import useLoading from "../hooks/usLoading";
import { useRouter } from "next/navigation";
import isEmail from "validator/lib/isEmail";
import validator from "validator";


const useLogin = ({ email, password, setError }) => {
  const router = useRouter();
  const { isLoading, startLoading, stopLoading } = useLoading();

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
        const body = await response()
        console.log(body)
        router.push("/")
        return true
    } catch (err) {
        stopLoading()
        setError("Unexpected")
        return false
    }

    // setError(emailError?.message);
    
  };

  return { isLoading, submitForm}
};

export default useLogin;
