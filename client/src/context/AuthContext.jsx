/* eslint-disable react/prop-types */
import {createContext, useCallback, useEffect, useState} from "react";
import {baseUrl, postRequset} from "../utils/services";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [registerError, setRegisterError] = useState(null);
    const [iseRegisterLoading, setIsRegisterLoading] = useState(false);
    const [registerInfo, setRegisterInfo] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [loginError, setLoginError] = useState(null);
    const [isLoginLoading, setIsLoginLoading] = useState(false);
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        const user = localStorage.getItem('User')
        setUser(JSON.parse(user))
    }, []);

    const upadteRegisterInfo = useCallback((info) => {
        setRegisterInfo(info);
    }, []);

    const upadteLoginInfo = useCallback((info) => {
        setLoginInfo(info);
    }, []);

    const registerUser = useCallback(async (e) => {
        e.preventDefault()

        setIsRegisterLoading(true);
        setRegisterError(null);
        const response = await postRequset(
            `${baseUrl}/users/register`,
            JSON.stringify(registerInfo)
        );

        setIsRegisterLoading(false);

        if (response.error) {
            return setRegisterError(response);
        }

        localStorage.setItem("User", JSON.stringify(response));
        setUser(response);
    }, [registerInfo]);

    const loginUser = useCallback( async (e)=>{
        e.preventDefault()
        setIsLoginLoading(true)
        setLoginError(null)

        const response = await postRequset(
            `${baseUrl}/users/login`,
            JSON.stringify(loginInfo)
        );
        setIsLoginLoading(false)

        if(response.error){
            return setLoginError(response)
        }

        localStorage.setItem("User", JSON.stringify(response))
        setUser(response)

    },[loginInfo])

    const logoutUser = useCallback(() => {
        localStorage.removeItem("User")
        setUser(null)
    }, [])
    return (
        <AuthContext.Provider
            value={{
                user,
                registerInfo,
                upadteRegisterInfo,
                registerUser,
                registerError,
                iseRegisterLoading,
                logoutUser,
                loginUser,
                loginError,
                loginInfo,
                upadteLoginInfo,
                isLoginLoading
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
