import { useState, useCallback } from "react";
import EyeClosedIcon from "../component/icons/EyeClosed";
import EyeOpenedIcon from "../component/icons/EyeOpened";



const CustomPasswordInput = ({
    id,
    name,
    error,
    value,
    ...props
  }) => {
    const [visible, setVisible] = useState<boolean>(false);
  
    const toggleVisibility = useCallback(() => {
      setVisible((state) => !state);
    }, [visible]);
  
    return (
      <div className="form-group mb-8 w-[80%]">
        <div className="relative">
          <input
            id={id}
            name={name}
            {...props}
            type={visible ? "text" : "password"}
            className="w-full py-4 border-b border-gray-200 font-normal"
          />
          <div className="absolute cursor-pointer top-0 right-4 flex items-center pl-3 h-full">
            <div onClick={toggleVisibility}>
              {visible ? (
                <EyeClosedIcon></EyeClosedIcon>
              ) : (
                <EyeOpenedIcon></EyeOpenedIcon>
              )}
            </div>
          </div>
        </div>
        {error && value && <div className="text-red-900 text-sm">{error}</div>}
      </div>
    );
  };
  
  export default CustomPasswordInput;
  