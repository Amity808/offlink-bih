import { useCallback, useState, useMemo } from "react";
import api from "../../../http/axiosfetch";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import useLoading from "./usLoading";
import useEmailValdiation from "./useValidator";

const useLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, validateValue } = useEmailValdiation()


  const { startLoading, stopLoading } = useLoading();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasworrdChange = (e) => {
    setPassword(e.target.value);
  };

  const loginData = { email: email, password: password}

  const loginUser = async () => {
    try {
      const response = api.post("/auth/login", loginData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response;
      startLoading()
      localStorage.setItem("bih", result?.data.accessToken);
      toast.success("Logged In");
      return result;
    } catch (error) {
      console.log(`${err?.message ? "Network Error" : "You have not verified your email address. or Try again"} `);
      stopLoading();
      toast.error();
    }
  };

  return { email, password, handleEmailChange, handlePasworrdChange, startLoading, stopLoading, loginUser  };
};
