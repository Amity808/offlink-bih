import { useMemo } from "react";

const useToken = () => {
    const token = useMemo(() => {
        if (typeof window !== "undefined") {
            const getToken = localStorage.getItem('bih');
            return getToken;
        }
    }, []); // Provide an empty dependency array

    return {token};
}
export default useToken;
