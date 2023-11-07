import useValidation from "../hooks/useValidator";
import useLoading from "../hooks/usLoading";
import { useRouter } from "next/navigation";
import isEmail from "validator/lib/isEmail";
import validator from "validator";
import api from "../http/axiosFetch"
import { toast } from "react-toastify";

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
        const response = await api.post("/auth/login", data)
        const body = await response
        if(body.status)
        console.log(body)
        localStorage.setItem("bih", body?.data?.accessToken);
        toast.success("Login Successful")
        stopLoading();
        router.push("/")
        return false
    } catch (err) {
        stopLoading()
        setError(`${err?.response?.data?.error?.status == 401 ? "You have not verified your email address" : "Unexpected Error"}`)
        console.log(err?.response?.data?.error?.message)
        return false
    }

    // setError(emailError?.message);
    
  };

  return { isLoading, submitForm}
};

export default useLogin;
