import useLoading from "../../hooks/usLoading";


const useSendVerification = async ( { email }) => {
    const { isLoading, startLoading, stopLoading } = useLoading()



    const sendVerification =  async () => {
        const response = fetch("http://16.16.185.83:80/auth/resend-confirmation-email",{
            method: "POST",
            body: JSON.stringify(email)
        })
    }
}